import React, { useEffect } from "react";
import "../button/btn2.css";

const Button = ({ wages, days, setSalary }) => {
  useEffect(() => {
    if (days !== "") {
      handleClick();
    }
  }, [wages]);
  
  const handleClick = () => {
    const numDays = parseInt(days);
    const numWages = parseInt(wages);

    var std_days = 20;
    var overrate = numWages * 1.5;

    if (numDays > std_days) {
      setSalary(numWages * std_days + (numDays - std_days) * overrate);
    } else {
      setSalary(numWages * numDays);
      //   alert(`your salary is:${salary}`);
    }
  };

  return (
    <div onClick={handleClick}>
      <button className="button-9">Calculate Salary</button>
    </div>
  );
};

export default Button;
