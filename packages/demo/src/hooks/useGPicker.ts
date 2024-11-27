import useDrivePicker from 'react-google-drive-picker';

const useGPicker = (clientId: string, developerKey: string) => {
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: clientId,
      developerKey: developerKey,
      viewId: 'DOCS',
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: data => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button');
        }
        console.log(data);
      },
    });
  };

  return [handleOpenPicker as any, authResponse];
};

export default useGPicker;
