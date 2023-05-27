import React from "react";
import "../index.css";

function Education() {
  return (
    <>
      <div className="education-box">
        <h1 className="education-heading special">
          <span>Academic Journey</span>
        </h1>
      </div>

      <div className=" education-container">
        <div className="image">
          <img src="./me.jpg" alt="nothing" />
        </div>
        <div className="education">
          <ul>
            <li>Primary School </li>
            <p className="p-li">Oriental Public School Mandideep</p>
            <li>High School </li>
            <p className="p-li">Oriental Public School Mandideep</p>
            <li>Higher Secondary School </li>
            <p className="p-li" n>
              CL Arya Science Higher Secondary Mandideep
            </p>
            <li>Graduation </li>
            <p className="p-li">
              Nri Institute of Research And Technology Bhopal
            </p>
          </ul>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Education;
