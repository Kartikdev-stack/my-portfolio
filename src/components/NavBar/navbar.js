import React from "react";
import './navbar.css';
import { Link } from "react-scroll";

const Navbar=()=>{

    const logo=require('../../assets/logo_red.png')

    return( 
      <nav className="navbar">
           <img src={logo} alt="Logo" className="logo"/>
           <div className="desktopMenu">
                  <Link className="desktopMenuListItem">Home</Link>
                  <Link className="desktopMenuListItem">About Me</Link>
                  <Link className="desktopMenuListItem">Portfolio</Link>
                  {/* <Link className="desktopMenuListItem"></Link> */}


           </div>
            
           <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg" />Contact Me
           </button>
         
      </nav>


   )
}

export default Navbar