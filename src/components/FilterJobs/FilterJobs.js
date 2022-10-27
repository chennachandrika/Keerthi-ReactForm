import React, { useEffect, useState } from "react";
import JobDetailedCard from "../JobDetailedCard/JobDetailedCard";

const jobsData = [
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

const location = [
  {
    name: "Banglore",
    checked: false,
  },
  {
    name: "Chennai",
    checked: false,
  },
  {
    name: "Delhi",
    checked: false,
  },
  {
    name: "Mumbai",
    checked: false,
  },
  {
    name: "Hyderabad",
    checked: false,
  },
];
const salary = [
  {
    name: "0-3 Lakhs",
    checked: false,
  },
  {
    name: "3-8 Lakhs",
    checked: false,
  },
  {
    name: "8-10 Lakhs",
    checked: false,
  },
  {
    name: "10-15 Lakhs",
    checked: false,
  },
];

const Checkbox = ({ obj ,onChange}) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        value={obj.checked}
        onChange={() => onChange({ ...obj, checked: !obj.checked })}
      />
      {obj.name}
    </>
  );
};

const FilterJobs = () => {
  const [filteredData, setFilteredData] = useState(jobsData);
  const [locationData,setLocationData]=useState(location);
  const [salaryData,setSalaryData]=useState(salary);
  
  const renderJobs=()=>{
    const loc=locationData.filter(item=>item.checked===true)
    const sal=salaryData.filter(item=>item.checked===true)
    console.log(filteredData.filter(item=>loc.map(i=>i===item.location)))
  }
  useEffect(()=>{
    const loc=locationData.filter(item=>item.checked===true)
    const sal=salaryData.filter(item=>item.checked===true)
    console.log(loc,sal)
  },[salaryData,locationData])
  return (
    <div className="jobs-container">
      <div className="filteredJobs-container">
        <div className="filters">
          <div>
            <h1>Location</h1>
            {locationData.map((obj, index) => (
              <li style={{ listStyleType: "none" }}>
                <Checkbox
                  obj={obj}
                  onChange={(item) => {
                    setLocationData(locationData.map((d) => (d.name === item.name ? item : d)));
                    renderJobs()
                }}
                />
              </li>
            ))}
          </div>
          <div >
            <h1>Salary</h1>
            {salaryData.map((obj, index) => (
              <li style={{ listStyleType: "none" }}>
                <Checkbox
                  obj={obj}
                  onChange={(item) => {
                    setSalaryData(salaryData.map((d) => (d.name === item.name ? item : d)));
                }}
                />
              </li>
            ))}
          </div>
        </div>
        <div>
          {filteredData.map((item) => (
            <JobDetailedCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterJobs;
