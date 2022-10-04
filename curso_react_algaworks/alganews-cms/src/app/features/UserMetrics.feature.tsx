
import { useEffect, useState } from "react"
import convertEditorMonthlyEarningsToDataChartJs from "../../core/utils/convertEditorMonthlyEarningsToDataChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";
import {nonNull} from "../../sdk/utils/objectUtil";

export default function UserMetrics () {
   const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();
   const [error, setError] = useState<Error>();

   useEffect(() => {
      MetricService
      .getEditorMonthlyEarnings()
      .then(convertEditorMonthlyEarningsToDataChartJs)
      .then(setEditorEarnings)
      .catch(error => {
         setError(new Error(error.message));
      })
   }, []);

   if (nonNull(error)) {
      throw error;
   }

   if (!editorEarnings) {
      return null;
   }

   return (
      <Chart title="Média de performance nos últimos 12 meses" data={editorEarnings} />
   )
}