import React, { useEffect, useRef } from "react";

import chartTypes from "./mockData/CHART_TYPES";
import * as timeSeriesAxisDemos from "./mockData/time-series-axis";

import { LineChart } from "./reactWrapper";

// options: timeSeriesAxisDemos.lineTimeSeries15secondsOptions,
// data: timeSeriesAxisDemos.lineTimeSeriesData15seconds,
// chartType: chartTypes.LineChart,

function App() {
  return (
    <LineChart
      data={timeSeriesAxisDemos.lineTimeSeriesData15seconds}
      options={timeSeriesAxisDemos.lineTimeSeries15secondsOptions}
    ></LineChart>
  );
}

export default App;
