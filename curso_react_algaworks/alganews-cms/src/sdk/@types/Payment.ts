import { AlgaNews } from "./AlgaNews";

export namespace Payment {
  type components = AlgaNews.components['schemas'];
  export type Input = components['PaymentInput']
  export type Detailed = components['PaymentDetailed']
  export type Summary = components['PaymentSummary']
  export type Preview = components['PaymentPreview']
  export type PreviewInput = components['PaymentPreviewInput']
  export type Paginated = components['PaymentsPaginated']
}