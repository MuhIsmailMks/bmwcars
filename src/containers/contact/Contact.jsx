import React, { useState, useEffect } from 'react';
import { CostumLinesAnimation } from '../../components/HomeComponents';

import './contact.css';

// images
import heroImage from '../../images/bgContactUs.webp';
import locationIcon from '../../icons/locationIcon.svg';
import emailIcon from '../../icons/emailContactIcon.svg';
import phoneIcon from '../../icons/phoneIcon.svg';



function Contact() {
  return ( 
    <div className="contact-container">

       <div className="hero d-center">

          <div className="hero-image">
            <img src={heroImage} alt="" />
          </div>

          <div className="about-page d-center">
            <div className="title">
                <h2> CONTACT <span>US</span></h2>
                <CostumLinesAnimation classContainer={"lines_title"}  width={"100%"}/>
            </div>
            <section className='d-center'>
              <p>Connect with our team for all your car related needs. We are ready to help you with the best information, services and solutions for your vehicle.</p>
            </section>
          </div> 

       </div>

       <div className="contact-information d-center">
 
       {[
        [locationIcon,"Location", `Makassar,  South Sulawesi Indonesian`],
        [phoneIcon,"Phone", ["+1290323","+19238273"]],
        [emailIcon,"Email", ["muhismailmks@gmail.com","computer.nyasar@gmail.com"]], 
       ].map(([icon,aboutContact, info],i) => (
        <div key={i} className="detail-contact d-flex">
           <div className="contact-icon d-flex">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <h4>{aboutContact}</h4>
          </div>
          
          {Array.isArray(info) ? ( info.map((text, num) => <p key={num}>{text}</p>)) : (
            <p>{info}</p>
         )}
        </div>
      ))} 
       </div>
            
       <div className="question-form">
        <h4>Do you have a question, service request, or suggestion? Please fill in the form below</h4>
        <form action="" className='d-flex'>
          <input type="text" placeholder='Name'  required/>
          <input type="text" placeholder='Email'  required/>
          <input type="text" placeholder='Message'  required/>
          <button type='submit'>Submit</button>
        </form>
       </div>
    
    </div>  
  );
}

export default Contact;