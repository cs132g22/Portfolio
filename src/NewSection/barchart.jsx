import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div>
      // eslint-disable-next-line react/prop-types
      <Bar data={props.data} options={props.options} />
    </div>
  );
};

export default BarChart;
