import React from "react";
import "../../project.css";

const userPersonalData = {
  fullName: "John Devid",
  emailId: "johndevid@gmail.com",
  mobileNum: "0099999999",
  address: "USA",
  skill: "Software Engineer",
  experience: "2 years",
  educationDetails: "Graduated from IIT",
  experienceDetails: "Worked as Associate Software engineer at Oracle",
};

const PersonalDetails = () => {
  return (
    <div className="personal-details-container">
      <h1>Personal Details</h1>
      <div className="info-container">
        <div className="info-flow">
          <div className="info-data">
            <p className="label-text">Full Name: </p>
            <p className="data-text">{userPersonalData.fullName}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Email Id: </p>
            <p className="data-text">{userPersonalData.emailId}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Mobile Num: </p>
            <p className="data-text">{userPersonalData.mobileNum}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Address: </p>
            <p className="data-text">{userPersonalData.address}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Skill: </p>
            <p className="data-text">{userPersonalData.skill}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Experience: </p>
            <p className="data-text">{userPersonalData.experience}</p>
          </div>
        </div>
        <div className="info-flow">
          <div className="info-data">
            <p className="label-text">Education Details: </p>
            <p className="data-text">{userPersonalData.educationDetails}</p>
          </div>
          <div className="info-data">
            <p className="label-text">Experience Details: </p>
            <p className="data-text">{userPersonalData.experienceDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
