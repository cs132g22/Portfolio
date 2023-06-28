import { PersonalModal } from "../components/Modal";
import React, {useState} from "react";
import met from "../components/method.png";
import { motion } from "framer-motion";
import "./section.css";
import stat_ttest from '../utils/TTEST2.png'
import shapiro from '../utils/SHAPIRO.png'
import stat_utest from '../utils/UTEST2.png'
import sc1 from "../utils/scatter 1.jpeg"
import sc2 from "../utils/scatter2.jpeg"
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
          className="subsection white"><h3> Data Collection </h3>
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
          className="subsection white">
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
          className="subsection white">
            <h3> Statistical Testing</h3>
            
            <br/>
            For the statistical testing, we did 3 Tests in total: T-Test,Mann-Whitney U test, and Shapiro Test.Below are data of preliminary testing to arrive at our results in the results section
            <center>
            <img src={stat_ttest} alt='Statistical T-Test'/><br/><br/>
            <img src={shapiro} alt='Shapiro Normality Test'/><br/><br/>
            <img src={stat_utest} alt='Statistical U-Test'/>
            </center>
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
          className="subsection white">
              <h2> Machine Learning</h2>
              <p>
              To obtain supporting details for the hypothesis question, topic clustering model is used on tweets automatically translated and preprocessed to determine the most common topics, clusters on both tweets with and without misinformation that are in favor of the anti-terror law.

As with earlier data preprocessing and exploration steps, tokenization is done on the tweet words, removing hashtags, alt-texts, emojis and links on translated tweets. Then, using these NLP methods, the topic clustering model is facilitated via Latent Dirichlet Allocation (LDA). Three clustering is used based on the number of common topics among the fact-checking articles used to debunk tweets with misinformation.

The clustering among the tweet with misinformation featured a cluster about prominent beings involved in protests against anti-terror law such as Sarah Elago and the red-tagging and accusations of affiliation and support for terrorists, communism and cluster about communist itself being conflated with terrorism, and the legality of, and cluster political figures and/or candidates such as Leni, and other partylists being accused of CPP-NPA-NDF supporters, hence supporting terrorists. These clustering are based on keywords shown in the graph, along with the tweets inside the cluster. On the flipside, the tweets without misinformation also show clusters that feature presidential and partylist candidates, political figures who are involved with the writing of the law and criticisms thereof, and a cluster about the celebration of passing of the law by Duterte.

              </p>
              <div className="ml">
              <img src={sc1} alt="scatter Plot 1"/>
              <img src={sc2} alt="scatter plot 2"/>
              </div>
            </motion.div>
   </PersonalModal>
   </>
  );
}
export default Methodology;
