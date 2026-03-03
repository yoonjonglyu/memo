import client from './core'; // axios instance

class GoogleApi {
  async getGDriveFile(fileId: string, accessToken: string) {
    const { data } = await client.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}`,
      {
        params: { alt: 'media' },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  }

  async findAppFolder(token: string) {
    const query =
      "name='MemoFlow' and mimeType='application/vnd.google-apps.folder' and trashed=false";

    const data = (await client.get(
      'https://www.googleapis.com/drive/v3/files',
      {
        params: {
          q: query,
          fields: 'files(id,name)',
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )) as { files: { id: string; name: string }[] };

    return data?.files?.[0]?.id ?? null;
  }

  async createAppFolder(token: string) {
    const data = await client.post(
      'https://www.googleapis.com/drive/v3/files',
      {
        name: 'MemoFlow',
        mimeType: 'application/vnd.google-apps.folder',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    ) as any;

    return data?.id;
  }

  async findBackupFile(token: string, folderId: string) {
    const query = `name='backup.json' and '${folderId}' in parents and trashed=false`;

    const data  = await client.get(
      'https://www.googleapis.com/drive/v3/files',
      {
        params: {
          q: query,
          fields: 'files(id,name)',
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ) as { files: { id: string; name: string }[] };
    return data?.files?.[0]?.id ?? null;
  }

  async downloadBackup(token: string, fileId: string) {
    const data = await client.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}`,
      {
        params: { alt: 'media' },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  }

  async createBackupFile(token: string, folderId: string, fileData: any) {
    const metadata = {
      name: 'backup.json',
      parents: [folderId],
    };

    const form = new FormData();
    form.append(
      'metadata',
      new Blob([JSON.stringify(metadata)], {
        type: 'application/json',
      })
    );
    form.append(
      'file',
      new Blob([JSON.stringify(fileData)], {
        type: 'application/json',
      })
    );

    const { data } = await client.post(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  }

  async updateBackupFile(token: string, fileId: string, fileData: any) {
    await client.patch(
      `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
      fileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export default GoogleApi;
