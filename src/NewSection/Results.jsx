import { motion } from "framer-motion";
import { PersonalModal } from "../components/Modal";
import React, {useState} from "react";
import res from "../components/results.png"
import "./section.css";
import inliers from "../utils/INLIERS.png"
import ttest from "../utils/ttest.png"
import utest from "../utils/utest.png"
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
            <div><h3>Inlier Mean Count of Engagement</h3>For each engagement type of each tweet, the computed mean of engagement is higher for tweets with misinformation than those without across the board.</div>
            <img src={inliers} alt="Inlier mean Count of Engagements"/>
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
            <div><h3>T-Test</h3>
            To test whether the difference of engagements between categories are significant, we used the T-test with 95% confidence level to get the t-statistic for each engagement type and the p-value. All tests gave a value of less alpha (0.05) and thus there is a significant difference between the engagements of each category.
</div>
            <img src={ttest} alt="Ttest"/>
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
            <div><h3>Mann-Whitney U-Test</h3>
            We tested for the normality of the distribution of engagement values for each category using the shapiro test for normality. Both categories do not have a normal distribution so we can use the Mann-Whitney U-test to check whether both categories are similar in distribution.

All engagement types, except for the quote tweets, have p-values higher than alpha (0.05), thus they have similar distribution in both categories.
</div>
            <img src={utest} alt="MW U-tset"/>
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
          className="partial"><h3>Conclusion</h3>
          From the tests we have conducted on the different engagement types of the two categories: tweets with misinformation and are in favor of Anti-Terror Law, and tweets without misinformation but also are in favor of Anti-Terror Law. The inlier means of engagement counts for tweets with misinformation higher than tweets without misinformation across the board. The test for significant differences are conducted through t-test and Mann-Whitney u-test if the shapiro test indicates that the distribution from either dataset of tweets is not normal. We conclude that tweets that are in favor of Anti-terror law and contain misinformation attract more engagements from other users, than those tweets that do not contain misinformation even with the same sentiment toward the law. However, only quote tweets had a significant difference between tweets with misinformation and tweets without misinformation from both statistical tests.
          </motion.div>
      </center>
    </div>
    </PersonalModal></>
  );
}
export default Results;
