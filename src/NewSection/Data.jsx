import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import React, {useState} from "react";
import data from "../components/data.png"
import "./section.css";
function Data() {
const [openModal, setOpenModal] = useState(false);
const handleClose=()=>setOpenModal(false);
  return (<>
  <center>
    <motion.button 
    whileHover={{ scale: [null, 1.3, 1.15] }}
    transition={{ duration: 0.15}}
    onClick={()=>{setOpenModal(true)}} className="but"><img src={data} alt='data'/><br/>Data</motion.button></center>
    <Modal open={openModal} close={handleClose}>
    <div className="title">
        <h2>Data</h2>
      </div>
      <center>
        <h2>Coming Soon</h2>
      </center>
    </Modal>
    </>
  );
}
export default Data;
