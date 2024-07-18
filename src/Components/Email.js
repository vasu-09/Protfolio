import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gjgwihr', 'template_93nfdfe', form.current, {
        publicKey: '-EVtKO7oJKiIR0Q1i',
      })
      .then(
        () => {
            setSubmitted(true);
          setTimeout(() => {
            window.location.reload(); // Reload the page after 2 seconds
          }, 2000);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact"  className="content-wrapper scroll-offset">
    <div className='container'>
        <h2>Contact: </h2>
  <form ref={form} onSubmit={sendEmail} className="p-4 mt-4 border rounded bg-light card-icon">
      <div className="form-group">
        <label className="form-label">Name</label>
        <input type="text" name="from_name" className="form-control" required />
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input type="email" name="from_email" className="form-control" required />
      </div>
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Send</button>
      {submitted && <p className="text-success mt-3">Message delivered!</p>}
    </form>
  </div>
  <style>
        {
            `.content-wrapper {
                margin-top: 150px;
                margin-bottom:150px;
                text-align: left;
            }
            
            .scroll-offset {
            scroll-margin-top: 100px; /* Adjust this value based on the height of your header */
          }

          /* Media Query for Desktop View */
            @media only screen and (min-width: 768px) {
              .card-icon {
                width: 65%;
                
              }
            }

            /* Media Query for Mobile View */
            @media only screen and (max-width: 767px) {
              .card-icon {
                width: 100%;
              }
            }`}</style>
  </section>
  );
};

export default ContactForm;
