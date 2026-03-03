import { useState } from 'react';

import MemoApi from '../api/memoApi';
import {
  ensureAppFolder,
  uploadFlow,
  downloadInfo,
} from '../services/driveService';

import useGoogleAuth from './useGoogleAuth';
import useMemo from './useMemo';

const MemoSignal = new MemoApi();

const useGoogleDrive = () => {
  const { initMemo } = useMemo();
  const { signIn } = useGoogleAuth();
  const [connected, setConnected] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const connect = async () => {
    const token = await signIn();
    if (!token) return null;

    setConnected(true);
    setToken(token);
    return token;
  };

  const download = async () => {
    if (!token) return;

    await ensureAppFolder(token);
    const folderId = await ensureAppFolder(token);
    const downloadId = await downloadInfo(folderId, token);
    if (!downloadId) {
      alert('No backup file found in Google Drive.');
      return;
    }
    await MemoSignal.setMemoList(downloadId as any);
    await initMemo();
    alert('Backup data loaded from Google Drive.');
  };

  const upload = async () => {
    if (!token) return;

    uploadFlow(token, await MemoSignal.getMemoList());
    alert('Backup data uploaded to Google Drive.');
  };

  return {
    connected,
    connect,
    upload,
    download,
  };
};

export default useGoogleDrive;
