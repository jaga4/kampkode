// import React from 'react';
import { useState } from 'react';
import './content.css';
import Banner from './banner';

const Ellipse = ({ className, style }) => (
  <div className={`ellipse ${className}`} style={style}></div>
);

const Content = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    const toggleButton = () => {
        setBtnClicked(!btnClicked);
      };

  return (
    <div className="content-container">
      <Ellipse className="ellipse1" />
      <Ellipse className="ellipse2" />
      <Ellipse className="ellipse3" />
      <Ellipse className="ellipse4" />
      <Ellipse className="ellipse5" />
      {/* <Ellipse className="ellipse6" /> */}
      <div className="content">
        <h1>We've really sped up our workflow</h1>
        <p>
          We've just released a new update! Check out the all new dashboard view. Pages and now load faster; you can try us for free for 30 days. 
          <br></br>Join 4,000+ companies already growing.
        </p>
        
        <button className={`start-learning ${btnClicked ? 'clicked' : ''}`} onClick={toggleButton}><i className="bi bi-arrow-right-short"></i> Start Learning Today</button>
        <button className={`join-now ${btnClicked ? '' : 'clicked'}`} onClick={toggleButton}>Join Now</button>
        
      </div>
      
      <div className="icons">
        <div className="icon" id='icon1'><img src="Html-logo.png" alt="Icon 1" /></div>
        <div className="icon" id='icon2'><img src="Css-logo.png" alt="Icon 2" /></div>
        <div className="icon" id='icon3'><img src="Js.logo.png" alt="Icon 3" /></div>
        <div className="icon" id='icon4'><img src="React.logo.png" alt="Icon 4" /></div>
        <div className="icon" id='icon5'><img src="android.logo.png" alt="Icon 5" /></div>
        <div className="icon" id='icon6'><img src="flutter.logo.png" alt="Icon 6" /></div>
        <div className="icon" id='icon7'><img src="node-js.logo.png" alt="Icon 7" /></div>
        <div className="icon" id='icon8'><img src="mongo-db.logo.png" alt="Icon 8" /></div>
      </div>
    
    </div>
  );
};

export default Content;
