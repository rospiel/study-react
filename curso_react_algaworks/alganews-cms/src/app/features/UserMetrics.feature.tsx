
import { useEffect, useState } from "react"
import convertEditorMonthlyEarningsToDataChartJs from "../../core/utils/convertEditorMonthlyEarningsToDataChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";

export default function UserMetrics () {
   const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();

   useEffect(() => {
      MetricService
      .getEditorMonthlyEarnings()
      .then(convertEditorMonthlyEarningsToDataChartJs)
      .then(setEditorEarnings)
   }, []);

   if (!editorEarnings) {
      return null;
   }

   return (
      <Chart title="Média de performance nos últimos 12 meses" data={editorEarnings} />
   )
}