import React, { Component } from "react";
import Name from "./Name";
import Email from "./Email";
import Adress from "./Adress";
import PersonalInfo from "./PersonalInfo";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Name />
        <Email />
        <Adress />
        <PersonalInfo />
      </div>
    );
  }
}

export default Profile;
