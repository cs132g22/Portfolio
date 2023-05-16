import motivate from "../components/motivate.png";
import Hypo from "../components/question.png";
import Question from "../components/research.png";
import Null from "../components/null.png";
import ov from "../components/overview.png";
import { motion } from "framer-motion";
import { Modal } from "../components/Modal";
import React, {useState} from "react";
import "./section.css";
function Overview() {
  const [openModal, setOpenModal] = useState(false);
const handleClose=()=>setOpenModal(false);
  return (
    <>
    <center>
    <motion.button 
    whileHover={{ scale: [null, 1.3, 1.15] }}
    transition={{ duration: 0.15}}
    onClick={()=>{setOpenModal(true)}} className="but"><img src={ov} alt='overview'/>Overview</motion.button></center>
    <Modal open={openModal} close={handleClose}>
      <div className="title">
        <h2>Overview</h2>
      </div>
      <div className="overview-body">
          <motion.div 
          initial={{
            x:600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.2,
              duration:0.2
            }
          }}
          className="partial">
            <img src={Question} alt="" />
            <h4>Research Question</h4>
            <p>
              Is there a significant difference between the stand for or against
              anti-terror law in tweets that spread misinformation regarding
              anti-terror law?
            </p>
          </motion.div>
          
          <motion.div
          initial={{
            x:-600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.5,
              duration:0.2
            }
          }} className="partial">
           
            <h4>Hypothesis</h4>
            <p>
              There is a significant difference between the stand for or against
              anti-terror law in tweets that spread misinformation regarding
              anti-terror law
            </p>
            <img src={Hypo} alt="" />
          </motion.div>
          <motion.div 
          initial={{
            x:600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.7,
              duration:0.2
            }
          }}className="partial">
            <img src={Null} alt="" />
            <h4>Null Hypothesis</h4>
            <p>
              There is no signficant correlation between the stand for or
              against anti-terror law in tweets that spread misinformation
              regarding anti-terror law{" "}
            </p>
          </motion.div>
          <motion.div
          initial={{
            x:-600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:1.0,
              duration:0.2
            }
          }} className="partial right">
            
            <h4>Action Plan</h4>
            <p>
              Analyze tweets posting mis/disinformation about PH anti-terror
              bill/act/law
            </p>
            <img src={motivate} alt="" />
          </motion.div>
      </div>
    </Modal></>
  );
}
export default Overview;
