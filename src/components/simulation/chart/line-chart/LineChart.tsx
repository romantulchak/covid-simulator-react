import {Line} from 'react-chartjs-2';
import {ChartData} from "chart.js";

export const LineChart = (props: { data: ChartData<any, any, any>, options: any }) => {

    const data = props.data;
    const options = props.options;

    return (
        <Line data={data} options={options}/>
    )
}