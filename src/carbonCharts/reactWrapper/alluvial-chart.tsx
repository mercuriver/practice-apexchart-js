import React from "react";
import { AlluvialChart as AC } from "@carbon/charts";
import BaseChart from "./base-chart";

import { interfaces } from "@carbon/charts";
const { ChartConfig, AlluvialChartOptions } = interfaces;

type AlluvialChartProps = ChartConfig<AlluvialChartOptions>;

export default class AlluvialChart extends BaseChart<AlluvialChartOptions> {
  chartRef!: HTMLDivElement;
  props!: AlluvialChartProps;
  chart!: AC;

  componentDidMount() {
    this.chart = new AC(this.chartRef, {
      data: this.props.data,
      options: this.props.options,
    });
  }

  render() {
    return (
      <div
        ref={(chartRef) => (this.chartRef = chartRef!)}
        className="chart-holder"
      ></div>
    );
  }
}
