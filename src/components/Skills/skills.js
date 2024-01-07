import React from 'react';
import './skills.css';


const skiils = () => {

const react=require('../../assets/1174949_js_react js_logo_react_react native_icon.svg');
const mongo=require('../../assets/MongoDB_logo_PNG7.png');
const node=require('../../assets/nodejs-ar21.svg');

  return (
    <section id='skills'>
         <span className="skillTitle">What </span>
         <p className="introPara">I am a skilled web designer with experience in creating visually appealing web applications.I am a skilled web designer with experience in creating visually appealing web applications.</p>
         <div className="skillBars">
            <div className="skillBar">
              <img src="" alt="React" className="skillImg" />
              <div className="skillBarText">
                  <h2>React</h2>
                  <p>My React experience</p>
              </div>
            </div>
            <div className="skillBar">
            <img src="" alt="MongoDB" className="skillImg" />
              <div className="skillBarText">
                  <h2>MongoDB</h2>
                  <p>My MongoDB experience</p>
              </div>
            </div>
            <div className="skillBar">
            <img src="" alt="NodeJS" className="skillImg" />
              <div className="skillBarText">
                  <h2>NodeJS</h2>
                  <p>My NodeJS experience</p>
              </div>
            </div>
         </div>


    </section>
  )
}

export default skiils
