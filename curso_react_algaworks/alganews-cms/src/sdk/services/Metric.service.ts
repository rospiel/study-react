import { Metric } from "../@types";
import Service from "../Service";

class MetricService extends Service {
  static readonly REQUEST_MAPPING: string = "/metrics/editor";


  static getTop3Tags() {
    return this.Http
    .get<Metric.EditorTagRatio>(`${this.REQUEST_MAPPING}/top3-tags`)
    .then(this.getData)
  }

  static getEditorMonthlyEarnings() {
    return this.Http
    .get<Metric.EditorMonthlyEarnings>(`${this.REQUEST_MAPPING}/monthly-earnings`)
    .then(this.getData);
  }
}

export default MetricService;