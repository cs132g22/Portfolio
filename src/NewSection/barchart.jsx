import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div className={props.class_name}>
      {props.Title}
      <Bar data={props.data} width={"10%"}  options={{ maintainAspectRatio:false,
      indexAxis:props.orie, scaleShowValues: true,
      plugins:{legend: {
        display: false
    },},
      barPercentage:0.9,
      scales:{
        y:{beginAtZero:true,
          title:{
            display:true,
            text:props.ylabel
          }
        },
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        x:{
          title:{
            display:true,
            text:props.xlabel
          }
        }
      }
      
    }}  />
    </div>
  );
};

export default BarChart;
