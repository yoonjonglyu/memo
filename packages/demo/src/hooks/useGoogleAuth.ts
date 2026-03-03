import { useRef } from 'react';
import { loadCDN } from 'isa-util';

declare global {
  interface Window {
    google: any;
  }
}
//@ts-ignore
const CLIENT_ID = googleCID;
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

const useGoogleAuth = () => {
  const tokenClient = useRef<any>(null);
  const scriptLoaded = () => {
    loadCDN('google-auth', 'https://accounts.google.com/gsi/client', {
      async: true,
      defer: true,
    });
  };
  const signIn = (): Promise<string | null> => {
    return new Promise(resolve => {
      if (!window.google) {
        console.error('Google Identity script not loaded');
        resolve(null);
        return;
      }

      if (!tokenClient.current) {
        tokenClient.current = window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: (response: any) => {
            if (response.error) {
              console.error(response);
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

  return { scriptLoaded, signIn };
};

export default useGoogleAuth;
