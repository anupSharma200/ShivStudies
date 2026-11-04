import React from 'react';
import '../css/privacyPolicy.css';

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <div className="legal-page-wrapper">
      <div className="container">
        <div className="legal-card">
          <div className="legal-header">
            <span className="legal-tag">Transparency & Trust</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-meta">
              Effective Date: November 1, 2026 · Last Updated: November 2026
            </div>
          </div>

          <div className="legal-section">
            <h3>1. Introduction</h3>
            <p>
              ShivStudies Learning Technologies Pvt. Ltd. ("ShivStudies", "we", "our", or "us") is dedicated to safeguarding the privacy and personal data of aspirants preparing for UPSC Civil Services and State Public Service examinations.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your information when you access our web application, attend live lectures, submit answers, or contact our mentors.
            </p>
          </div>

          <div className="legal-section">
            <h3>2. Information We Collect</h3>
            <p>To provide high-quality academic services, we collect:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, mobile number, and target exam goal (e.g., UPSC CSE, UPPSC, BPSC).</li>
              <li><strong>Academic Submissions:</strong> Daily Mains handwritten answer scripts uploaded for evaluation, Prelims test responses, and doubt inquiries.</li>
              <li><strong>Payment & Billing Data:</strong> Transaction reference IDs and order records (all sensitive payment gateway information is processed by PCI-DSS certified payment partners).</li>
              <li><strong>Technical Logs:</strong> Device details, browser version, and IP addresses to maintain session security and prevent account sharing.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h3>3. How We Use Your Information</h3>
            <p>We use your personal data strictly for educational purposes:</p>
            <ul>
              <li>Delivering live classes, syllabus modules, and course schedules.</li>
              <li>Providing detailed, individualized mentor feedback on your Mains answer writing.</li>
              <li>Generating objective Prelims test analytics and progress reports.</li>
              <li>Sending crucial exam notifications, syllabus revisions, and admit card alerts.</li>
            </ul>
            <p>
              <strong>We never sell, rent, or trade your personal information to third-party advertisers.</strong>
            </p>
          </div>

          <div className="legal-section">
            <h3>4. Data Security & Storage</h3>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest) to safeguard your account credentials and academic work against unauthorized access, loss, or disclosure.
            </p>
          </div>

          <div className="legal-section">
            <h3>5. Your Rights as a Student</h3>
            <p>You have full autonomy over your personal data:</p>
            <ul>
              <li>The right to access and download your answer evaluations and study history.</li>
              <li>The right to correct inaccurate account details at any time from your profile.</li>
              <li>The right to request permanent deletion of your account and associated records.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h3>6. Contact Our Grievance Officer</h3>
            <div className="legal-contact-box">
              <p><strong>Grievance & Data Privacy Officer:</strong></p>
              <p>ShivStudies Learning Technologies Pvt. Ltd.</p>
              <p>Email: <a href="mailto:privacy@shivstudies.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>privacy@shivstudies.com</a></p>
              <p>Address: Central Academic Desk, Model Town, Ludhiana, Punjab, India</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              type="button"
              className="btn-back-home"
              onClick={() => onNavigate && onNavigate('home')}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
