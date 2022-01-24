import {SimulationService} from "../../services/SimulationService";
import React, {useEffect, useState} from "react";
import {SimulationDTO} from "../../dto/SimulationDTO";
import {Pagination, Skeleton, Stack} from "@mui/material";
import {StatisticCard} from "./card/StatisticCard";

export const Statistic = () => {
    const simulationService: SimulationService = new SimulationService();
    const [simulations, setSimulations] = useState<SimulationDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const loadingHeight: number = 110;

    useEffect(() => {
        getPreviousResults();
        getTotalPages();
    }, []);

    const getPreviousResults = (page: number = 1) => {
        simulationService.getPreviousResults(page).then(
            res => {
                setSimulations(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }
        );
    }

    const getTotalPages = () => {
        simulationService.getTotalPagesCount().then(
            res => {
                setTotalPages(res.data);
            }
        )
    }

    const getCurrentPage = (event: any, page: number) => {
        setLoading(true);
        setCurrentPage(page);
        getPreviousResults(page);
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
                <div>
                    {simulations.map(simulation => <StatisticCard simulation={simulation} key={simulation.id}/>)}
                    {simulations.length !== 0 ? (
                            <Stack spacing={2}>
                                <Pagination className="pagination" count={totalPages} variant="outlined" shape="rounded"
                                            onChange={getCurrentPage} page={currentPage}
                                />
                            </Stack>
                        ) :
                        <h3>Nothing found</h3>
                    }
                </div>
            )}
        </div>
    )
}