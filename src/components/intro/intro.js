import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {

  const intro_bg=require('../../assets/kartik-removebg-preview.png');

  return (
    <section id='intro'>
        <div className="introContent">
             <span className='hello'>Hello,</span>
             <span className='introText'>I'm <span className='introName'>Kartik</span></span>Website Designer
             <p className="introPara">I am a skilled web designer with experience in creating visually appealing web applications</p>
             <button className='btn'>Hire Me</button>
        </div>
        <img src={intro_bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
