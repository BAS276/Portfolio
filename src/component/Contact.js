import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Ensure this file exists and contains necessary styles

export const Contact = () => {
    const form = useRef(); // Reference to the form
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    // Email sending function
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission

        emailjs
            .sendForm('service_ywi38p8', 'template_td17iut', form.current, 'HGzE584ZLAMqdYFxa') // Send email
            .then(
                () => {
                    setSuccessMessage('Email successfully sent!'); // Set success message
                    setErrorMessage(''); // Clear any previous error messages
                    form.current.reset(); // Reset form after submission
                },
                (error) => {
                    console.log('FAILED...', error.text); // Log error to console
                    setErrorMessage('There was an error sending your message. Please try again later.'); // Set error message
                    setSuccessMessage(''); // Clear any previous success messages
                },
            );
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to discuss a project, feel free to reach out!</p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user_name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="user_email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </section>
    );
};

export default Contact;
