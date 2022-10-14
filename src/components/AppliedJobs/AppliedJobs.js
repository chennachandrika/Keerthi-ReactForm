import React from "react";

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
];

const AppliedJobs = () => {
  return (
    <div className="jobs-container">
      <h1>Applied Jobs</h1>
      <div className="job-info-container">
        {appliedJobsData.map((item) => (
          <div className="job-detailed-card">
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <div className="information-container">
                <div className="job-3-info">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 15v4h16v-4H4zm7-4v2h2v-2h-2zM9 3v2h6V3H9z" />
                </svg>
                <p className="job-exp">{item.experience}</p>
                </div>
                <div className="job-3-info">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM7 16v2h2v1h2v-1h.5a2.5 2.5 0 1 0 0-5h-3a.5.5 0 1 1 0-1H13v-2h-2V9H9v1h-.5a2.5 2.5 0 1 0 0 5h3a.5.5 0 1 1 0 1H7z" />
                </svg>
                <p className="job-exp">{item.salary}</p>
                </div>
                <div className="job-3-info">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <p className="job-exp">{item.location}</p>
                </div>
            </div>
            <div className="job-3-info">
                <div style={{width:"24px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zM6 7v2h8V7H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z"/></svg>
            </div><p className="job-exp">{item.responsibilities}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
