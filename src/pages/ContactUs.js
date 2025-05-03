import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-top">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            <strong>Phone:</strong> +254 712 345 678
          </p>
          <p>
            <strong>Email:</strong> info@seed.com
          </p>
          <p>
            <strong>Address:</strong> 123 Green Avenue, Nakuru, Kenya
          </p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      

        <div className="hours">
          <h4>Business Hours</h4>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
  );
};
export default ContactUs; 