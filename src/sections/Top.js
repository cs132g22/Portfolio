import React from 'react';
import topimg from '../components/top.png';
function Top(){ 
    return(<div className='pic section top' id='top'>
        <div className='left'>
        <img src={topimg} alt='terrorists from designs.ai'/>
        </div>
        <div className='right'>
            <h2>Hi, We are Group 22</h2>
            
         <div className='span'>
         <p>This is our Project titled,<b>PH Twitter Misinformation-Disinformation</b>. *To be Filled</p>
          <h5>
              <strong>Data Science Team</strong></h5>
            <p>
              Reannu Instrella,<br/>
              Roenz Timbol,<br/>
              John David Vidad, WFW<br/>
              </p>
              </div>
        </div>
  </div>);
}
export default Top;