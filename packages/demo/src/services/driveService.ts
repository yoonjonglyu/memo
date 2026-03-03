import GoogleApi from '../api/googleApi';

const googleApi = new GoogleApi();

export async function ensureAppFolder(token: string) {
  const existing = await googleApi.findAppFolder(token);
  if (existing) return existing;
  return await googleApi.createAppFolder(token);
}

export async function downloadInfo(folderId: string, token: string) {
  const fileId = await googleApi.findBackupFile(
    token,
    folderId
  );
  if (fileId === null) {
    throw new Error('File ID does not match the one in Google Drive.');
  }
  const data = await googleApi.downloadBackup(token, fileId);
  return data;
}

export async function uploadFlow(token: string, memoData: any) {
  const folderId = await ensureAppFolder(token);
  const fileId = await googleApi.findBackupFile(token, folderId);

  if (!fileId) {
    await googleApi.createBackupFile(token, folderId, memoData);
  } else {
    await googleApi.updateBackupFile(token, fileId, memoData);
  }
}
