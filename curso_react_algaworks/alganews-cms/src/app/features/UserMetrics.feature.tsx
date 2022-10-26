
import { useEffect, useState } from "react"
import convertEditorMonthlyEarningsToDataChartJs from "../../core/utils/convertEditorMonthlyEarningsToDataChartJs";
import Chart, { ChartProps } from "../components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import { MetricService } from "rospiel-react_alganews-sdk";
import isNull, { nonNull } from "rospiel-react_alganews-sdk/dist/utils/objectUtil";

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

   if (isNull(editorEarnings)) {
      return (
         <div>
            <Skeleton height={227}/>
         </div>
      )
   }

   return (
      <Chart title="Média de performance nos últimos 12 meses" data={editorEarnings!} />
   )
}