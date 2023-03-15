import React from 'react';
import motivate from '../components/motivate.png';
import Hypo from '../components/question.png';
import Question from '../components/research.png';
import Null from '../components/null.png';
function Overview(){
    return(
    <div className='black section' id="Overview">
    <div className='title'><h2>Overview</h2>
    </div>
    <div className='body'>
        <div className='cards'>
          <div className="card"><img src={Question} alt=''/>
            <h5>Research Question</h5>
            <p>
            Is there a significant difference between the stand for or against anti-terror law in tweets that spread misinformation regarding anti-terror law?
            </p>
          </div>
          <div className="card"><img src={Hypo} alt=''/>
          <h5>Hypothesis</h5>
            <p>
            There is a significant difference between the stand for or against anti-terror law in tweets that spread misinformation regarding anti-terror law</p>
          </div>
          <div className="card"><img src={Null} alt=''/>
            <h5>Null Hypothesis</h5>
            <p>
            There is no signficant correlation between the stand for or against anti-terror law in tweets that spread misinformation regarding anti-terror law </p>
          </div>
          <div className="card"><img src={motivate} alt=''/>
            <h5>Action Plan</h5>
            <p>
            Analyze tweets posting mis/disinformation about PH anti-terror bill/act/law</p>
          </div>
        </div>
    </div>
  </div>);
}
export default Overview;