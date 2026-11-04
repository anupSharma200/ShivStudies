import React, { useState } from 'react';
import '../css/contactSupport.css';
import '../css/about.css';

export default function ContactSupport({ user, onNavigate }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('UPSC CSE');
  const [category, setCategory] = useState('Academic Guidance');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>📞 24x7 Academic & Tech Assistance</span>
          </div>
          <h1 className="info-page-title">
            Contact <span>Support</span>
          </h1>
          <p className="info-page-subtitle">
            Need guidance regarding batches, syllabus planning, Mains evaluation, or technical assistance?
            We are here to help you around the clock.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Pane */}
          <div className="contact-info-pane">
            <h2>Reach Our Team Directly</h2>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Whether you are an active student or an aspirant deciding your preparation strategy, speak with our dedicated counselors and tech specialists.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="contact-channel-icon">📞</div>
                <div>
                  <div className="channel-title">Toll-Free Aspirant Helpline</div>
                  <div className="channel-detail">
                    <a href="tel:+9118008897448">+91 1800-889-SHIV (7448)</a>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Available 24x7 · All Days</div>
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">✉️</div>
                <div>
                  <div className="channel-title">Official Email Support</div>
                  <div className="channel-detail">
                    <a href="mailto:support@shivstudies.com">support@shivstudies.com</a>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Response guaranteed within 2 hours</div>
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">💬</div>
                <div>
                  <div className="channel-title">WhatsApp Student Desk</div>
                  <div className="channel-detail">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">+91 98765 43210</a>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Instant response for batch queries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-office-box">
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                📍 Central Administrative Campus
              </div>
              <div>ShivStudies Learning Technologies Pvt. Ltd.</div>
              <div>Civil Lines / Model Town, Ludhiana, Punjab - 141002</div>
              <div style={{ marginTop: '4px', color: 'var(--primary)', fontWeight: 600 }}>Open Mon–Sat: 8:00 AM – 8:00 PM</div>
            </div>
          </div>

          {/* Right Form Pane */}
          <div className="contact-form-pane">
            {submitted ? (
              <div className="contact-success-box">
                <div className="contact-success-icon">✅</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                  Query Dispatched Successfully!
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{name || 'Aspirant'}</strong>. A dedicated academic counselor will review your query and contact you at <strong>{email}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  className="btn-back-home"
                  style={{ marginTop: '0' }}
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>
                <div className="contact-form-subtitle">
                  Fill out this form and our academic team will get back to you promptly.
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group-contact">
                    <label htmlFor="contactName">Your Full Name *</label>
                    <input
                      id="contactName"
                      type="text"
                      className="contact-input"
                      placeholder="e.g. Shiva Kumar Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group-contact">
                      <label htmlFor="contactEmail">Email Address *</label>
                      <input
                        id="contactEmail"
                        type="email"
                        className="contact-input"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group-contact">
                      <label htmlFor="contactPhone">Mobile Number</label>
                      <input
                        id="contactPhone"
                        type="tel"
                        className="contact-input"
                        placeholder="+91 98765 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group-contact">
                      <label htmlFor="contactGoal">Target Goal</label>
                      <select
                        id="contactGoal"
                        className="contact-select"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                      >
                        <option value="UPSC CSE">UPSC Civil Services (IAS/IPS)</option>
                        <option value="UPPSC">UPPSC (Uttar Pradesh PCS)</option>
                        <option value="BPSC">BPSC (Bihar PCS)</option>
                        <option value="MPPSC">MPPSC (Madhya Pradesh PCS)</option>
                        <option value="RAS/RPSC">RAS / RPSC (Rajasthan PCS)</option>
                        <option value="State Govt">State SI & Police Exams</option>
                      </select>
                    </div>

                    <div className="form-group-contact">
                      <label htmlFor="contactCategory">Query Topic</label>
                      <select
                        id="contactCategory"
                        className="contact-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="Academic Guidance">Academic Guidance & Batch Selection</option>
                        <option value="Mains Answer Evaluation">Mains Answer Writing Evaluation</option>
                        <option value="Technical Support">App / Video Stream Support</option>
                        <option value="Mentor Booking">1-on-1 Officer Mentorship Booking</option>
                        <option value="Fee / Enrollment">Enrollment & Payment Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-contact">
                    <label htmlFor="contactMessage">How can we assist you? *</label>
                    <textarea
                      id="contactMessage"
                      className="contact-textarea"
                      placeholder="Please share details about your target exam year, subject questions, or how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-contact-submit">
                    Send Message to Academic Desk →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Back Link */}
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
  );
}
