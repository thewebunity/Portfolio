import React from 'react'
import { useState, useEffect } from 'react';

function Skills() {

  const [Skill, setSkill] = useState([])

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    const url = "http://localhost:5000/getskill";
    const data = await fetch(url);
    const parseddata = await data.json();
    setSkill(parseddata);

    // props.setProgress(100);
  }

  return (
    <>
      <div className="skill-box">
        <h1 className='skill-heading special'><span>Languages & Skills</span></h1>
      </div>
      <div className="skill-container">
        {Skill.map((value, index) => {
          return (
            <div className="card-body" key={index}>
              <img src={value.Images} alt="" className='card-images' />
              <h1>{value.name}</h1>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Skills;