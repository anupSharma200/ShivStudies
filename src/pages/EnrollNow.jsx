import React, { useState } from 'react';
import '../css/enrollNow.css';

export default function EnrollNow({
  course,
  user,
  onNavigate,
}) {
  // Course details with fallback defaults matching UPSC & State exams
  const currentCourse = course || {
    title: 'Samarthya UPSC CSE 2026/27: Complete GS Foundation (Prelims + Mains)',
    duration: '18 months',
    mode: 'Online Live + Mentorship',
    nextBatch: '15 Nov 2026',
    price: '₹ 24,999',
  };

  // Form states
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Ludhiana');
  const [qualification, setQualification] = useState('');
  const [mode, setMode] = useState('Online');
  const [batchDate, setBatchDate] = useState('10 Nov 2026 – Morning');
  const [agreed, setAgreed] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name as on your ID.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!phone.trim()) {
      setErrorMsg('Please enter your mobile number.');
      return;
    }

    if (!qualification) {
      setErrorMsg('Please select your current qualification.');
      return;
    }

    if (!agreed) {
      setErrorMsg('Please accept the Terms and Privacy Policy to proceed.');
      return;
    }

    // Generate enrollment ID and display modal
    const generatedId = 'SHIV-' + Math.floor(10000 + Math.random() * 90000);
    setEnrollmentId(generatedId);
    setShowModal(true);
  };

  const handleGoToDashboard = () => {
    setShowModal(false);
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="enroll-page-wrapper">
      <div className="enroll-card-container">
        {/* Left Pane: Brand & Course Summary (Indigo) */}
        <div className="enroll-left-pane">
          <div>
            <div className="enroll-brand-tag">
              <span>ShivStudies</span>
            </div>

            <h1 className="enroll-course-title">
              Enroll in {currentCourse.title}
            </h1>

            <p className="enroll-course-desc">
              Takes under 2 minutes. Our counsellor will call you within 24 hours to confirm your batch.
            </p>
          </div>

          {/* Course Snapshot Card */}
          <div className="course-snapshot-card">
            <div className="snapshot-row">
              <span className="snapshot-label">Duration</span>
              <span className="snapshot-value">{currentCourse.duration || '12 months'}</span>
            </div>

            <div className="snapshot-row">
              <span className="snapshot-label">Mode</span>
              <span className="snapshot-value">{currentCourse.mode || 'Online / Classroom'}</span>
            </div>

            <div className="snapshot-row">
              <span className="snapshot-label">Next batch</span>
              <span className="snapshot-value">{currentCourse.nextBatch || '10 Nov 2026'}</span>
            </div>

            <div className="snapshot-divider"></div>

            <div className="snapshot-row fee-row">
              <span className="snapshot-label">Course fee</span>
              <span className="snapshot-value">{currentCourse.price || '₹ 14,999'}</span>
            </div>
          </div>
        </div>

        {/* Right Pane: Student Details Form */}
        <div className="enroll-right-pane">
          <div className="enroll-form-header">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('home')}
              style={{
                fontSize: '0.825rem',
                color: '#64748B',
                marginBottom: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              ← Back to Batches
            </button>
            <h2>Your details</h2>
            <div className="enroll-step-subtitle">
              Step 1 of 2 · Fields marked * are required
            </div>
          </div>

          {errorMsg && (
            <div
              style={{
                backgroundColor: '#FEE2E2',
                border: '1px solid #FECACA',
                color: '#EF4444',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                marginBottom: '16px',
              }}
            >
              ⚠️ {errorMsg}
            </div>
          )}

          <form className="enroll-form" onSubmit={handleEnrollSubmit}>
            <div className="form-grid-2col">
              {/* Full Name */}
              <div className="enroll-field">
                <label htmlFor="fullName">Full name *</label>
                <input
                  id="fullName"
                  type="text"
                  className="enroll-input"
                  placeholder="As on your ID"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="enroll-field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  className="enroll-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="enroll-field">
                <label htmlFor="phone">Mobile number *</label>
                <input
                  id="phone"
                  type="tel"
                  className="enroll-input"
                  placeholder="+91 00000 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* City */}
              <div className="enroll-field">
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  type="text"
                  className="enroll-input"
                  placeholder="Ludhiana"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              {/* Current Qualification */}
              <div className="enroll-field">
                <label htmlFor="qualification">Current qualification *</label>
                <select
                  id="qualification"
                  className="enroll-select"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="Undergraduate (1st / 2nd Year)">Undergraduate (1st / 2nd Year)</option>
                  <option value="Undergraduate (Final Year)">Undergraduate (Final Year)</option>
                  <option value="Graduate (B.A. / B.Sc. / B.Tech / B.Com etc.)">Graduate (Degree Completed)</option>
                  <option value="Postgraduate / Masters">Postgraduate / Masters</option>
                  <option value="Working Professional">Working Professional / Civil Aspirant</option>
                </select>
              </div>

              {/* Preferred Mode */}
              <div className="enroll-field">
                <label htmlFor="preferredMode">Preferred mode *</label>
                <select
                  id="preferredMode"
                  className="enroll-select"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  required
                >
                  <option value="Online">Online</option>
                  <option value="Offline Classroom">Offline Classroom</option>
                  <option value="Hybrid">Hybrid (Online + Offline)</option>
                </select>
              </div>
            </div>

            {/* Preferred Batch / Start Date */}
            <div className="enroll-field">
              <label htmlFor="batchSelect">Preferred batch / start date</label>
              <select
                id="batchSelect"
                className="enroll-select"
                value={batchDate}
                onChange={(e) => setBatchDate(e.target.value)}
              >
                <option value="10 Nov 2026 – Morning">10 Nov 2026 – Morning</option>
                <option value="17 Nov 2026 – Evening">17 Nov 2026 – Evening</option>
                <option value="24 Nov 2026 – Weekend Special">24 Nov 2026 – Weekend Special</option>
                <option value="01 Dec 2026 – FastTrack">01 Dec 2026 – FastTrack</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <div className="terms-row">
              <input
                id="terms"
                type="checkbox"
                className="terms-checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="terms-label">
                I agree to the Terms and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-enroll-submit">
              <span>Enroll Now →</span>
            </button>

            {/* Bottom Caption */}
            <div className="enroll-disclaimer">
              Payment is collected after counsellor confirmation. No charge today.
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal Dialog (Image 2) */}
      {showModal && (
        <div className="modal-backdrop" onClick={handleGoToDashboard}>
          <div
            className="modal-dialog-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Green Checkmark Circle */}
            <div className="modal-check-circle">
              ✓
            </div>

            {/* Title */}
            <h3 className="modal-title">
              You're enrolled, {fullName || 'Student'}!
            </h3>

            {/* Subtitle */}
            <p className="modal-description">
              We've sent a confirmation to {email || 'your email'}. A counsellor will call
              you on {phone || 'your phone number'} within 24 hours.
            </p>

            {/* Gray Detail Box */}
            <div className="modal-detail-box">
              <div className="modal-detail-row">
                <span className="modal-detail-label">Enrollment ID</span>
                <span className="modal-detail-val">{enrollmentId}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Course</span>
                <span className="modal-detail-val">{currentCourse.title}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Batch</span>
                <span className="modal-detail-val">{batchDate}</span>
              </div>
            </div>

            {/* Go to Dashboard Action */}
            <button
              type="button"
              className="btn-modal-dashboard"
              onClick={handleGoToDashboard}
            >
              Go to dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
