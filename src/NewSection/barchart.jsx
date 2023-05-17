import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div className="charts">
      {props.Title}
      <Bar data={props.data} width={"10%"} height={"10%"} options={{ maintainAspectRatio:false,
      indexAxis:"y", scaleShowValues: true,
      barPercentage:0.5,
      scales:{
        y:{beginAtZero:true}
      }
      
    }}  />
    </div>
  );
};

export default BarChart;
