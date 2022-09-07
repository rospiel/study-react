import { AlgaNews } from "./AlgaNews";

export namespace CashFlow {
  type components = AlgaNews.components['schemas'];
  export type CategoryDetailed = components['CashFlowCategoryDetailed']
  export type CategorySummary = components['CashFlowCategorySummary']
  export type CategoryIdInput = components['CashFlowCategoryIdInput']
  export type CategoryMinimal = components['CashFlowCategoryMinimal']
  export type CategoryInput = components['CashFlowCategoryInput']
  export type EntryType = components['CashFlowEntryType']
  export type EntrySummary = components['CashFlowEntrySummary']
  export type EntryDetailed = components['CashFlowEntryDetailed']
  export type EntryInput = components['CashFlowEntryInput']
}