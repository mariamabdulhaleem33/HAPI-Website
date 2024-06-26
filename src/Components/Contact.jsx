import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import user from "../images/User.png";
import vec from  "../images/Vector (2).png";
import email from "../images/E-mail icon.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const [formState, setFormState] = useState({
    From_Name: '',
    From_Email: '',
    message: '',
});

const changeInputValue = useCallback((e) => {
  const { name, value } = e.target;
  setFormState(prevState => ({
      ...prevState,
      [name]: value
  }));
}, []);

  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#con') {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vllj368', 'template_3e45gbs', form.current, {
        publicKey: 'g2ovYw2PKmbXvMrt_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div class="contact" ref={sectionRef}  id="con">
      <h3>Want To Ask For Something?</h3>
      <h3>We Are Here To Help ..</h3>
      <form ref={form} onSubmit={sendEmail}>
        <h4>Contact Us</h4>
        <div class="name">
          <label>Name</label>
          <div class="name-cont">
            <img src={user} style={{width:"18px" , height:"20px", marginLeft:"7px"}}/>
            <input type="text" name="From_Name" value={formState.From_Name} onChange={changeInputValue} />
          </div>
        </div>
        <div class="email">
          <label>Email</label>
          <div class="email-cont">
          <img src={email} style={{width:"22px" , height:"18px", marginLeft:"5px"}}/>
            <input type="email" name="From_Email" value={formState.From_Email} onChange={changeInputValue} />
          </div>
        </div>
        <div class="message">
          <label>Message</label>
          <div class="message-cont">
            <textarea name="message" value={formState.message} onChange={changeInputValue}/>
          </div>
        </div>
        <div class="send">
          <input type="submit" value="Send" />
          <img src={vec}/>
        </div>
      </form>
    </div>
  );
};      
export default ContactUs;