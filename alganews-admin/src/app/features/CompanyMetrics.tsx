import { Area, AreaConfig } from "@ant-design/charts";
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useEffect, useState } from "react";
import { MetricService } from "rospiel-react_alganews-sdk";
import transformDataIntoAntdChart from "../../core/store/utils/transformDataIntoAntdChart";

function getCategory(value: string): string {
  return value === "totalRevenues"
    ? "Receitas"
    : "Despesas";
}

function formatterValue(value: number): string {
  return (value as number).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
  });
}

export default function CompanyMetrics() {
  const [data, setData] = useState<
    {
      yearMonth: string;
      value: number;
      category: "totalRevenues" | "totalExpenses";
    }[]
  >([]);

  useEffect(() => {
    MetricService.getMonthlyRevenuesExpenses()
      .then(transformDataIntoAntdChart)
      .then(setData);
  }, []);

  const config: AreaConfig = {
    data,
    color: ["#0099ff", "#274060"],
    areaStyle: { fillOpacity: 1 },
    height: 256,
    xField: "yearMonth",
    yField: "value",
    seriesField: "category",
    legend: {
      itemName: {
        formatter(legend) {
          return getCategory(legend);
        },
      },
    },
    xAxis: {
      label: {
        formatter(label) {
          return format(new Date(label), "MM/yyyy");
        },
      },
    },
    yAxis: false,
    tooltip: {
      title(title) {
        return format(new Date(title), "MMMM yyyy", {
          locale: ptBR,
        });
      },
      formatter(data) {
        return {
          name: getCategory(data.category),
          value: formatterValue(data.value),
        };
      },
    },
    point: {
      size: 5,
      shape: "circle",
    },
  };

  return <Area {...config} />;
}
