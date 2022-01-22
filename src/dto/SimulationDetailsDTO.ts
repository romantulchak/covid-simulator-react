export interface SimulationDetailsDTO {
    id?: number;
    day: number;
    numberOfInfected: number;
    numberOfHealthyWithoutImmunity: number;
    numberOfDeath: number;
    numberOfHealthyWithImmunity: number;
}