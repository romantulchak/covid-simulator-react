import {Pie} from 'react-chartjs-2';
import {SimulationDetailsDTO} from "../../../../dto/SimulationDetailsDTO";

export const PieChart = (props: { simulationDetails: SimulationDetailsDTO[] }) => {
    const simulationDetails: SimulationDetailsDTO[] = props.simulationDetails;
    const numberOfInfected: number = simulationDetails[simulationDetails.length - 1].numberOfInfected;
    const numberOfDeath: number = simulationDetails[simulationDetails.length - 1].numberOfDeath;
    const numberOfHealthyWithImmunity: number = simulationDetails[simulationDetails.length - 1].numberOfHealthyWithImmunity;
    const numberOfHealthyWithoutImmunity: number = simulationDetails[simulationDetails.length - 1].numberOfHealthyWithoutImmunity;

    const data = {
        labels: ['Number of Infected', 'Number of Death', 'Number of Healthy With Immunity', 'Number of Healthy Without Immunity'],
        datasets: [
            {
                label: '# of Votes',
                data: [numberOfInfected, numberOfDeath, numberOfHealthyWithImmunity, numberOfHealthyWithoutImmunity],
                backgroundColor: [
                    '#E74C3C',
                    'rgb(33,32,32)',
                    '#2ECC71',
                    '#BDC3C7',
                ],
                borderColor: [
                    'rgb(255,0,53)',
                    'rgb(0,0,0)',
                    'rgb(24,222,24)',
                    '#BDC3C7',
                ],
                borderWidth: 1,
            },
        ],
    };
    ;

    return (
        <Pie data={data}/>
    )
}