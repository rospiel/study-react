import { AlgaNews } from "./AlgaNews";

export namespace File {
  type components = AlgaNews.components['schemas'];
  export type UploadRequestInput = components['UploadRequestInput'];
  export type UploadRequest = components['UploadRequest'];
}