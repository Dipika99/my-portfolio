import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const handleClose = () => {
    setAlert(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setAlert({ type: 'success', message: 'Email sent successfully! Will be contacting you shortly.' });

          form.current?.reset?.();

        },
        (error) => {
          setAlert({ type: 'danger', message: 'Failed to send email: ' + error.text });
        }
      );
  };

  return (
    <>
      <div className="card bg-light1 bg-dark p-4 shadow-lg">
        {alert && (
            <div
                className="toast-container position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 1055 }}
            >
                <div
                className={`toast align-items-center text-bg-${alert.type} border-0 show`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                >
                <div className="d-flex">
                    <div className="toast-body text-white">{alert.message}</div>
                    <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={handleClose}
                    ></button>
                </div>
                </div>
            </div>
            )}

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">Your Name</label>
            <input type="text" autoComplete="off" className="form-control" name="user_name" id="user_name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="user_email" className="form-label">Your Email</label>
            <input type="email" autoComplete="off" className="form-control" name="user_email" id="user_email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea autoComplete="off" className="form-control" id="message" name="message" rows="5" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary text-white">
            <i className="bi bi-send"></i> Send Message
          </button>
        </form>
        
      </div>
    </>
  );
};
