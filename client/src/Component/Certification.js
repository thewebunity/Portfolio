import React from 'react'
import { useState,useEffect } from 'react';

function Certification() {
    const [service, setService] = useState([])

    useEffect(() => {
      getdata();
    }, [])
    const getdata = async () => {
      const url = "http://localhost:5000/getCertification";
      const data = await fetch(url);
      const parseddata = await data.json();
      setService(parseddata);
      
      // props.setProgress(100);
    }
  return (
    <>
    <div className="certify-box">
   <h1 className="special">Certification</h1>
    <div className="container-certify">
     {service.map((value,index)=>{
        return(
          <div className="card-body" key={index}>
          <img src={value.Images} alt="" className='card-images'/>
          <h2>{value.name}</h2>
          {/* <p >{value.description}</p> */}
          </div>
        )
       })}
     </div>
    </div>
    </>
  )
}

export default Certification