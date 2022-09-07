import { AlgaNews } from "./AlgaNews";

export namespace Post {
  type components = AlgaNews.components['schemas'];
  export type Input = components['PostInput']
  export type Detailed = components['PostDetailed']
  export type Summary = components['PostSummary']
  export type Paginated = components['PostsPaginated']
  export type WithEarnings = components['PostWithEarnings']

  export type Query = {
    editorId?: number;
    page?: number;
    size?: number;
    showAll?: boolean;
    sort?: [keyof Summary, 'asc' | 'desc']
  }
}