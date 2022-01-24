import {SimulationDetailsDTO} from "../../../dto/SimulationDetailsDTO";
import React from "react";
import {Chart} from "../chart/Chart";
import {PieChart} from "../chart/pie-chart/PieChart";

export class SimulationChart extends React.Component<any, any> {
    private readonly simulationDetails: SimulationDetailsDTO[] = [];

    constructor(props: { simulationDetails: SimulationDetailsDTO[] }) {
        super(props);
        this.simulationDetails = props.simulationDetails;
    }

    render() {
        return <div>
            <Chart type={"LINE"} data={this.simulationDetails}/>
            <div className="result__block">
                <h3 className="result__title">Result</h3>
                <div className="pie__chart_block">
                    <PieChart simulationDetails={this.simulationDetails}/>
                </div>
            </div>
        </div>
    }
}