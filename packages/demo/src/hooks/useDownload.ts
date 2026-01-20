import { Browser } from '@capacitor/browser';

const url = {
  web: 'https://yoonjonglyu.github.io/memo/',
  and: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.memo',
};

const useDownload = () => {
  /**
   * 외부 링크를 안전하게 여는 함수
   * @param url 이동할 목적지 주소
   */
  const openExternalLink = async (url: string) => {
    try {
      await Browser.open({
        url: url,
        windowName: '_blank', // 웹 환경 대응
        toolbarColor: '#ffffff', // 인앱 브라우저 상단 바 색상 (앱 테마에 맞게 수정)
      });
    } catch (error) {
      alert('Failed to open link: ' + error);
    }
  };

  const downloadWeb = async () => {
    openExternalLink(url.web);
  };
  const downloadAnd = async () => {
    openExternalLink(url.and);
  };

  return { downloadWeb, downloadAnd };
};

export default useDownload;
