import React, { useRef } from 'react'
import "./Contact.css"
import wallmart from '../../assets/walmart.png'
import addobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'

import fbicon from '../../assets/facebook-icon.png'
import youtubeicon from '../../assets/youtube.png'
import twitericon from '../../assets/twitter.png'
import igicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ydmuzhf', 'template_7ku9nw8', form.current, 'FzRluRUZ27hZu0lYE')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email Send!")
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className='contatcpagetittle'>my Clients</h1>
        <p className="clientdescription">
          i have the opportunity to work with a diverse group of companies some of the notable companines i have worked woth includes
        </p>
        <div className="clientimgs">

          <img src={wallmart} alt="" className="clientimg" />

          <img src={addobe} alt="" className="clientimg" />

          <img src={microsoft} alt="" className="clientimg" />

          <img src={facebook} alt="" className="clientimg" />


        </div>


      </div>
      <div id="contact">
        <h1 className="contatcpagetittle">Contact Me</h1>
        <span className="contactdescription">Please Fill out thr form to discuss about the work</span>

        <form className='contactform' ref={form} onSubmit={sendEmail} >
          <input type="text" className="name" placeholder='Your name...' required name='from_name' />
          <input type="email" className="email" placeholder='Your Email..' required name='from_email' />
          <textarea name="message" id="" cols="30" rows="5" className="msg" placeholder='Your Mesage'></textarea>

          <button value='send' type='submit' className="submitbtn">Submit</button>

          <div className="links">
            <img src={fbicon} alt="" className="link" />
            <img src={igicon} alt="" className="link" />
            <img src={twitericon} alt="" className="link" />
            <img src={youtubeicon} alt="" className="link" />



          </div>
        </form>
      </div>
    </section>

  )
}

export default Contact