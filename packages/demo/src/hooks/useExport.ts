import MemoApi from '../api/memoApi';

const MemoSignal = new MemoApi();

export interface UseExportProps {}

const useExport = () => {
  const exportHTML = async () => {
    return;
    const data = `data:text/html;charset=utf-8,${encodeURIComponent(
      JSON.stringify(document.documentElement.outerHTML)
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', data);
    downloadAnchorNode.setAttribute('download', `Memo_${Date.now()}.html`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const exportJSON = async () => {
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
