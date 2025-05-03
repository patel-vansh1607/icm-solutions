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

      <div className="contact-bottom">
        <div className="map-cont">
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.823928953264!2d36.82194627500289!3d-1.2920653356347905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10db2191f029%3A0xcef42b2dd9286ed9!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1682248064326!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="hours">
          <h4>Business Hours</h4>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </div>
  );
};
