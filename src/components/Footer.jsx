import React, { useState } from 'react';
import '../css/footer.css';

export default function Footer({ onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Newsletter / Exam Alert Banner */}
        <div className="footer-newsletter">
          <div className="newsletter-info">
            <h3>Get Exam Notifications & Free Daily Quizzes</h3>
            <p>Join 1,000,000+ aspirants receiving daily current affairs, PYQs & exam schedules.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              {subscribed ? '✓ Subscribed' : 'Subscribe Free'}
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div
              className="brand-logo"
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('home')}
            >
              <div className="brand-icon">S</div>
              <div className="brand-text">
                <div className="brand-name">
                  Shiv<span>Studies</span>
                </div>
                <span className="brand-tagline" style={{ color: '#64748B' }}>
                  India's Learning Platform
                </span>
              </div>
            </div>
            <p>
              ShivStudies is India's premier online learning platform empowering millions of civil services and
              state exam aspirants to crack UPSC CSE, State PCS, and administrative exams with daily live classes,
              top educators, and personalized test series.
            </p>
            <div className="footer-socials">
              <a href="#youtube" className="social-pill" aria-label="YouTube">▶</a>
              <a href="#telegram" className="social-pill" aria-label="Telegram">✈</a>
              <a href="#twitter" className="social-pill" aria-label="Twitter">𝕏</a>
              <a href="#linkedin" className="social-pill" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Popular Goals */}
          <div className="footer-column">
            <h4>Popular Goals</h4>
            <ul>
              <li><a href="#upsc">UPSC Civil Services (IAS / IPS)</a></li>
              <li><a href="#uppsc">UPPSC (Uttar Pradesh PCS)</a></li>
              <li><a href="#bpsc">BPSC (Bihar PCS)</a></li>
              <li><a href="#mppsc">MPPSC (Madhya Pradesh PCS)</a></li>
              <li><a href="#ras">RAS / RPSC (Rajasthan PCS)</a></li>
              <li><a href="#state-govt">State SI & Police Exams</a></li>
            </ul>
          </div>

          {/* Study Material */}
          <div className="footer-column">
            <h4>Study Material</h4>
            <ul>
              <li><a href="#pyq">UPSC Previous Year Papers (PYQs)</a></li>
              <li><a href="#mock">Daily Mains Answer Writing</a></li>
              <li><a href="#ncert">NCERT GS Crux Notes</a></li>
              <li><a href="#daily">The Hindu & Express Editorial Gist</a></li>
              <li><a href="#yojana">Yojana & Kurukshetra Summaries</a></li>
              <li><a href="#state-gk">State PCS Special GK & Current Affairs</a></li>
            </ul>
          </div>

          {/* Learning Programs */}
          <div className="footer-column">
            <h4>Learning Programs</h4>
            <ul>
              <li><a href="#plus">ShivStudies Plus Subscription</a></li>
              <li><a href="#iconic">Iconic 1-on-1 Mentorship</a></li>
              <li><a href="#centers">ShivStudies Offline Centers</a></li>
              <li><a href="#scholarship">CSST Civil Services Scholarship</a></li>
              <li><a href="#campus">Campus Ambassador Program</a></li>
              <li><a href="#educators">Teach at ShivStudies</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="footer-column">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#about">About ShivStudies</a></li>
              <li><a href="#contact">Contact Support (24x7)</a></li>
              <li><a href="#careers">Careers • We're Hiring!</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} ShivStudies Learning Technologies Pvt Ltd. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#sitemap">Sitemap</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
