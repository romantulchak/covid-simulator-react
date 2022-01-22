import {SimulationDetailsDTO} from "./SimulationDetailsDTO";

export interface SimulationDTO {
    id?: number;
    simulationName?: string;
    population?: number;
    initialNumberOfInfected?: number;
    personInfectPerDay?: number;
    mortalityRate?: number;
    daysToRecovery?: number;
    daysToDeath?: number;
    daysOfSimulation?: number;
    isMask?: boolean;
    isDistance?: boolean;
    simulationDetails?: SimulationDetailsDTO[];
}