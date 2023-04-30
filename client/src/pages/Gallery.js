import React from 'react'
import { useState,useEffect } from 'react'

function Gallery() {
  const [Gallery, setGallery] = useState([])

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    const url = "http://localhost:5000/getgallery";
    const data = await fetch(url);
    const parseddata = await data.json();
    setGallery(parseddata);
    
    // props.setProgress(100);
  }
  return (
   <>
      <div className="gallery-container">
      {Gallery.map((value,index)=>{
        return(
          <div className="card-body" key={index}>
          <img src={value.Images} alt="" className='card-images'/>
          </div>
        )
       })}

     </div>
   </>
  )
}

export default Gallery