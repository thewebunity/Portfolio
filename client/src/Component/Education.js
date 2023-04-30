import React from 'react'
import '../index.css'

function Education() {
    return (
        <>
            <div className="education-box">
                <h1 className='education-heading special'><span>Academic Journey</span></h1>
            </div>

            <div className=" education-container">
                <div className="image">
                    <img src="./me.jpg" alt="nothing" />
                </div>
                <div className="education">
                    <ul>
                        <li>Primary School </li>
                        <h4 className='p-li'>Oriental Public School Mandideep</h4>
                        <li>High School </li>
                        <h4 className='p-li'>Oriental Public School Mandideep</h4>
                        <li>Higher Secondary School </li>
                        <h4 className='p-li' n>CL Arya Science Higher Secondary Mandideep</h4>
                        <li>Graduation  </li>
                        <h4 className='p-li'>Nri Institute of Research And Technology Bhopal</h4>
                    </ul>
                    <div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Education