import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yoonjonglyu.memo',
  appName: 'MemoFlow',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // 스플래시 표시 시간 (ms)
      backgroundColor: '#ffffff', // 검은 화면 대신 흰색 배경 강제
    },
  },
};

export default config;
