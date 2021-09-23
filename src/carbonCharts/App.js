import React, { useEffect, useRef } from "react";

import chartTypes from "./mockData/CHART_TYPES";
import * as timeSeriesAxisDemos from "./mockData/time-series-axis";

import { LineChart } from "./reactWrapper";
// import "@carbon/charts/styles.css";

// options: timeSeriesAxisDemos.lineTimeSeries15secondsOptions,
// data: timeSeriesAxisDemos.lineTimeSeriesData15seconds,
// chartType: chartTypes.LineChart,

console.log(timeSeriesAxisDemos);

// function App() {
//   return (
//     <LineChart
//       data={timeSeriesAxisDemos.lineTimeSeriesData15seconds}
//       options={timeSeriesAxisDemos.lineTimeSeries15secondsOptions}
//     ></LineChart>
//   );
// }

class App extends React.Component {
  state = {
    data: timeSeriesAxisDemos.lineTimeSeriesData15seconds,
    options: timeSeriesAxisDemos.lineTimeSeries15secondsOptions,
  };

  render = () => (
    <LineChart
      data={timeSeriesAxisDemos.lineTimeSeriesData15seconds}
      options={timeSeriesAxisDemos.lineTimeSeries15secondsOptions}
    ></LineChart>
  );
}

export default App;
