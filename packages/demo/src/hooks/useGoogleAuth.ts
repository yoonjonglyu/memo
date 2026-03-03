import { useRef } from 'react';
import { GoogleSignIn } from '@capawesome/capacitor-google-sign-in';
import { Capacitor } from '@capacitor/core';
import { loadCDN } from 'isa-util';

declare global {
  interface Window {
    google: any;
  }
}

// @ts-ignore
const WEB_CLIENT_ID = googleCID;
// @ts-ignore
// const ANDROID_CLIENT_ID = googleClientIdAndroid;
// const REDIRECT_URI = 'com.yoonjongryu.memo:/oauth2redirect'; //an android scheme need a backend server.
const CLIENT_ID = WEB_CLIENT_ID; //Capacitor.isNativePlatform() ? ANDROID_CLIENT_ID : WEB_CLIENT_ID;
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

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

  const initialize = async () => {
    await GoogleSignIn.initialize({
      clientId: CLIENT_ID,
      scopes: [SCOPES],
    });
  };

  const signIn = async (): Promise<string | null> => {
    // ======================
    // 🤖 Android (Native)
    // ======================
    if (isNative) {
      await initialize();
      return new Promise(async resolve => {
        // This will return null if there is no redirect result to handle
        const result = await GoogleSignIn.signIn();
        if (result.accessToken) {
          resolve(result.accessToken);
        } else {
          resolve(null);
        }
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
