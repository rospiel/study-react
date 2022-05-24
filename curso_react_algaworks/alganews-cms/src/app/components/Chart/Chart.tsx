import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import NoData from '../NoData/NoData';
import Heading from '../Typography/Heading';

function getChartLine(data: Chart.ChartData) {
  return (
    <Line height={139}
          width={600}
          type="line"
          data={data}
          options={options} />
  )
}

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      }
    ],
  },
};

export interface ChartProps {
  data: Chart.ChartData
  title: string
}

export default function Chart ({ data, title }: ChartProps) {
  return (
    <ChartWrapper>
      <div className="title">
        <Heading level={3}>
          {title}
        </Heading>
      </div>
      { data ? getChartLine(data) : <NoData height={139} /> }
    </ChartWrapper>
  )
}

const ChartWrapper = styled.div`
  width: 700px;
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;

  div.title {
    margin-bottom: 16;
  }
`