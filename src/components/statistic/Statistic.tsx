import {SimulationService} from "../../services/SimulationService";
import {useEffect, useState} from "react";
import {SimulationDTO} from "../../dto/SimulationDTO";
import {Skeleton, Stack} from "@mui/material";
import {StatisticCard} from "./card/StatisticCard";

export const Statistic = () => {
    const simulationService: SimulationService = new SimulationService();
    const [simulations, setSimulations] = useState<SimulationDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const loadingHeight: number = 110;
    let currentPage: number = 1;

    useEffect(() => {
        console.log("TEST")
        getPreviousResults();
    }, []);

    const getPreviousResults = () => {
        simulationService.getPreviousResults(currentPage).then(
            res => {
                setSimulations(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }
        );
    }
    return (
        <div>
            {loading ? (<Stack spacing={1}>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
                <Skeleton animation="wave" variant="text" height={loadingHeight}/>
            </Stack>) : (
                simulations.map(simulation => <StatisticCard key={simulation.id} simulation={simulation}/>)
            )
            }
        </div>
    )
}