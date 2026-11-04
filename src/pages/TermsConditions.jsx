import React from 'react';
import '../css/termsConditions.css';

export default function TermsConditions({ onNavigate }) {
  return (
    <div className="legal-page-wrapper">
      <div className="container">
        <div className="legal-card">
          <div className="legal-header">
            <span className="legal-tag">Academic Agreement</span>
            <h1 className="legal-title">Terms & Conditions</h1>
            <div className="legal-meta">
              Effective Date: November 1, 2026 · Last Updated: November 2026
            </div>
          </div>

          <div className="terms-highlight-box">
            📌 <strong>Summary for Civil Services Aspirants:</strong> ShivStudies is an academic preparation platform. We expect all students to maintain academic integrity, avoid recording or unauthorized distribution of proprietary lectures, and respect mentors and fellow aspirants.
          </div>

          <div className="legal-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By creating an account, enrolling in a batch, or using the ShivStudies platform, you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy.
            </p>
          </div>

          <div className="legal-section">
            <h3>2. User Account & Fair Use Policy</h3>
            <p>
              Each student subscription is strictly single-user. You are responsible for maintaining the confidentiality of your login credentials. Sharing accounts, concurrent logins across unauthorized devices, or redistributing live lecture streams will result in immediate suspension without refund.
            </p>
          </div>

          <div className="legal-section">
            <h3>3. Academic Integrity & Conduct</h3>
            <p>
              During live discussions, doubt rooms, and answer writing forums, students must maintain civil and decorous conduct. Harassment, derogatory language, or political polarization will not be tolerated.
            </p>
          </div>

          <div className="legal-section">
            <h3>4. Course Enrollment & Fees</h3>
            <p>
              All fees for ShivStudies Plus, Foundation Batches, and Mentorship programs are clearly published with applicable taxes. To ensure complete clarity, our academic counsellors speak directly with candidates before final payment to confirm batch timings, language medium, and optional subject alignment.
            </p>
          </div>

          <div className="legal-section">
            <h3>5. Intellectual Property</h3>
            <p>
              All curriculum designs, study notes, Mains model answers, lecture recordings, and question banks provided by ShivStudies are the exclusive intellectual property of ShivStudies Learning Technologies Pvt. Ltd. No part of these materials may be copied, reproduced, or commercialized without prior written consent.
            </p>
          </div>

          <div className="legal-section">
            <h3>6. Limitation of Liability</h3>
            <p>
              While our curriculum and mentors provide the highest standard of preparation, competitive exams like UPSC CSE and State PCS are conducted independently by government constitutional bodies. ShivStudies does not guarantee selection, appointment, or specific exam scores.
            </p>
          </div>

          <div className="legal-section">
            <h3>7. Legal Jurisdiction & Contact</h3>
            <p>
              These terms are governed by the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Ludhiana / Punjab.
            </p>
            <div className="legal-contact-box">
              <p>For legal queries: <a href="mailto:legal@shivstudies.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>legal@shivstudies.com</a></p>
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
