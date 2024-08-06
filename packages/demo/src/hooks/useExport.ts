import MemoApi from '../api/memoApi';

const MemoSignal = new MemoApi();

export interface UseExportProps {}

const useExport = () => {
  const exportHTML = async () => {
    const data = `data:text/html;charset=utf-8,
    <html lang="en" />
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
    ${encodeURIComponent(document.querySelector('main')?.outerHTML || '')}
    </body>
    </html>
    `;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', data);
    downloadAnchorNode.setAttribute('download', `Memo_${Date.now()}.html`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const exportJSON = async () => {
    +9;
    const data = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(await MemoSignal.getMemoList())
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', data);
    downloadAnchorNode.setAttribute('download', `Memo_${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const exportMD = async () => {
    return;
  };
  return {
    exportHTML,
    exportJSON,
    exportMD,
  };
};

export default useExport;
