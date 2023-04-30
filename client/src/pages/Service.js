import React from 'react'
import { useState,useEffect } from 'react'

function Service() {
  const [service, setService] = useState([])

  useEffect(() => {
    getdata();
  }, [])
  const getdata = async () => {
    const url = "http://localhost:5000/getservice";
    const data = await fetch(url);
    const parseddata = await data.json();
    setService(parseddata);
    
    // props.setProgress(100);
  }
  return (
    <>
     <div className="container-service">
     {service.map((value,index)=>{
        return(
          <div className="card-body" key={index}>
          <img src={value.Images} alt="" className='card-images'/>
          <h1>{value.title}</h1>
          <p >{value.description}</p>
          </div>
        )
       })}
     </div>
    </>
  )
}

export default Service