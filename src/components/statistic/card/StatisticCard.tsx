import {SimulationDTO} from "../../../dto/SimulationDTO";
import "./StatisticCard.scss"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide} from "@mui/material";
import React, {forwardRef, useState} from "react";
import {TransitionProps} from "@mui/material/transitions";
import {SimulationChart} from "../../simulation/simulation-chart/SimulationChart";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const StatisticCard = (props: { simulation: SimulationDTO }) => {
    const simulation = props.simulation;
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <div className="card" onClick={handleOpen}>
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


            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth="xl"
                onClose={handleClose}
                aria-describedby="alert-dialog-simulation-results"
            >
                <DialogTitle>Result for {simulation.simulationName}</DialogTitle>
                <DialogContent>
                    <SimulationChart simulationDetails={simulation.simulationDetails}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}