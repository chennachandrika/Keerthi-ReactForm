import React from "react";
import JobDetailedCard from "../JobDetailedCard/JobDetailedCard"

const appliedJobsData = [
  {
    role: "Angular Developer",
    company: "Maximl Labs Private Limited",
    experience: "1-3 Yrs",
    salary: "3,00,000 - 5,00,000 PA",
    location: "Chennai",
    responsibilities:
      "Deep knowledge on Angular 2+ practices and commonly used modules based on extensive work",
    requiredSkills: [
      "Angular",
      "Angular 2+",
      "CSS",
      "Angular/software developer",
      "Angular/Developer",
    ],
    isHotJob: true,
    jobPosted: "2 Days Ago",
  },
  {
    role: "React Developer",
    company: "Codemonk Elvago Private Limited",
    experience: "2-3 Yrs",
    salary: "5,00,000 - 8,00,000 PA",
    location: "Bangalore",
    responsibilities:
      "Deep knowledge on React practices and commonly used modules based on extensive work",
    requiredSkills: [
      "React",
      "React Native",
      "CSS",
      "React/software developer",
      "React/Developer",
    ],
    isHotJob: true,
    jobPosted: "5 Days Ago",
  },
];

const AppliedJobs = () => {
  return (
    <div className="jobs-container">
      <h1>Applied Jobs</h1>
      <div className="job-info-container">
        {appliedJobsData.map((item) => (
         <JobDetailedCard item={item}/>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
