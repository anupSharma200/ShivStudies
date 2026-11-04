import React, { useState } from 'react';
import '../css/login.css';
import backIcon from '../assets/back.png';

export default function Login({ onLoginSuccess, onNavigate, defaultGoal = 'upsc-cse' }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('aspirant@shivstudies.com');
  const [password, setPassword] = useState('123456');
  const [fullName, setFullName] = useState('');
  const [goal, setGoal] = useState(defaultGoal);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Quick autofill demo credentials for testing
  const handleAutofillDemo = () => {
    setEmail('aspirant@shivstudies.com');
    setPassword('ShivStudies@2026');
    if (authMode === 'signup') {
      setFullName('Shiva Kumar Sharma');
    }
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    if (authMode === 'signup' && !fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    setIsLoading(true);

    // Simulate authentication API call
    setTimeout(() => {
      setIsLoading(false);

      const resolvedName = authMode === 'signup'
        ? fullName.trim()
        : (email.split('@')[0].replace(/[._]/g, ' ') || 'Student');

      // Capitalize name
      const formattedName = resolvedName
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      const userData = {
        name: formattedName,
        email: email.trim(),
        goal: goal,
        rememberMe: rememberMe,
        token: 'shiv_auth_' + Date.now(),
      };

      if (rememberMe) {
        try {
          localStorage.setItem('shivstudies_user', JSON.stringify(userData));
        } catch {
          // localStorage fallback
        }
      }

      if (onLoginSuccess) {
        onLoginSuccess(userData);
      }
    }, 700);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const demoUser = {
        name: `${provider} Aspirant`,
        email: `aspirant.${provider.toLowerCase()}@shivstudies.com`,
        goal: goal,
        token: 'shiv_social_' + Date.now(),
      };
      if (onLoginSuccess) {
        onLoginSuccess(demoUser);
      }
    }, 600);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        {/* Left Side: Brand Highlights & Social Proof */}
        <div className="auth-brand-pane">
          <div className="auth-brand-top">
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
                <span className="brand-tagline" style={{ color: '#A7F3D0' }}>
                  Civil Services Prep
                </span>
              </div>
            </div>

            <h2>
              Begin Your Journey to <span>Serve the Nation</span>
            </h2>
            <p>
              Founded by experienced educators and civil services mentors to give every dedicated aspirant honest, disciplined, and rigorous preparation for UPSC CSE and State PCS.
            </p>

            {/* Feature List */}
            <div className="auth-features-list">
              <div className="auth-feature-item">
                <div className="auth-feature-icon">✓</div>
                <span>Daily Mains answer writing evaluation with mentor feedback</span>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">✓</div>
                <span>Full-length Prelims test series with UPSC/PCS negative marking</span>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">✓</div>
                <span>Daily The Hindu editorial analysis & monthly Yojana/Kurukshetra gist</span>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">✓</div>
                <span>1-on-1 personalized academic mentorship with experienced mentors</span>
              </div>
            </div>
          </div>

          {/* Inspiring Mission Highlight */}
          <div className="auth-social-proof">
            <div className="student-avatar-stack" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🇮🇳
            </div>
            <p>
              <strong>"Satyameva Jayate"</strong> — Dedicated to honest mentorship, disciplined rigor, and ethical excellence from Day 1.
            </p>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="auth-form-pane">
          {/* Header */}
          <div className="auth-header">
            <button
              type="button"
              className="btn-back-img"
              onClick={() => onNavigate && onNavigate('home')}
              aria-label="Back"
              title="Back"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                marginBottom: '14px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <img
                src={backIcon}
                alt="Back"
                style={{ width: '28px', height: '28px', objectFit: 'contain' }}
              />
            </button>
            <h1>{authMode === 'login' ? 'Welcome Back!' : 'Start Learning Free'}</h1>
            <p>
              {authMode === 'login'
                ? 'Login with your registered email and password to access your courses.'
                : 'Create your free ShivStudies account and unlock live classes.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
              onClick={() => {
                setAuthMode('login');
                setErrorMsg('');
              }}
            >
              Log In
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'signup' ? 'active' : ''}`}
              onClick={() => {
                setAuthMode('signup');
                setErrorMsg('');
              }}
            >
              Create Account
            </button>
          </div>

          {/* Demo Helper Banner */}
          <div className="demo-pill-helper">
            <span>⚡ Need quick test credentials?</span>
            <button type="button" className="demo-fill-btn" onClick={handleAutofillDemo}>
              Auto-fill Demo
            </button>
          </div>

          {/* Error Alert */}
          {errorMsg && (
            <div className="auth-error-alert">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Main Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            {authMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-with-icon">
                  <span className="input-icon-left">👤</span>
                  <input
                    id="fullName"
                    type="text"
                    className="auth-input"
                    placeholder="e.g. Shiv Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <span className="input-icon-left">✉️</span>
                <input
                  id="email"
                  type="email"
                  className="auth-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Target Goal (in signup mode) */}
            {authMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="goalSelect">Your Target Exam Goal</label>
                <div className="input-with-icon">
                  <span className="input-icon-left">🎯</span>
                  <select
                    id="goalSelect"
                    className="auth-select"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    <option value="upsc-cse">UPSC Civil Services (IAS / IPS)</option>
                    <option value="uppsc">UPPSC (Uttar Pradesh PCS)</option>
                    <option value="bpsc">BPSC (Bihar Public Service)</option>
                    <option value="mppsc">MPPSC (Madhya Pradesh PCS)</option>
                    <option value="ras-rpsc">RAS / RPSC (Rajasthan PCS)</option>
                    <option value="state-govt">State Government & Police Exams</option>
                  </select>
                </div>
              </div>
            )}

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                <span>Password</span>
                {authMode === 'login' && (
                  <span
                    className="forgot-pass-link"
                    onClick={() =>
                      alert('Password reset link has been dispatched to your email address.')
                    }
                  >
                    Forgot password?
                  </span>
                )}
              </label>
              <div className="input-with-icon">
                <span className="input-icon-left">🔒</span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input has-toggle"
                  placeholder="Enter your password (min 6 chars)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={authMode === 'login' ? 'current-password' : 'new-password'}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="form-options-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me on this browser</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-auth-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Verifying credentials...</span>
              ) : authMode === 'login' ? (
                <>
                  <span>Log In to ShivStudies</span>
                  <span>→</span>
                </>
              ) : (
                <>
                  <span>Create Account & Start Learning</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          {/* Social Auth Divider */}
          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          {/* Social Auth Buttons */}
          <div className="social-auth-grid">
            <button
              type="button"
              className="btn-social-auth"
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="btn-social-auth"
              onClick={() => {
                alert('This feature will be added later.');
              }}
              disabled={isLoading}
            >
              <span>📱</span>
              <span>Mobile OTP</span>
            </button>
          </div>

          {/* Switch Mode Prompt */}
          <div className="auth-switch-prompt">
            {authMode === 'login' ? (
              <>
                New to ShivStudies?
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signup');
                    setErrorMsg('');
                  }}
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setErrorMsg('');
                  }}
                >
                  Log in here
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
