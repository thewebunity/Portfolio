import React from "react";
import { useState, useEffect } from "react";

function Project() {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const url = "http://localhost:5000/getproject";
    const data = await fetch(url);
    const parseddata = await data.json();
    setProject(parseddata);

    // props.setProgress(100);
  };
  return (
    <>
      <div className="skill-box">
        <h1 className="skill-heading special">
          <span>Projects</span>
        </h1>
      </div>
      <div className="project-container">
        {Project.map((value, index) => {
          return (
            <div className="card-body" key={index}>
              <img src={value.Images} alt="" className="card-images" />
              <p>{value.name}</p>
              <a href={value.link} className="btn">
                Visit
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Project;
