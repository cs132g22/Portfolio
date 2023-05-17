import modalTable from "./modalTable";
import ScatterDate from "../components/scatter/ScatterDates";
import { PersonalModal } from "../components/Modal";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import React, { useState } from "react";
import dataimg from "../components/data.png";
import "./section.css";
import BarChart from "./barchart";
import { columnValues, tweetType,uniqueAuthors} from "../components/data";
import EngagementsGraph from "../components/EngagementsGraph/EngagementsGraph";
import { DateScaleTable,TranslatedTweetsTable,CommonWordsTable,NLPTSLTable,HashtagsCountTable } from "../components/Tables";
function Data() {
  const background=[
    'rgba(255, 26, 104, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(0, 0, 0, 0.5)'
  ];
  const border=[
    'rgba(255, 26, 104, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(0, 0, 0, 1)'
  ];
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const filteredColumns=columnValues.filter(obj=>obj.Count>0);
  const missingData = {
    labels: filteredColumns.map((obj)=>{return obj.Column}),
    datasets: [
      {
        label: "Tweets",
        backgroundColor: background,
        borderColor: border,
        borderWidth:1,
        data: filteredColumns.map((obj)=>{return obj.Count}),
      },
    ],
  };
  const tweetTypeData = {
    labels: tweetType.map((obj)=>{return obj["Tweet Type"]}),
    datasets: [
      {
        label: "Tweets",
        backgroundColor: background,
        borderColor: border,
        borderWidth:1,
        data: tweetType.map((obj)=>{return obj.Count}),
      },
    ],
  };
  const uniqueAuthorData = {
    labels: uniqueAuthors.map((obj)=>{return obj.Author}),
    datasets: [
      {
        label: "Tweets",
        
        backgroundColor: background,
        borderColor:border,
        borderWidth:1,
        data: uniqueAuthors.map((obj)=>{return obj.Count}),
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
      <PersonalModal open={openModal} close={handleClose} extraclass="inverse">
        
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
          <BarChart data={missingData} Title="Missing Data Bar Graph" orie="y" class_name="charts" xlabel="# of tweets" ylabel="Column"/>
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
        </div>
        <div className="subsubsection">
          <h3>2. Handling Outliers</h3>
          <p>Outliers are kept in the data analysis for completeness, since there are only a couple of tweets that fell under the outliers on one of the numerical features or columns considered for analysis (followers, likes, replies, retweets). Among those outliers, only one tweet, (22-55) had all of these as outlier, and it was the tweets made by Ping Lacson. For the purpose of this data exploration and analysis, both cases where Ping Lacson’s tweet are included and excluded will be analyzed in data modeling.</p>
        </div>
        <div className="subsubsection">
          <h3>3. Ensuring Consistency</h3>
          <p> 
          Most of the checks on the data formatting is done manually, with the exception of dates, where the DD-MM-YY is checked if it fits with the two digit for the year part. It uses a check to determine if it is within the given time constraints using datetime APIs from python, then re-evaluate and change accordingly on the corresponding excel datasheet. As for the rest of the dataset that involved multiple entries, split() is used to check if the correct delimiter was used for each entry as a crude initial check, then it was manually inspected.

          </p>
        </div>
        <div className="subsubsection"><h3>4. Categorical Data Encoding</h3>
        <p>Since our question involves comparing interactions between tweets that do and do not contain misinformation, 
          we used Label encoding to categorize tweets as 0 for tweets without misinfo, and 1 for tweets containing misinfo. We tabulated the encoding for each category manually as we initially tabulated each category in separate spreadsheets.</p>
          <center><table>
            <tr><th>Category</th><th>Count</th></tr>
            <tr><td>Has no Misinfo</td><td>100</td></tr>
            <tr><td>Has Misinfo</td><td>100</td></tr>
          </table></center>
          </div>
        <div className="subsubsection">
          <h3>5.Scaling of Dates</h3>
          <p>
          To provide a scaling for date and time posted, we will convert them into epochs and include them in a new column, for convenience in plotting it, with precision up to a minute. The table below shows the conversion.
          </p>
          <div className="minimized-table">
            <center>
            <DateScaleTable/>
            <a href="https://romantic-area-46a.notion.site/Scaling-of-Dates-866d8a4b1c154901b060e450ad9d6bbc" target="_blank"><button className="expand">Expand Table</button></a>
            </center></div>
            For a bulkier and lesser precise binning, scaling per month is considered to count the number of tweets, and its likes, replies and retweet in that period of time, which will be shown in the visualization later on.
        </div>
        <div className="subsubsection">
          <h3>6. NLP Preprocessing</h3>
          
          We also used some other preprocessing methods specifically for Natural Language Processing which were provided in the example Google Colab python notebook just in case the data could be utilized for other purposes in the future.
          <div className="subsubsubsection">
            <h4>a. Translating</h4>
            <p>
            In translating, we did two methods, first one was we manually translated the tweet texts from Filipino to English, we also used the googletrans python api for automatically translating the tweet texts to English. Before translating via the googletrans api, we tried to clean the text by converting emojis, emoticons, to text using the provided google collab snippet in class. However, some emojis were not filtered out probably due to the emoji database used being outdated. Here is the table of translation. 
            </p>
            <div className="minimized-table">
            <center>
            <TranslatedTweetsTable/>
            <a href="https://romantic-area-46a.notion.site/20ff6e8806df48f28335b0891131172f?v=971e63b65c3f434bbd8af8627cfc82b6" target="_blank"><button className="expand">Expand Table</button></a>
            </center></div>
          </div>
          <div className="subsubsubsection">
            <h4>b. Tokenization, lower Casing, and removal of stop words</h4>
            <p>Using the translated texts, we utilized the natural language toolkit python library to tokenize text into words by using the word_tokenize function then filtering out stopwords from tweet texts. In stemming and lemmatization, we also used the provided snippet in the example python notebook for NLP. The table below shows the data processed through tokenization (with lowercasing and removal of stop words), Stemming, and Lemmatization.</p>
            <div className="minimized-table">
            <center>
            <NLPTSLTable/>
            <a href="https://romantic-area-46a.notion.site/6dc2eb2891474fd7a8130963389b0586?v=d47a8132bb174a0eac4d61c4e60f9318" target="_blank"><button className="expand">Expand Table</button></a>
            </center></div>
          </div>
          Here are the Most commonly used Words in the Tweets (minimzed into top 5)
          
          <div className="minimized-table">
            <center>
            <CommonWordsTable/>
            <a href="https://romantic-area-46a.notion.site/Most-Common-Words-caa0f8f45d934f7c99b0f6581f5efb0e" target="_blank"><button className="expand">Expand Table</button></a>
            </center></div>
        </div>

        </div>
        <div className="subsection">
          <h2>Analysis and Visualization</h2>
          <div className="subsubsection">
            <h3></h3>
          </div>
          <div className=" divider subsubsection">
            <div>
            <h3>Frequency of Tweet</h3>
            <BarChart data={tweetTypeData} Title="Tweet Type Bar Graph" orie="y"  class_name="charts" xlabel="# of Tweets" ylabel="Tweet Type"/><br/>
            </div>
            <p className="text">
            We also looked at the frequency of tweet types. From the graph below, we can see that there is Text for all the tweets we collected. Next is reply with 60 which means that 60% of the tweets with misinformation we collected are replies to another tweet. Images are present in 32% of tweets.
            </p>
          </div>
          <div className="subsubsection">
            <div className="text">
              <h3>Unique Authors</h3>
              <p>From the dataset, there are 63 unique authors in the list with @todongpnoy and @dTnalakRiderSR taking up the spot for the most tweets in our dataset with 9 tweets each.</p>
            </div>
            <div className="x-scrollable">
            <BarChart data={uniqueAuthorData} Title="Authors vs Tweets Bar Graph" orie="x"  class_name="fullcharts" xlabel="account Handle" ylabel="#of Tweets"/></div>
          </div>
          <div className="subsubsection">
            <h3>Tweets per Month</h3>
            <ScatterDate/>
            Here we have a scatter plot showing the distribution of the number of tweets divided by month using the Date posted column from the dataset, starting from January 2020 until December of 2022 where 1 is January and December is 36. In this graph we can see that the month with the most tweets from what we have collected is from June 2020.
          </div>
          <div className="subsubsection">
            <h3>Engagement over Time </h3>
            <p>Here we have a line graph of different engagements on tweets over time. The following graph shows the tweets per month, with month 1 as January 2020, while here we look at the trend of engagements over time. Click on the dropdown menu to select which engagement (Like, Reply, Retweet, Quote Tweet) to view.</p>
            <EngagementsGraph/>
          </div>
          <div className="subsubsection">
            
          </div>
        </div>
        <div className="subsection">
          <h2>Feature Generation</h2>
          <p>
          One additional feature we could add to our dataset is the hashtags used in a tweet. Hashtags will be added accordingly on a separate column from the tweet itself. To generate the hashtag column, we will need to split the tweet string with # as its delimiter. Tweets without hashtags will have their hashtags column be left blank. The table below shows the frequency of the types of hashtags in the tweets. 
          </p>
          <div className="minimized-table">
            <center>
            <HashtagsCountTable/>
            <a href="
https://romantic-area-46a.notion.site/Frequency-of-Hashtags-659e31494f884cd3a365e50cafba28cd" target="_blank"><button className="expand">Expand Table</button></a>
            </center></div>
        </div>
      </PersonalModal>
    </>
  );
}
export default Data;
