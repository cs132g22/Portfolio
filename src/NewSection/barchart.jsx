import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div className={props.class_name}>
      {props.Title}
      <Bar data={props.data} width={"10%"}  options={{ maintainAspectRatio:false,
      indexAxis:props.orie, scaleShowValues: true,
      barPercentage:0.9,
      scales:{
        y:{beginAtZero:true},
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      }
      
    }}  />
    </div>
  );
};

export default BarChart;
