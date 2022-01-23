import {SimulationDTO} from "../../../../dto/SimulationDTO";
import "./SimulationTopPanel.scss"

export const SimulationTopPanel = (props: { simulation: SimulationDTO }) => {
    const simulation = props.simulation;
    return (
        <div className="attribute__values">
            <div className="attribute">
                <h4> Initial population</h4>
                <span>{simulation.population}</span>
            </div>
            <div className="attribute">
                <h4> Initial number of infected</h4>
                <span>{simulation.initialNumberOfInfected}</span>
            </div>
            <div className="attribute">
                <h4>Mortality Rate</h4>
                <span>{simulation.mortalityRate}</span>
            </div>
            <div className="attribute">
                <h4>Person infected per day</h4>
                <span>{simulation.personInfectPerDay}</span>
            </div>
            <div className="attribute">
                <h4>Days</h4>
                <span>{simulation.daysOfSimulation}</span>
            </div>
        </div>
    )
}