import { useEffect } from 'react';
import { App } from '@capacitor/app';

const useBackButton = (onBack: () => void) => {
  useEffect(() => {
    // 뒤로가기 이벤트 리스너 등록
    const backHandler = App.addListener('backButton', data => {
      // data.canGoBack은 현재 웹뷰 히스토리가 있는지 알려줍니다.
      // 메인 화면(히스토리가 없을 때)에서만 모달을 띄우고 싶다면 조건부 실행 가능
      onBack();
    });

    return () => {
      backHandler.then(h => h.remove());
    };
  }, [onBack]);
};

export default useBackButton;
