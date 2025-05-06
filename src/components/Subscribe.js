import React from 'react';
import '../styles/SubscribeSection.css';

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-left">
        <h2>Grow With Us</h2>
        <p>
          Join our community of gardeners and receive seasonal planting guides,
          exclusive offers, and expert growing tips.
        </p>
        <form className="subscribe-form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="your@email.com" />
          <button type="submit">Subscribe for Growing Tips</button>
          <p className="disclaimer">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </form>
      </div>
      <div className="subscribe-right">
        <div className="testimonial">
          <p className="quote">
            “Our monthly newsletter helped me know exactly when to plant for my zone. My garden has never looked better!”
          </p>
          <p className="author">— Jamie L., Zone, NY</p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
