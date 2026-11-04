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
            <h3>Get Exam Notifications & Free Daily Current Affairs</h3>
            <p>Receive honest daily current affairs, PYQ analysis, and notification alerts straight to your inbox.</p>
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
                  Civil Services & State PCS
                </span>
              </div>
            </div>
            <p>
              ShivStudies is dedicated to providing high-quality, transparent, and structured preparation for UPSC Civil Services and State PCS examinations through experienced subject mentors and disciplined academic guidance.
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
            <h4
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('goals')}
            >
              Popular Goals
            </h4>
            <ul>
              <li><a href="#goals-upsc" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'upsc-cse'); }}>UPSC Civil Services (IAS / IPS)</a></li>
              <li><a href="#goals-uppsc" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'uppsc'); }}>UPPSC (Uttar Pradesh PCS)</a></li>
              <li><a href="#goals-bpsc" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'bpsc'); }}>BPSC (Bihar PCS)</a></li>
              <li><a href="#goals-mppsc" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'mppsc'); }}>MPPSC (Madhya Pradesh PCS)</a></li>
              <li><a href="#goals-ras" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'ras-rpsc'); }}>RAS / RPSC (Rajasthan PCS)</a></li>
              <li><a href="#goals-state" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('goals', 'state-govt'); }}>State SI & Police Exams</a></li>
            </ul>
          </div>

          {/* Study Material */}
          <div className="footer-column">
            <h4
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('study-material')}
            >
              Study Material
            </h4>
            <ul>
              <li><a href="#mat-pyq" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'pyq'); }}>UPSC Previous Year Papers (PYQs)</a></li>
              <li><a href="#mat-mains" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'mains'); }}>Daily Mains Answer Writing</a></li>
              <li><a href="#mat-ncert" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'ncert'); }}>NCERT GS Crux Notes</a></li>
              <li><a href="#mat-editorial" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'editorial'); }}>The Hindu & Express Editorial Gist</a></li>
              <li><a href="#mat-yojana" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'yojana'); }}>Yojana & Kurukshetra Summaries</a></li>
              <li><a href="#mat-state" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('study-material', 'state-gk'); }}>State PCS Special GK & Current Affairs</a></li>
            </ul>
          </div>

          {/* Learning Programs */}
          <div className="footer-column">
            <h4
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('programs')}
            >
              Learning Programs
            </h4>
            <ul>
              <li><a href="#prog-plus" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'plus'); }}>ShivStudies Plus Subscription</a></li>
              <li><a href="#prog-iconic" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'iconic'); }}>Iconic 1-on-1 Mentorship</a></li>
              <li><a href="#prog-centers" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'offline'); }}>ShivStudies Offline Centers</a></li>
              <li><a href="#prog-scholarship" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'scholarship'); }}>CSST Civil Services Scholarship</a></li>
              <li><a href="#prog-campus" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'campus'); }}>Campus Ambassador Program</a></li>
              <li><a href="#prog-teach" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('programs', 'teach'); }}>Teach at ShivStudies</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="footer-column">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>About ShivStudies</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>Contact Support (24x7)</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('faq'); }}>Frequently Asked Questions</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('privacy'); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('terms'); }}>Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} ShivStudies Learning Technologies Pvt Ltd. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('privacy'); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('terms'); }}>Terms</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
