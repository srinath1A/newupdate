
import "./Homepage.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";

function Leftside_bar() {
  return (
    <>
    <div className="main_Leftside_bar">
      
      <div className="Lprofileimg">
        <img src="./images/makeup.jpg" alt=""></img>
        <div className="profile_name">
         <h3>Luna</h3>
         </div>
         <div className="Lunafollow">
         <div className="follwer">
          <span><b>1K</b></span><br></br>
          <span>Followers</span>
         </div>
         <div className="following">
          <span><b>200</b></span><br></br>
          <span>Following</span>
         </div>
         </div> 
      </div>
        
        <div className="Lbar">
        <ul className="Lside">
          <li><a href="#">Makeup With Luna</a></li>
          <li><a href="#">Skin Analysis With Luna</a></li>
          <li><a href="#"><span>Hair Styling With Luna</span></a></li>
          <li><a href="#">Nail Art With Luna</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Health Full Ness</a></li>
          <li><a href="#">Groups</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Buying Guidelines</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Language</a></li>
          <li><a href="#">Learning Skills</a></li>
          <li><a href="#">Language</a></li>
        </ul>
      </div>
    </div>
    

      
    </>    
  )
}

export default Leftside_bar;
