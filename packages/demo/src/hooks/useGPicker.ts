import useDrivePicker from 'react-google-drive-picker';

import MemoApi from '../api/memoApi';
import GoogleApi from '../api/googleApi';

const MemoSignal = new MemoApi();
const GoogleSignal = new GoogleApi();

const useGPicker = (clientId: string, developerKey: string) => {
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = (callback: (id: string) => void) => {
    openPicker({
      clientId: clientId,
      developerKey: developerKey,
      viewId: 'DOCS',
      showUploadView: false,
      supportDrives: true,
      multiselect: false,
      viewMimeTypes: 'application/json',
      customScopes: ['https://www.googleapis.com/auth/drive.file'],
      callbackFunction: data => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button');
        }
        if (data.action === 'picked') {
          callback(data.docs[0].id);
        }
      },
    });
  };
  const downloadInfo = async (fileId: string, accessToken: string) => {
    const data: any = await GoogleSignal.getGDriveFile(fileId, accessToken);
    await MemoSignal.setMemoList(data);
  };

  return [handleOpenPicker, authResponse, downloadInfo] as [
    (callback: (id: string) => void) => void,
    typeof authResponse,
    typeof downloadInfo
  ];
};

export default useGPicker;
