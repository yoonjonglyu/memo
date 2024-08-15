import { download } from 'isa-util';

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
    <main role="main">
    ${convertToHTML(await MemoSignal.getMemoList())}
    </main>
    </body>
    </html>
    `,
      ],
      {
        type: 'text/plain',
      }
    );
    download(data, `meme_${Date.now()}`, 'html');
  };
  const exportJSON = async () => {
    const data = new Blob([JSON.stringify(await MemoSignal.getMemoList())], {
      type: 'text/plain',
    });
    download(data, `meme_${Date.now()}`, 'json');
  };
  const exportMD = async () => {
    const data = new Blob([convertToMarkdown(await MemoSignal.getMemoList())], {
      type: 'text/plain',
    });
    download(data, `meme_${Date.now()}`, 'md');
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
        default:
          break;
      }

      return r;
    }, '');
    return result;
  };

  return {
    exportHTML,
    exportJSON,
    exportMD,
  };
};

export default useExport;
