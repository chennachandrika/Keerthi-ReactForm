import React from 'react'
import "../../project.css"

const userPersonalData={
    fullName:"John Devid",
    emailId:"johndevid@gmail.com",
    mobileNum:"0099999999",
    address:"USA",
    skill:"Software Engineer",
    experience:"2 years",
    educationDetails:"Graduated from IIT",
    experienceDetails:"Worked as Associate Software engineer at Oracle",
}

const PersonalDetails=()=> {
  return (
    <div className='personal-details-container'>
        <h1>Personal Details</h1>
        <div className='info-container'>
            <div className='info-flow'>
                <div className='info-data'>
                    <p>Full Name: </p>
                    <p>{userPersonalData.fullName}</p>
                </div>
            </div>
            <div className='info-flow'>

            </div>
        </div>
    </div>
  )
}

export default PersonalDetails