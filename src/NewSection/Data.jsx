import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import dataimg from "../components/data.png";
import "./section.css";
import BarChart from "./barchart";
import { columnValues} from "../components/data";
function Data() {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const filteredColumns=columnValues.filter(obj=>obj.Count>0);
  const data = {
    labels: filteredColumns.map((obj)=>{return obj.Column}),
    datasets: [
      {
        label: "Tweets",
        backgroundColor: "rgba(255, 99, 132,0.7)",
        borderColor: "rgb(255, 255, 132)",
        borderWidth:1,
        data: filteredColumns.map((obj)=>{return obj.Count}),
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
        <div className="subsection">
          <h2>Data Retrieval</h2>
          <p>
          There are 200 total tweets collected. One hundred are tweets that contain misinformation while the other 100 are tweets that do not contain misinformation. The dataset for the hundred tweets that contain misinformation is separate from the hundred tweets that do not contain misinformation. Both are stored in their own Google Sheets spreadsheet. In retrieving the data, we used the pandas read_csv function on the download link of the exported csv.

          </p>
        </div>
        <div className="subsection">
          <h2>Preprocessing</h2>
          <p>Before analyzing the data, we did a lot of preprocessing especially for the main dataset which are the tweets that contain misinformation. First was handling missing data.</p>
        <div className="subsubsection">
          <h3>1. Finding the Missing Data</h3>
          <p>
          From the main dataset, we counted the number of missing data points in each column. We did this by using the isnull() method and summing it all up per column using the sum() method.<br/>
          
The tweets we have collected have no missing values for the attributes that are relevant to the question we are trying to answer,thus, there is no need for further handling of missing values. 

          </p>
          <div className="divider">
          {/* <BarChart data={data} Title="Missing Data Graph" /> */}
          <div className="text">
          <p>
          Handling missing values/ensuring no missing values
The tweets we have collected have no missing values for the attributes that are relevant to the question we are trying to answer. Here are the columns that are relevant and not empty:
<div className="flexbox">
<div>
ID<br/>
Timestamp<br/>
Tweet URL<br/>
Keywords<br/>
Account handle<br/>
Name<br/>
Type
</div>
<div>
Joined<br/>
Following<br/>
Followers<br/>
Tweet<br/>
Tweet Translated<br/>
Tweet Type<br/>
Date posted<br/>
</div>
<div>
Content type<br/>
Likes<br/>
Replies<br/>
Retweets<br/>
Quote Tweets<br/>
</div>
</div>
Tweet Location being easily spoofed and is not present in all accounts can be disregarded during our data exploration. The column for views is not relevant and thus is filtered away along with submission-specific columns for data collection from Rating to Review.
</p></div>
          </div>
          <div className="divider">

          </div>
        </div>
        <div className="subsubsection"><h3>2. Categorical Data Encoding</h3><p>Since our question involves comparing interactions between tweets that do and do not contain misinformation, we used Label encoding to categorize tweets as 0 for tweets without misinfo, and 1 for tweets containing misinfo. We tabulated the encoding for each category manually as we initially tabulated each category in separate spreadsheets.</p></div>
        <div className="subsubsection">
          <h3>3.Scaling of Dates</h3>
          <p>
          To provide a scaling for date and time posted, we will convert them into epochs and include them in a new column, for convenience in plotting it, with precision up to a minute. The table below shows the conversion.
          </p>
        </div>
        <div className="subsubsection">
          <h3>4. NLP Preprocessing</h3>
          We also used some other preprocessing methods specifically for Natural Language Processing which were provided in the example Google Colab python notebook just in case the data could be utilized for other purposes in the future.
          <div className="subsubsubsection">
            <h4>a. Translating</h4>
            <p>
            In translating, we did two methods, first one was we manually translated the tweet texts from Filipino to English, we also used the googletrans python api for automatically translating the tweet texts to English. Before translating via the googletrans api, we tried to clean the text by converting emojis, emoticons, to text using the provided google collab snippet in class. However, some emojis were not filtered out probably due to the emoji database used being outdated. Here is the table of translation. 
            </p>
          </div>
          <div className="subsubsubsection">
            <h4>b. Tokenization, lower Casing, and removal of stop words</h4>
            <p>Using the translated texts, we utilized the natural language toolkit python library to tokenize text into words by using the word_tokenize function then filtering out stopwords from tweet texts. In stemming and lemmatization, we also used the provided snippet in the example python notebook for NLP. The table below shows the data processed through tokenization (with lowercasing and removal of stop words), Stemming, and Lemmatization.</p>
          </div>
        </div>
        </div>
        <div className="subsection">
          <h2>Analysis and Visualization</h2>
          <div className="subsubsection">
            <h3></h3>
          </div>
          <div className="subsubsection">
            <h3>Frequency of Tweet</h3>
            a
          </div>
          <div className="subsubsection">
            
          </div>
          <div className="subsubsection">
            
          </div>
          <div className="subsubsection">
            
          </div>
          <div className="subsubsection">
            
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Data;
