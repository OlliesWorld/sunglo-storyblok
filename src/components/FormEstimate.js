import { navigate } from 'gatsby'
import React, { useState } from 'react'



// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const EstimateForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setPhone({ ...phone, [e.target.phone]: e.target.value })
    setDate({ ...date, [e.target.date]: e.target.value })
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
      .then(() => navigate("/ThanksEstimate/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
 <div>
    
    <form data-netlify="true" action="/" name="estimate" method="post" className="flex flex-col mx-auto space-y-4 w-2/5 " onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact-form" />
     
        <input
          name="Name"
          type="text"
          onChange={handleChange}
          required
          placeholder="Name"
          className='Form--Input border-2 border-primary h-10 "'
        />
      
          
              <input className='Form--Input border-2 border-primary h-10 w-72"' type='email' placeholder='Email' name='email' onChange={handleChange} required />
          
              <input className='Form--Input border-2 border-primary h-10 w-72"' type='phone' placeholder='Phone' name='phone'  onChange={handleChange}/>
              <input className='Form--Input border-2 border-primary h-10 w-72"'  type='date' placeholder='Requested Estimate Date' name='date'  />
              <p className='text-primary font-bold text-center text-lg backdrop-blur-sm w-1/2 m-auto'>How Can We Assist You?</p>
              <textarea className='Form--Textarea border-2 border-primary w-full' placeholder='Message' name='message' rows='8'  onChange={handleChange} required />
         
            <div>
              <button className='Button Form--SubmitButton border-2 border-primary bg-primary text-white  w-1/3' type='submit' >Contact Us</button>
            </div>
         
        </form>
        </div>
      
        
    )
}
export default EstimateForm