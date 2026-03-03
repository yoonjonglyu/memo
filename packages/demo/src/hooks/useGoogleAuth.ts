import { useRef } from 'react';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { loadCDN } from 'isa-util';

declare global {
  interface Window {
    google: any;
  }
}

// @ts-ignore
const CLIENT_ID = googleCID;
const SCOPES = 'https://www.googleapis.com/auth/drive.file';
const REDIRECT_URI = 'com.yoonjongryu.memo:/oauth2redirect';

const buildAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'token',
    scope: SCOPES,
    include_granted_scopes: 'true',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

const loadGoogleScript = (): Promise<void> => {
  return new Promise(resolve => {
    if (window.google?.accounts) {
      resolve();
      return;
    }
    loadCDN('google-accounts', 'https://accounts.google.com/gsi/client', {
      defer: true,
      async: true,
    }).then(() => resolve());
  });
};

const useGoogleAuth = () => {
  const tokenClient = useRef<any>(null);
  const isNative = Capacitor.isNativePlatform();

  const signIn = async (): Promise<string | null> => {
    // ======================
    // 🤖 Android (Native)
    // ======================
    if (isNative) {
      return new Promise(async resolve => {
        const url = buildAuthUrl();

        const listener = await App.addListener('appUrlOpen', async data => {
          if (data.url.startsWith(REDIRECT_URI)) {
            await Browser.close();

            const hash = data.url.split('#')[1];
            const params = new URLSearchParams(hash);
            const accessToken = params.get('access_token');

            resolve(accessToken);
          }
        });

        await Browser.open({ url });
      });
    }

    // ======================
    // 🌐 Web
    // ======================
    await loadGoogleScript();

    return new Promise(resolve => {
      if (!window.google?.accounts?.oauth2) {
        resolve(null);
        return;
      }

      if (!tokenClient.current) {
        tokenClient.current = window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: (response: any) => {
            if (response.error) {
              resolve(null);
              return;
            }

            resolve(response.access_token);
          },
        });
      }

      tokenClient.current.requestAccessToken();
    });
  };

  return { signIn };
};

export default useGoogleAuth;
