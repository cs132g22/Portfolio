import { Scatter } from "react-chartjs-2"
import { tweetsPerMonth } from "../data"
const ScatterDate=()=>{
    const dtset=tweetsPerMonth.map((obj)=>{return {x:obj.Month,y:obj.Count}});
    console.log(dtset);
    const data={
        labels:"Months",
        datasets:[{
            label:"Tweets",
            data:dtset
        }]
    }
    return(<>
        <center>
            <Scatter data={data} options={{scaleShowValues: true,
            plugins:{
                title:{display:true,text:"Tweet per Month Scatter Plot"},
                legend:{display:false}
            },
            scales:{
                y:{
                    title:{
                        display:true,
                    text:"# Tweets",
                    },
                    min:0,
                    max:30,
                    ticks:{
                        stepSize:1
                    }

                },
                x:{
                    title:{
                        display:true,
                    text:"Month",
                    },
                    min:3,
                    max:40,
                    ticks:{
                        stepSize:1
                    }

                }
            }
            }}/>
        </center>
        </>
    );
}
export default ScatterDate;