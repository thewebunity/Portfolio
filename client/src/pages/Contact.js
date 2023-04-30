import React from 'react'
import '../index.css'
import { useState } from 'react'

function Contact() {
    const [Contact, setContact] = useState({})
  

    const handleChange = (e) => {
     setContact({...Contact,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) =>{
    e.preventDefault();

    const res = await fetch("/contact", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Contact),
    })
    let response = await res.json();
   
        if(response.success === true){
            window.alert("Request Submitted Successfully")
            setContact()
        }else{
            window.alert("Server Error")
        }
    }
    return (
        <>
            <div className="contact-container">
                {/* <h2 className='contact-head'>Connect With Us</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptas quam nostrum distinctio eveniet sunt natus adipisci delectus. </p> */}

                <div className="contact-box">

                    <div className="contact-left">
                        <h2>Send your request</h2>
                        <form action="">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="Vishal Kumar" id="name" name='name' value={Contact.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" placeholder="+91 5656454556" id="phone" maxLength="13"
                                        name='phone'
                                        value={Contact.phone}
                                        onChange={handleChange}

                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder="vishalkumar@gmail.com" id="email" name='email' value={Contact.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" placeholder="Product Demo" id="subject" name='subject' value={Contact.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" placeholder="Leave Your Comment Here" id="message" rows="10" value={Contact.message}
                                onChange={handleChange} 
                            ></textarea>
                            <button className="btn" onClick={handleSubmit}>Send</button>

                        </form>

                    </div>


                    <div className="contact-right">
                        <h2>Reach Me</h2>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>Vishal Kumar Kushwaha</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>+91 8517014691</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>Vishalkumar5060@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>Ward no 9 Ram Nagar <br /> Mangal Market Mandideep  <br />Bhopal MP (462046)
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Contact


