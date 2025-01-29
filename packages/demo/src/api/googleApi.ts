import client from './core';

class GoogleApi {
  constructor() {}

  async getGDriveFile(fileId: string, accessToken: string) {
    const data = await client.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  }
}

export default GoogleApi;
