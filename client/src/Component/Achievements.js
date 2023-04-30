import React from 'react'
import { useState ,useEffect} from 'react';

function Achievements() {
    const [service, setService] = useState([])

    useEffect(() => {
      getdata();
    }, [])
    const getdata = async () => {
      const url = "http://localhost:5000/getAcheivements";
      const data = await fetch(url);
      const parseddata = await data.json();
      setService(parseddata);
      
      // props.setProgress(100);
    }
  return (
    <>

    <div className="acheive-box">
      <h1 className='special'>Acheivements</h1>
      <div className="container-acheive">
     {service.map((value,index)=>{
        return(
          <div className="card-body" key={index}>
          <img src={value.Images} alt="" className='card-images'/>
          {/* <h1>{value.Name}</h1>
          <p >{value.description}</p> */}
          </div>
        )
       })}
     </div>

    </div>
    </>
  )
}

export default Achievements