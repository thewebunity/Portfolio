import React from 'react'
import Certification from '../Component/Certification';
import Achievements from '../Component/Achievements';

function About() {
  return (
    <>
    <div className="about-container">
      <div className="about-pic">
        <img src="./me.jpg" alt="" />
      </div>
      <div className="para">
       <h1 className="about-head">I'm <span className='special'>Vishal Kumar  </span>& <span className='special'>Web Developer</span> </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque, error saepe ducimus maiores exercitationem eius, impedit consectetur, perspiciatis labore placeat deserunt quidem natus. Quod alias, eveniet, accusantium maiores aut inventore eligendi eaque nostrum beatae mollitia dolor, soluta quasi architecto! Perferendis ratione suscipit dolorem quaerat dolore, voluptatem asperiores magnam excepturi et illum cupiditate, id in inventore explicabo sed consequuntur. Expedita sint, sequi earum minima sit nisi est eveniet ipsam, fugit labore quis facere illum magnam tempore optio saepe dolorum quaerat corrupti. Odio quibusdam ab cumque voluptates, dignissimos modi vero corrupti.</p>
       <button className="btn">Download Cv</button>
      </div>
    </div>

    <Certification />
    <Achievements />
    </>
  )
}

export default About