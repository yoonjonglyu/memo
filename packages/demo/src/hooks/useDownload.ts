import { useEffect } from 'react';

let installPrompt: any = null;
const useDownload = () => {
  const catchinstallEvent = async (event: any) => {
    event.preventDefault();
    installPrompt = event;
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', catchinstallEvent);
    return () => {
      window.removeEventListener('beforeinstallprompt', catchinstallEvent);
    };
  }, []);

  const downloadWeb = async () => {
    if (installPrompt === null)
      return alert('was installed or This platform is not supported.');
    const down = await installPrompt.prompt();
    if (down.outcome === 'accepted') return alert('installed.');
  };
  return { downloadWeb };
};

export default useDownload;
