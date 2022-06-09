import React, { Component } from 'react';

import "./About.css";
import profile_pic_Hathamee_Bensalem from "../assets/profile_pic_Hathamee_Bensalem.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              alt="Profile Pic"
              src={profile_pic_Hathamee_Bensalem}
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Hathamee Bensalem</div>
            <div className="brief_description">
              <ul>In my free time I like to
                <li>Dance</li>
                <li>Sing</li>
                <li>Read books</li>
                <li>Play Soccer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}