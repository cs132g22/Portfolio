import { Line } from "react-chartjs-2";
import { useState } from "react";
import {
  likesOverTime,
  repliesOverTime,
  retweetsOverTime,
  quoteTweetsOverTime,
} from "../data";
import "./EngagementGraph.css";

const EngagementsGraph = () => {
  const background = [
    "rgba(255, 26, 104, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(0, 0, 0, 0.5)",
  ];
  const border = [
    "rgba(255, 26, 104, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(0, 0, 0, 1)",
  ];

  const likesData = {
    labels: likesOverTime.map((obj) => {
      return obj.Month;
    }),
    datasets: [
      {
        label: "Likes",
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
        data: likesOverTime.map((obj) => {
          return obj["Like count"];
        }),
      },
    ],
  };

  const repliesData = {
    labels: repliesOverTime.map((obj) => {
      return obj.Month;
    }),
    datasets: [
      {
        label: "Replies",
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
        data: repliesOverTime.map((obj) => {
          return obj["Reply count"];
        }),
      },
    ],
  };

  const retweetsData = {
    labels: retweetsOverTime.map((obj) => {
      return obj.Month;
    }),
    datasets: [
      {
        label: "Retweets",
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
        data: retweetsOverTime.map((obj) => {
          return obj["Retweet count"];
        }),
      },
    ],
  };

  const quotesData = {
    labels: quoteTweetsOverTime.map((obj) => {
      return obj.Month;
    }),
    datasets: [
      {
        label: "Quote Tweets",
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
        data: quoteTweetsOverTime.map((obj) => {
          return obj["Quote Tweet count"];
        }),
      },
    ],
  };
  const [data, setData] = useState(likesData);
  const [title, setTitle] = useState("Likes Over Time");
  function handleEngagementChange(e) {
    if (e.target.value === "Likes") {
      setData(likesData);
      setTitle("Likes Over Time");
    } else if (e.target.value === "Replies") {
      setData(repliesData);
      setTitle("Replies Over Time");
    } else if (e.target.value === "Retweets") {
      setData(retweetsData);
      setTitle("Retweets Over Time");
    } else if (e.target.value === "Quote Tweets") {
      setData(quotesData);
      setTitle("Quote Tweets Over Time");
    }
  }

  return (
    <>
      <div className="header">
        <div>{title}</div>

        <select onChange={(e) => handleEngagementChange(e)}>
          <option value="Likes">Likes</option>
          <option value="Replies">Replies</option>
          <option value="Retweets">Retweets</option>
          <option value="Quote Tweets">Quote Tweets</option>
        </select>
      </div>
      <div>
        <Line
          data={data}
          options={{
            scales: {
              y: { title: { display: true, text: "Counts" } },
              x: { title: { display: true, text: "Months" } },
            },
          }}
        />
      </div>
    </>
  );
};

export default EngagementsGraph;
