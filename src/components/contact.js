import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_gx7bxi8', 
        'template_20juu9o',
         form.current, 
         'uQe1N5Vc11m5tZ2yF')
      .then(() => {
          alert('Your Email Successfully sent');
          window.location.reload(false);
      }, () => {
          alert('Error while sending email');
      });
  };

  return (
    <div className="contact-form"id="contact">
    <form ref={form} onSubmit={sendEmail}>
    <b>Contact Me</b>
      <label>Name</label>
      <input type="text" name="from_name" required/>
      <label>Email</label>
      <input type="email" name="email_id" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
    </form>
    </div>
       
  );
};

export default Contact