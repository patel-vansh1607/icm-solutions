// src/components/CookiesPolicy.js
import React from 'react';
import '../styles/CookiesPolicy.css';

const CookiesPolicy = () => {
  return (
    <div className="cookies-container">
      <h1>Cookies Policy</h1>
      <p>Last updated: May 3, 2025</p>

      <section>
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your web browser. They help us understand user behavior and improve your experience.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <ul>
          <li>To analyze traffic and user interactions</li>
          <li>To remember user preferences and settings</li>
          <li>To improve overall performance and functionality</li>
        </ul>
      </section>

      <section>
        <h2>3. Your Choices</h2>
        <p>
          You can manage or disable cookies through your browser settings. Note that disabling cookies may affect some functionalities.
        </p>
      </section>

      <section>
        <h2>4. Changes to This Policy</h2>
        <p>
          We may update our cookies policy occasionally. We recommend reviewing it periodically.
        </p>
      </section>

      <section>
        <h2>5. Contact Us</h2>
        <p>If you have questions, email us at support@example.com.</p>
      </section>
    </div>
  );
};

export default CookiesPolicy;
