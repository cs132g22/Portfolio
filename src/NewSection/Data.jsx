import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import dataimg from "../components/data.png";
import "./section.css";
import BarChart from "./barchart";
import { Bar } from "react-chartjs-2";

function Data() {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <>
      <center>
        <motion.button
          whileHover={{ scale: [null, 1.3, 1.15] }}
          transition={{ duration: 0.15 }}
          onClick={() => {
            setOpenModal(true);
          }}
          className="but"
        >
          <img src={dataimg} alt="data" />
          <br />
          Data
        </motion.button>
      </center>
      <Modal open={openModal} close={handleClose}>
        <div className="title">
          <h2>Data</h2>
        </div>
        <center>
          <BarChart data={data} options={{ IndexAxis: "y" }} />
        </center>
      </Modal>
    </>
  );
}
export default Data;
