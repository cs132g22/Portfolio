import { PersonalModal } from "../components/Modal";
import React, {useState} from "react";
import met from "../components/method.png";
import { motion } from "framer-motion";
import "./section.css";
function Methodology() {
  const [openModal, setOpenModal] = useState(false);
const handleClose=()=>setOpenModal(false);
  return (
    <>
    <center>
    <motion.button 
    whileHover={{ scale: [null, 1.3, 1.15] }}
    transition={{ duration: 0.15}}
    onClick={()=>{setOpenModal(true)}} className="but"><img src={met} alt='methods'/><br/>Methods</motion.button></center>
   <PersonalModal open={openModal} close={handleClose}>
   <div className="title">
        <h2>Methodology</h2>
      </div>
      <center>
        <h2>Coming Soon</h2>
      </center>
   </PersonalModal>
   </>
  );
}
export default Methodology;
