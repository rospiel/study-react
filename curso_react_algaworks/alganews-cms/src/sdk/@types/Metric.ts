import { AlgaNews } from "./AlgaNews";

export namespace Metric {
  type components = AlgaNews.components['schemas'];
  export type MonthlyRevenuesExpenses = components['MonthlyRevenuesExpenses']
  export type MonthlyRevenuesExpensesChartJs = components['MonthlyRevenuesExpensesChartjs']
  export type EditorTagRatio = components['EditorTagRatio']
  export type EditorMonthlyEarnings = components['EditorMonthlyEarnings']
}