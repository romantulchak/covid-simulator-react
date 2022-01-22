import {SimulationService} from "../../services/SimulationService";
import {useEffect} from "react";

export const Statistic = () =>{
    const simulationService: SimulationService = new SimulationService();
    let currentPage: number = 1;
    useEffect(() => {
        getPreviousResults();
    });

    const getPreviousResults = () => {
      simulationService.getPreviousResults(currentPage).then(
          res=>{
              console.log(res);
          }
      );
    }
:
    return(
        <div>History of previous simulations</div>
    )
}