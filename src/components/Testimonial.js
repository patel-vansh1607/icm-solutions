import React from "react";
import "../styles/Testimonial.css";


export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Are Growing</h2>
      <p className="subtitle">
        Join thousands of happy gardeners who’ve transformed their spaces with our
        premium seeds.
      </p>
      <div className="testimonial-card">
        <div className="testimonial-text">
          <div className="stars">⭐⭐⭐⭐☆</div>
          <p className="quote">
            “The variety of organic herb seeds is amazing. I’ve created a beautiful kitchen
            garden with everything from basil to cilantro. I couldn’t find it anywhere else.”
          </p>
          <div className="user">
            {/* <img src={} alt="Customer" /> */}
            <div>
              <strong>Emma Rodriguez</strong>
              <span>Denver, CO</span>
            </div>
          </div>
        </div>
        <div className="testimonial-image">
          {/* <img src={} alt="Customer garden" /> */}
        </div>
      </div>
      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
