import { PersonalModal } from "../components/Modal";
import React, {useState} from "react";
import met from "../components/method.png";
import { motion } from "framer-motion";
import "./section.css";
import stat_ttest from '../utils/TTEST2.png'
import shapiro from '../utils/SHAPIRO.png'
import stat_utest from '../utils/UTEST2.png'
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
          className="partial"><h3> Data Collection </h3>
            <br/>
            For the Data Collection, a combination of manual webscrapping and automated webscrapping using snscraper, were done.
            A total of 200 tweets were collected, wherein, 100 have mis/disinformation, while the other 100 do not contain any mis/disinformation. 
          </motion.div>
          <motion.div 
          initial={{
            x:600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.4,
              duration:0.2
            }
          }}
          className="partial">
            <br/>
            Initial processing of tweets include handling outliers and obtaining the central tendencies of interactions of tweets per category. Furthermore, the tweet words are filtered without url links, alt-texts and emojis to facilitate later analysis via topic clustering and/or statistical methods, such as Mann-Whitney U test, T-test for the different features in the dataset. For the engagement metrics, outliers are excluded from the statistical tests.<h3> Data Processing </h3>
          </motion.div>
          <motion.div 
          initial={{
            x:600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.6,
              duration:0.2
            }
          }}
          className="partial">
            <h3> Statistical Testing</h3>
            
            <br/>
            For the statistical testing, we did 3 Tests in total: T-Test,Mann-Whitney U test, and Shapiro Test.Below are data of preliminary testing to arrive at our results in the results section
          </motion.div>
          <motion.div 
          initial={{
            x:600,opacity:0
          }}
          animate={{
            x:0,opacity:1,
            transition:{
              delay:0.8,
              duration:0.2
            }
          }}
          className="partial">
            <center>
            <img src={stat_ttest} alt='Statistical T-Test'/>
            <img src={shapiro} alt='Shapiro Normality Test'/>
            <img src={stat_utest} alt='Statistical U-Test'/>
            </center>
            </motion.div>
      </center>
   </PersonalModal>
   </>
  );
}
export default Methodology;
