import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {SimulationService} from "../../../../services/SimulationService";
import {SimulationDTO} from "../../../../dto/SimulationDTO";
import {SimulationDetailsDTO} from "../../../../dto/SimulationDetailsDTO";
import "./SimulationLeftPanel.scss"

export const SimulationLeftPanel = (props: {
    onSimulate: (onSimulate: SimulationDetailsDTO[]) => void;
    dataToSimulate(simulation: SimulationDTO): void;
}) => {
    const simulationDTO: SimulationDTO = {
        simulationName: "Test",
        daysOfSimulation: 0,
        daysToDeath: 0,
        daysToRecovery: 0,
        initialNumberOfInfected: 0,
        isDistance: false,
        population: 0,
        isMask: false,
        mortalityRate: 0,
        personInfectPerDay: 0
    }
    const simulationService: SimulationService = new SimulationService();
    const [errorMessage, setErrorMessage] = useState('');
    const [simulation, setSimulation] = useState<SimulationDTO>(simulationDTO);
    props.dataToSimulate(simulation);


    const validateSubmit = () => {
        if (+simulation.population < +simulation.initialNumberOfInfected) {
            setErrorMessage("The Initial number of infected should be less than Population");
            return false;
        } else if (+simulation.population < +simulation.personInfectPerDay) {
            setErrorMessage("Person infected per day should be less than Population");
            return false;
        } else if (+simulation.population < +simulation.personInfectPerDay + +simulation.initialNumberOfInfected) {
            setErrorMessage("The Initial number of infected + Person infected per day should be less than Population");
            return false;
        } else if (+simulation.population < +simulation.mortalityRate) {
            setErrorMessage("The Mortality rate should be less than Population");
            return false;
        }
        setErrorMessage("");
        return true;
    }

    const handleFields = (event: any) => {
        event.preventDefault();
        setSimulation({
            ...simulation,
            [event.target.name]: event.target.value
        });
        props.dataToSimulate(simulation);
    }

    const clearInputOnClick = (event: any) => {
        const value = event.target.value;
        if (value === "0") {
            event.target.value = "";
        }
    }

    const simulate = (event: any) => {
        event.preventDefault();
        if (validateSubmit()) {
            simulationService.simulate(simulation).then(res => {
                props.onSimulate(res.data);
            });
        }
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            simulate(event);
        }
    }

    return (
        <form onSubmit={simulate}>
            <div className="error__message">
                <h5>{errorMessage}</h5>
            </div>
            <div className="simulate__field">
                <TextField id="simulation-name" name="simulationName" label="Simulation name" variant="filled"
                           value={simulation?.simulationName} onChange={handleFields} size="small"/>
            </div>
            <div className="simulate__field">
                <TextField id="initial-population" name="population" label="Initial Population"
                           type="number" variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.population} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="initial-infected-number" name="initialNumberOfInfected"
                           label="Initial number of infected" type="number" variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.initialNumberOfInfected} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="person-infect-per-day" name="personInfectPerDay" label="Person infect per day"
                           type="number" variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.personInfectPerDay} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="mortality-rate" name="mortalityRate" label="Mortality Rate" type="number"
                           variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.mortalityRate} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="days-to-recovery" name="daysToRecovery" label="Days to Recovery" type="number"
                           variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.daysToRecovery} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="days-to-recovery" name="daysToDeath" label="Days to death" type="number"
                           variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.daysToDeath} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__field">
                <TextField id="days-to-recovery" name="daysOfSimulation" label="Days of simulation" type="number"
                           variant="filled"
                           InputProps={{inputProps: {min: 1}}}
                           value={simulation?.daysOfSimulation} onChange={handleFields} size="small"
                           onClick={clearInputOnClick}/>
            </div>
            <div className="simulate__btn">
                <Button variant="outlined" type="submit" onKeyPress={handleKeyPress}>Simulate</Button>
            </div>
        </form>
    )
}