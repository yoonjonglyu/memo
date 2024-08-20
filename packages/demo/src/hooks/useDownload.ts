import { useState, useEffect } from 'react';

let installPrompt: any = null;
const useDownload = () => {
  const [isAvail, setIsAvail] = useState(false);
  const catchinstallEvent = (event: any) => {
    installPrompt = event;
    setIsAvail(true);
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', catchinstallEvent);
    console.log(installPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', catchinstallEvent);
    };
  }, []);

  const donwloadWeb = async () => {
    // @ts-ignore
    await installPrompt.prompt();
    setIsAvail(false);
  };
  return { isAvail, donwloadWeb };
};

export default useDownload;
