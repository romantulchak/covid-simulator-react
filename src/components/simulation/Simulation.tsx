import "./Simulation.scss";
import {Chart} from "./chart/Chart";
import {SimulationDetailsDTO} from "../../dto/SimulationDetailsDTO";
import {SimulationTopPanel} from "./top-panel/simulation-top-panel/SimulationTopPanel";
import {SimulationLeftPanel} from "./top-panel/simulation-left-panel/SimulationLeftPanel";
import {useState} from "react";
import {SimulationDTO} from "../../dto/SimulationDTO";


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
                            <div>
                                <Chart type={"LINE"} data={simulationDetails}/>

                                <div>
                                    <h3>Result</h3>
                                    <Chart type={"PIE"} data={simulationDetails} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}