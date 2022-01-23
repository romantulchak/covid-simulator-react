import { Bar } from 'react-chartjs-2';
import {ChartData} from "chart.js";

export const BarChart = (props: {data: ChartData<any, any, any>, options: any }) => {
    const data = props.data;
    const options = props.options;

    return (
        <Bar data={data} options={options} />
    )
}