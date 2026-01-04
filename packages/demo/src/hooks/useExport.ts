import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { download } from 'isa-util'; // 기존 웹용 다운로드 유틸

import MemoApi from '../api/memoApi';

import type { MemoListStateProps } from '../store/memo/memoListState';

const MemoSignal = new MemoApi();

export interface UseExportProps {}

const useExport = () => {
  const exportHTML = async () => {
    const data = new Blob(
      [
        `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Memo Export</title>
    <style>
        :root {
            --bg-color: #f8f9fa;
            --card-bg: #ffffff;
            --text-main: #212529;
            --text-muted: #6c757d;
            --accent-color: #4dabf7;
            --border-radius: 12px;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        header {
            max-width: 800px;
            margin: 0 auto 30px;
            text-align: center;
        }
        header h1 {
            font-size: 1.8rem;
            color: var(--text-main);
            font-weight: 800;
        }
        main {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }
        section {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            max-height: 300px;
            overflow-y: auto;
        }
        /* 메모 스타일 */
        textarea {
            width: 100%;
            border: none;
            resize: none;
            font-family: inherit;
            font-size: 1rem;
            color: var(--text-main);
            outline: none;
            padding: 0;
            background: transparent;
        }
        /* 할 일/노트 리스트 스타일 */
        ul, ol {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li {
            padding: 8px 12px;
            margin-bottom: 6px;
            background: #f1f3f5;
            border-radius: 6px;
            font-size: 0.95rem;
        }
        ol li {
            background: transparent;
            border-bottom: 1px solid #eee;
            border-radius: 0;
            padding-left: 4px;
        }
        @media screen and (max-width: 480px) {
            main { grid-template-columns: 1fr; }
            body { padding: 15px; }
        }
    </style>
</head>
<body>
    <header>
        <h1>My Memos</h1>
    </header>
    <main>
        ${convertToHTML(await MemoSignal.getMemoList())}
    </main>
</body>
</html>`,
      ],
      {
        type: 'text/plain',
      }
    );
    saveAndShare(data, `meme_${Date.now()}`, 'html');
  };
  const exportJSON = async () => {
    const data = new Blob([JSON.stringify(await MemoSignal.getMemoList())], {
      type: 'text/plain',
    });
    saveAndShare(data, `meme_${Date.now()}`, 'json');
  };
  const exportMD = async () => {
    const data = new Blob(
      ['\ufeff' + convertToMarkdown(await MemoSignal.getMemoList())],
      {
        type: 'text/plain',
      }
    );
    saveAndShare(data, `meme_${Date.now()}`, 'md');
  };
  const convertToMarkdown = (data: Array<MemoListStateProps>) => {
    const result = data.reduce((r, c) => {
      switch (c.type) {
        case 'memo':
          r += `\`${c.props}\`\n\n`;
          break;
        case 'todo':
          r += `- ${c.props.map(item => item.todo).join(`\n- `)}\n\n`;
          break;
        case 'note':
          r += `---\n${c.props
            .map((item, idx) => `${idx} ${item.value}`)
            .join('\n')}\n\n---\n\n`;
          break;
        case 'draft':
          r += `## Draft (초안)\n\n${c.props}\n\n---\n\n`;
          break;
        default:
          break;
      }

      return r;
    }, `# memo\n\n`);
    return result;
  };
  const convertToHTML = (data: Array<MemoListStateProps>) => {
    const result = data.reduce((r, c) => {
      switch (c.type) {
        case 'memo':
          r += `<section><textarea>${c.props}</textarea></section>`;
          break;
        case 'todo':
          r += `<section>
          <ul>
          ${c.props.map(item => `<li>${item.todo}</li>`).join('')}
            </ul>
            </section>`;
          break;
        case 'note':
          r += `<section>
          <ol>
          ${c.props.map((item, idx) => `<li>${item.value}</li>`).join('\n')}
            </ol>
            </section>`;
          break;
        case 'draft':
          r += `
    <section class="draft-section" style="grid-column: 1 / -1; width: 100%; height: auto; min-height: 300px;">
      <h3 style="color: #4dabf7;">📝 Draft</h3>
      <div style="white-space: pre-wrap; font-size: 1.1rem; line-height: 1.8;">${c.props}</div>
    </section>`;
          break;
        default:
          break;
      }

      return r;
    }, '');
    return result;
  };
  const blobToText = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(blob);
    });
  };
  const saveAndShare = async (
    content: Blob,
    fileName: string,
    mimeType: string
  ) => {
    // 현재 실행 환경이 네이티브(Android/iOS)인지 확인
    if (Capacitor.isNativePlatform()) {
      try {
        const textData = await blobToText(content);
        const fullFileName = `${fileName}.${mimeType}`;

        const result = await Filesystem.writeFile({
          path: fullFileName,
          data: textData,
          directory: Directory.Cache,
          encoding: Encoding.UTF8,
        });

        await Share.share({
          title: 'Export Memo',
          url: result.uri,
        });
      } catch (error) {
        console.error('Native export failed', error);
      }
    } else {
      download(content, fileName, mimeType);
    }
  };

  return {
    exportHTML,
    exportJSON,
    exportMD,
  };
};

export default useExport;
