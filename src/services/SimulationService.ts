import {SimulationDTO} from "../../dto/SimulationDTO";
import {SimulationDetailsDTO} from "../../dto/SimulationDetailsDTO";
import axios, {AxiosResponse} from "axios";

const API_URL = 'http://localhost:8080/api/simulation';

export class SimulationService{

    public simulate(simulation: SimulationDTO): Promise<AxiosResponse<SimulationDetailsDTO[]>>{
        return axios.post<SimulationDetailsDTO[]>(`${API_URL}/start`, simulation);
    }
}