import { AlgaNews } from "./AlgaNews";

export namespace User {

  type components = AlgaNews.components['schemas'];
  export type Input = components['UserInput'];
  export type Detailed = components['UserDetailed'];
  export type EditorSummary = components['EditorSummary'];
  export type Summary = components['UserSummary'];
  export type Role = components['Role'];
  export type Skill = components['Skill'];
  export type Minimal = components['UserMinimal'];
  export type Metrics = components['UserMetrics'];
  export type EditorDetailed = components['EditorDetailed'];
}