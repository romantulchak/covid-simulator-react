import {SimulationDTO} from "../../../dto/SimulationDTO";
import "./StatisticCard.scss"

export const StatisticCard = (props:{simulation:SimulationDTO}) => {
    const simulation = props.simulation;
    return (
        <div className="card">
            <div className="attribute">
                <h4 className="title">Simulation name</h4>
                <span>{simulation.simulationName}</span>
            </div>
            <div className="attribute">
                <h4 className="title population">Initial population</h4>
                <span>{simulation.population}</span>
            </div>
            <div className="attribute">
                <h4 className="title">Number of infected</h4>
                <span>{simulation.initialNumberOfInfected}</span>
            </div>
            <div className="attribute">
                <h4 className="title">Infected person per day</h4>
                <span>{simulation.personInfectPerDay}</span>
            </div>
            <div className="attribute">
                <h4 className="title mortality__rate">Mortality Rate</h4>
                <span>{simulation.mortalityRate}</span>
            </div>
            <div className="attribute">
                <h4 className="title days__to_recovery">Days To Recovery</h4>
                <span>{simulation.daysToRecovery}</span>
            </div>
            <div className="attribute">
                <h4 className="title">Days To Death</h4>
                <span>{simulation.daysToDeath}</span>
            </div>
            <div className="attribute">
                <h4 className="title">Days To Simulation</h4>
                <span>{simulation.daysOfSimulation}</span>
            </div>
        </div>
    )
}