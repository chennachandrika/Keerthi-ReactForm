import React, { useEffect, useState } from "react";
import JobDetailedCard from "../JobDetailedCard/JobDetailedCard";

const jobsData = [
  {
    role: "JavaScript Developer",
    company: "Maximl Labs Private Limited",
    experience: "0 yrs",
    salary: "0,00,000 - 3,00,000 PA",
    minSalary: "0,00,000",
    maxSalary: "3,00,000",
    location: "Bangalore",
    responsibilities:
      "Deep knowledge on Javascript practices based on extensive work",
    requiredSkills: ["Javascript", "CSS", "HTML"],
    isHotJob: true,
    jobPosted: "2 Days Ago",
  },
  {
    role: "Python Developer",
    company: "Maximl Labs Private Limited",
    experience: "0 yrs",
    salary: "0,00,000 - 3,00,000 PA",
    minSalary: "0,00,000",
    maxSalary: "3,00,000",
    location: "Hyderabad",
    responsibilities:
      "Deep knowledge on Pyhton  practices based on extensive work",
    requiredSkills: ["Python", "CSS", "HTML"],
    isHotJob: true,
    jobPosted: "2 Days Ago",
  },
  {
    role: "Angular Developer",
    company: "Maximl Labs Private Limited",
    experience: "1-3 Yrs",
    salary: "3,00,000 - 5,00,000 PA",
    minSalary: "3,00,000",
    maxSalary: "5,00,000",
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
    role: "Junior React Developer",
    company: "Codemonk Elvago Private Limited",
    experience: "2-3 Yrs",
    salary: "3,00,000 - 5,00,000 PA",
    minSalary: "3,00,000",
    maxSalary: "5,00,000",
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
  {
    role: "Angular Developer",
    company: "Maximl Labs Private Limited",
    experience: "1-3 Yrs",
    salary: "6,00,000 - 9,00,000 PA",
    minSalary: "6,00,000",
    maxSalary: "9,00,000",
    location: "Delhi",
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
    salary: "6,00,000 - 9,00,000 PA",
    minSalary: "6,00,000",
    maxSalary: "9,00,000",
    location: "Mumbai",
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
    name: "Bangalore",
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
    minSalary: "0,00,000",
    maxSalary: "3,00,000",
    checked: false,
  },
  {
    name: "3-6 Lakhs",
    minSalary: "3,00,000",
    maxSalary: "6,00,000",
    checked: false,
  },
  {
    name: "6-9 Lakhs",
    minSalary: "6,00,000",
    maxSalary: "9,00,000",
    checked: false,
  },
];

const Checkbox = ({ obj, onChange }) => {
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
  const [locationData, setLocationData] = useState(location);
  const [salaryData, setSalaryData] = useState(salary);

  const renderJobs = () => {
    const loc = locationData.filter((item) => item.checked === true);
    const sal = salaryData.filter((item) => item.checked === true);

    let res = [];
    if (loc.length !== 0 || sal.length !== 0) {
      for (let l of loc) {
        const main = jobsData.filter((job) => job.location === l.name);
        res.push(...main);
      }
      if (loc.length === 0) {
        res = jobsData;
      }
      const salData = [];
      console.log(sal);
      for (let s of sal) {
        const main = res.filter(
          (job) => job.minSalary >= s.minSalary && s.maxSalary >= job.maxSalary
        );
        salData.push(...main);
      }
      setFilteredData(salData ? salData : res);
    } else {
      setFilteredData(jobsData);
    }
  };

  useEffect(() => {
    renderJobs();
  }, [locationData, salaryData]);

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
                    setLocationData(
                      locationData.map((d) => (d.name === item.name ? item : d))
                    );
                  }}
                />
              </li>
            ))}
          </div>
          <div>
            <h1>Salary</h1>
            {salaryData.map((obj, index) => (
              <li style={{ listStyleType: "none" }}>
                <Checkbox
                  obj={obj}
                  onChange={(item) => {
                    setSalaryData(
                      salaryData.map((d) => (d.name === item.name ? item : d))
                    );
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
