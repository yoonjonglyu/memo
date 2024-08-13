import MemoApi from '../api/memoApi';

import type { MemoListStateProps } from '../store/memo/memoListState';

const MemoSignal = new MemoApi();

export interface UseExportProps {}

const useExport = () => {
  const exportHTML = async () => {
    const data = new Blob(
      [
        `    <html lang="en" />
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memo</title>
    <style>
      header {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        max-width: 1232px;
        width: 100%;
        margin: 0px auto;
      }
      header h1 {
        font-size: 1.3rem;
        line-height: 1.5rem;
        text-shadow: gray 0.5px 0.5px, gray 0.5px 0.5px;
      }
      main {
        display: flex;
        flex-flow: wrap;
        align-items: flex-start;
        align-content: flex-start;
        gap: 8px;
        max-width: 1232px;
        width: 100%;
        min-height: 100vh;
        padding-bottom: 88px;
        margin: 0px auto;
        border-right: 1px solid rgba(156, 155, 155, 0.31);
        border-left: 1px solid rgba(156, 155, 155, 0.31);
        border-image: initial;
        border-top: none;
        border-bottom: none;
      }
      section {
        width: 240px;
        height: 200px;
        margin: 0px;
        padding: 4px;
        border: 1px solid;
        box-shadow: gray 1px 1px;
        word-break: break-all;
        overflow: hidden auto;
        box-sizing: border-box;
      }
      textarea {
        width: 100%;
        height: 100%;
        resize: none;
        outline: none;
        border: none;
        font-size: 0.9rem;
        word-break: break-all;
        overflow: hidden auto;
      }
      section ul {
        display: flex;
        flex-flow: column;
        gap: 3px;
        margin: 3px auto;
        padding: 0px;
        list-style: none;
        overflow-y: auto;
      }
      section ul li {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin: 0px;
        padding: 3px;
        font-size: 0.8rem;
        background: rgba(128, 128, 128, 0.216);
        border-radius: 3px;
      }
      section ul li button {
        height: 24px;
        margin: auto 0px auto auto;
        background: none;
        border: 0.5px solid rgba(0, 0, 0, 0.325);
        border-radius: 2px;
      }
    </style>
    </head>
    <body>
    <header>
      <h1>Memo</h1>
    </header>
    ${document.querySelector('main')?.outerHTML}
    </body>
    </html>
    `,
      ],
      {
        type: 'text/plain',
      }
    );
    download(data, 'html');
  };
  const exportJSON = async () => {
    const data = new Blob([JSON.stringify(await MemoSignal.getMemoList())], {
      type: 'text/plain',
    });
    download(data, 'json');
  };
  const exportMD = async () => {
    const data = new Blob([ConvertToMarkdown(await MemoSignal.getMemoList())], {
      type: 'text/plain',
    });
    download(data, 'md');
  };
  const ConvertToMarkdown = (data: Array<MemoListStateProps>) => {
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
            .map(
              (item, idx) =>
                `${idx} ${item.value}`
            )
            .join('\n')}\n\n---\n\n`;
          break;
        default:
          break;
      }

      return r;
    }, `# memo\n\n`);
    return result;
  };
  const download = (data: Blob, type: string) => {
    const downloadAnchorNode = document.createElement('a');
    const url = window.URL.createObjectURL(data);
    downloadAnchorNode.setAttribute('href', url);
    downloadAnchorNode.setAttribute('download', `Memo_${Date.now()}.${type}`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    window.URL.revokeObjectURL(url);
  };
  return {
    exportHTML,
    exportJSON,
    exportMD,
  };
};

export default useExport;
