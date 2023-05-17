import { motion } from "framer-motion";
import { PersonalModal } from "../components/Modal";
import React, {useState} from "react";
import res from "../components/results.png"
import "./section.css";
function Results() {
  const [openModal, setOpenModal] = useState(false);
const handleClose=()=>setOpenModal(false);
  return (
    <>
    <center>
    <motion.button 
    whileHover={{ scale: [null, 1.3, 1.15] }}
    transition={{ duration: 0.15}}
    onClick={()=>{setOpenModal(true)}} className="but"><img src={res} alt='results'/><br/>Results</motion.button></center>
   <PersonalModal open={openModal} close={handleClose}>
    <div>
      <div>
        <h2>Results</h2>
      </div>
      <center>
        <h2>Coming Soon</h2>
      </center>
    </div>
    </PersonalModal></>
  );
}
export default Results;
