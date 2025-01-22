import useDrivePicker from 'react-google-drive-picker';

import MemoApi from '../api/memoApi';

const MemoSignal = new MemoApi();

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
          console.log(data.docs[0]);
          callback(data.docs[0].id);
        }
      },
    });
  };
  const downloadInfo = async (fileId: string, accessToken: string) => {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch file from Google Drive');
    }

    const jsonData = await response.json();
    await MemoSignal.setMemoList(jsonData);
  };

  return [handleOpenPicker, authResponse, downloadInfo] as [
    (callback: (id: string) => void) => void,
    typeof authResponse,
    typeof downloadInfo
  ];
};

export default useGPicker;
