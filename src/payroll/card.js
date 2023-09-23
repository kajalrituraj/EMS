import React, { useState } from "react";
import "./card.css";
// import logo from "/assets/logo.jpg";
import SampleButton from "../button/button";
import Button from "../button/btn2";
import { salary_rate } from "./constants";

const Card = () => {
  const [name, setName] = useState("");
  const [wages, setWages] = useState("");
  const [days, setDays] = useState("");
  const [salary, setSalary] = useState("");
  // const [position, setPosition] = useState("");

  const options = [
    "Software Developer",
    "Web Developer",
    "UX Designer",
    "IT Project Manager",
    "Systems Architect",
    "Systems analyst",
    "Data analysis",
    "Data science",
  ];

  const onOptionChangeHandler = (event) => {
    setWages(salary_rate[event.target.value]["rate"]);
  };

  return (
    <div className="body">
      <div className="upper_card">
        <h1>Payroll-Employee</h1>
        <h2>Salary -Jan 2023</h2>
        <div className="sec_para">
          <div className="sec_img">
            <img src="/assets/logo.jpg" alt="Logo" style={{ height: "100px" }} />
            <div className="sizedBox" style={{ width: "20px" }}>
              {" "}
            </div>
            <p>
              Hello this is me Kajal
              <br /> I am workin here as a software developer..
            </p>
            <p></p>
          </div>

          <div className="btn-group">
            <SampleButton />
            <SampleButton />
            <SampleButton />
          </div>
        </div>
        <div className="sizedBox" style={{ height: "20px" }}>
          {" "}
        </div>
        <div className="sec_bodypart">
          <div className="sec_bodypart_1Comp">
            <select onChange={onOptionChangeHandler} className="select">
              <option>Please choose one option</option>
              {options.map((option, index) => {
                return <option value={option} key={index}>{option}</option>;
              })}
            </select>
            <div className="sizedBox" style={{ width: "20px" }}></div>
            <input
              type="number"
              className="input_salary"
              placeholder="Salary Per Day"
              value={wages}
              readOnly={true}
            />
          </div>
          <div className="sizedBox" style={{ height: "15px" }}></div>
          <hr />
          <div className="third_bodypart">
            <div className="calculate_salary">
              <div className="upper_border"></div>
              <input
                type="text"
                className="input_empName"
                placeholder="Employee Name"
                value={name}
                onChange={(v) => setName(v.target.value)}
              />

              <input
                type="text"
                className="input_empName"
                placeholder="Daily Wages"
                value={wages}
                readOnly={true}
              />
              <input
                type="text"
                className="input_empName"
                placeholder="No. of Days of work"
                value={days}
                onChange={(v) => setDays(v.target.value)}
              />

              <Button
                wages={wages}
                days={days}
                setSalary={setSalary}
              />
            </div>

            <div style={{ width: "20px" }}></div>
            <div className=" emp_detail">
            <div className="emp_salrydetai">
              <div className="date">
                {" "}
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Join Date
                </p>
                <p>21-09-2023</p>
              </div>
              <div className="date">
                {" "}
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>Gender</p>
                <p>Female </p>
              </div>
              <div className="date">
                {" "}
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>Location</p>
                <p>Mumbai</p>
              </div>
            </div>
            <h2 style={{alignItems:"center",}}>Total salary ={salary}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;