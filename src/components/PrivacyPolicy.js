import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Effective date: May 3, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share your information.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal identification info (name, email, phone number, etc.)</li>
          <li>Usage data (pages visited, time spent, etc.)</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the collected data to provide and improve our services, communicate with you, and comply with legal obligations.
        </p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          We use cookies to enhance user experience. You can choose to disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at support@example.com.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
