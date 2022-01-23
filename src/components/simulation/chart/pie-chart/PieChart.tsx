import {ChartData} from "chart.js";
import { Pie } from 'react-chartjs-2';

export const PieChart = (props: { data: ChartData<any, any, any>, options: any }) => {

    const data = {
        labels: ['Number of Infected', 'Number of Death', 'Number of Healthy With Immunity','Number of Healthy Without Immunity'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };;
    const options = props.options;

    return (
        <Pie data={data}/>
    )
}