import { v4 as uuid } from "uuid";
import { File } from "../@types";
import Service from "../Service";

class FileService extends Service {
  private static getSignedUrl(fileInfo: File.UploadRequestInput) {
    return this.Http.post<File.UploadRequest>("/upload-requests", fileInfo)
    .then(this.getData)
    .then(response => response.uploadSignedUrl)
  }

  private static uploadFileToSignedUrl(signedUrl: string, file: File) {
    return this.Http.put<{}>(signedUrl, file, {
      headers: {
        'Content-Type': file.type
      }
    })
    .then(this.getData)
  }

  static async upload(file: File) {
    const [extension] = file.name.split(".").slice(-1);
    const fileName = `${uuid()}.${extension}`;
    const signedUrl = await FileService.getSignedUrl({
      fileName,
      contentLength: file.size
    });

    await FileService.uploadFileToSignedUrl(signedUrl, file);
    /* based on google storage documentation */
    return signedUrl.split('?')[0];
  }
}

export default FileService;