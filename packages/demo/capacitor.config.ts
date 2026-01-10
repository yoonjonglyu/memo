import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yoonjonglyu.memo',
  appName: 'MemoFlow',
  webDir: 'dist',
  // 1. 상태바 및 스플래시 화면 설정을 위한 plugins 추가
  plugins: {
    StatusBar: {
      style: 'LIGHT', // 글자색 검정 (배경이 흰색일 때)
      backgroundColor: '#ffffff', // 상태바 배경색 흰색 고정
    },
    SplashScreen: {
      launchShowDuration: 2000, // 스플래시 표시 시간 (ms)
      backgroundColor: '#ffffff', // 검은 화면 대신 흰색 배경 강제
    },
  },
};

export default config;
