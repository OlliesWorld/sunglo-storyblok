import { navigate } from 'gatsby'
import React, { useState } from 'react'

import '../styles/global.css'

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setPhone({ ...phone, [e.target.phone]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/Thanks/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div className="w-half mr-2">
    <a className="bg-primary text-white px-4 py-4 text-center w-1/4 ml-8 md:ml-2" href="tel:9703359600">CALL OR TEXT: (970) 335-9600</a>
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit} className="flex flex-col  space-y-4 ml-6 md:ml-0 w-half">
      <input type="hidden" name="form-name" value="contact-form" />
     
        <input
          name="Name"
          type="text"
          onChange={handleChange}
          required
          placeholder="Name"
          className="Form--Input border-2 border-primary h-10 w-72"
        />
      
          
              <input className='Form--Input border-2 border-primary h-10 w-72' type='email' placeholder='Email' name='email' onChange={handleChange} required />
          
              <input className='Form--Input border-2 border-primary h-10 w-72' type='phone' placeholder='Phone' name='phone'  onChange={handleChange}/>
          
              <p>How Can We Assist You?</p>
              <textarea className='Form--Textarea border-2 border-primary w-72' placeholder='Message' name='message' rows='8' minLength="8" onChange={handleChange} required />
         
            <div>
              <button className='Button Form--SubmitButton border-2 border-primary bg-primary text-white  w-1/3' type='submit' >Contact Us</button>
            </div>
         
        </form>
  
        </div>
    )
}
export default ContactForm

