import "./Simulation.scss";
import {SimulationDetailsDTO} from "../../dto/SimulationDetailsDTO";
import {SimulationTopPanel} from "./top-panel/simulation-top-panel/SimulationTopPanel";
import {SimulationLeftPanel} from "./top-panel/simulation-left-panel/SimulationLeftPanel";
import {useState} from "react";
import {SimulationDTO} from "../../dto/SimulationDTO";
import {SimulationChart} from "./simulation-chart/SimulationChart";

export const Simulation = () => {

    const [simulationDetails, setSimulationDetails] = useState<SimulationDetailsDTO[]>([]);
    const [simulation, setSimulation] = useState<SimulationDTO>({} as SimulationDTO);
    return (
        <div>
            <SimulationTopPanel simulation={simulation}/>
            <div className="form__chart">
                <SimulationLeftPanel onSimulate={setSimulationDetails} dataToSimulate={setSimulation}/>
                <div>
                    {simulationDetails.length === 0 ?
                        (<h2 className="simulation__not_started">There will be chart</h2>)
                        : (
                            <SimulationChart simulationDetails={simulationDetails}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}