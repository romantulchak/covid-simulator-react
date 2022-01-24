import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import {LineChart} from "./line-chart/LineChart";
import {BarChart} from "./bar-chart/BarChart";
import {SimulationDetailsDTO} from "../../../dto/SimulationDetailsDTO";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement
);

export const Chart = (props: { type: string, data?: SimulationDetailsDTO[] }) => {
    const type: string = props.type;
    const simulationDetails = props.data;
    const labels: number[] = [];
    const numberOfInfected: number[] = [];
    const numberOfHealthyWithoutImmunity: number[] = [];
    const numberOfDeath: number[] = [];
    const numberOfHealthyWithImmunity: number[] = [];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    simulationDetails?.forEach(simulationDetail => {
        labels.push(simulationDetail.day)
        numberOfInfected.push(simulationDetail.numberOfInfected);
        numberOfHealthyWithoutImmunity.push(simulationDetail.numberOfHealthyWithoutImmunity);
        numberOfDeath.push(simulationDetail.numberOfDeath);
        numberOfHealthyWithImmunity.push(simulationDetail.numberOfHealthyWithImmunity);
    });
    const data = {
        labels,
        datasets: [
            {
                label: 'Number of Healthy Without Immunity',
                data: numberOfHealthyWithoutImmunity,
                borderColor: 'rgb(187 186 186)',
                backgroundColor: 'rgb(187 186 186)',
                lineTension: 0.5,
            },
            {
                label: 'Number of Infected',
                data: numberOfInfected,
                borderColor: 'rgb(255,0,53)',
                backgroundColor: 'rgba(255,0,53,0.5)',
                lineTension: 0.5,
            },
            {
                label: 'Number of Death',
                data: numberOfDeath,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                lineTension: 0.5,
            },
            {
                label: 'Number Of Healthy With Immunity',
                data: numberOfHealthyWithImmunity,
                borderColor: 'rgb(91 237 91)',
                backgroundColor: 'rgb(91 237 91)',
                lineTension: 0.5,
            },
        ],
    };

    const getChartType = () => {
        switch (type) {
            case 'LINE':
                return <LineChart data={data} options={options}/>
            case 'BAR':
                return <BarChart data={data} options={options} />
        }
    }

    return (
        <>
            {getChartType()}
        </>
    )
}