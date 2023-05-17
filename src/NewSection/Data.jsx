import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import React, {useState} from "react";
import dataimg from "../components/data.png"
import "./section.css";
import BarChart from "./barchart";
function Data() {
const [openModal, setOpenModal] = useState(false);
const handleClose=()=>setOpenModal(false);

  return (<>
  <center>
    <motion.button 
    whileHover={{ scale: [null, 1.3, 1.15] }}
    transition={{ duration: 0.15}}
    onClick={()=>{setOpenModal(true)}} className="but"><img src={dataimg} alt='data'/><br/>Data</motion.button></center>
    <Modal open={openModal} close={handleClose}>
    <div className="title">
        <h2>Data</h2>
      </div>
      <center>
        <BarChart/>
        testing
      </center>
    </Modal>
    </>
  );
}
export default Data;
