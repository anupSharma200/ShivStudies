import React, { useState } from 'react';
import '../css/navbar.css';

const EXAM_GOALS = [
  { id: 'iit-jee', label: 'IIT JEE', icon: '⚛️', sub: 'Mains & Advanced' },
  { id: 'neet-ug', label: 'NEET UG', icon: '🩺', sub: 'Medical Entrance' },
  { id: 'upsc-cse', label: 'UPSC CSE', icon: '🏛️', sub: 'IAS / IPS / IFS' },
  { id: 'ssc-bank', label: 'SSC & Banking', icon: '💼', sub: 'CGL, CHSL, IBPS' },
  { id: 'cbse-12', label: 'CBSE Class 12', icon: '📚', sub: 'Board Exams' },
  { id: 'coding-tech', label: 'Coding & Tech', icon: '💻', sub: 'Full Stack & AI' },
];

export default function Navbar({
  user,
  onNavigate,
  currentPage,
  selectedGoal,
  onSelectGoal,
  onLogout,
}) {
  const [goalMenuOpen, setGoalMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentGoalObj = EXAM_GOALS.find((g) => g.id === selectedGoal) || EXAM_GOALS[0];

  const handleGoalSelect = (goal) => {
    onSelectGoal(goal.id);
    setGoalMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement">
        <span className="badge">New</span>
        <span>🚀 ShivStudies National Scholarship Admission Test (SNSAT) - Win up to 90% Scholarship!</span>
        <button
          className="banner-link"
          onClick={() => {
            if (onNavigate) onNavigate('home');
            setTimeout(() => {
              const el = document.getElementById('batches-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Register for Free →
        </button>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container">
          <div className="navbar">
            {/* Left: Brand Logo & Goal Dropdown */}
            <div className="nav-left">
              <div
                className="brand-logo"
                onClick={() => onNavigate && onNavigate('home')}
                role="button"
                tabIndex={0}
              >
                <div className="brand-icon">
                  <span>S</span>
                </div>
                <div className="brand-text">
                  <div className="brand-name">
                    Shiv<span>Studies</span>
                  </div>
                  <span className="brand-tagline">Learn • Practice • Crack</span>
                </div>
              </div>

              {/* Goal Selector */}
              <div className="goal-selector">
                <button
                  type="button"
                  className="goal-btn"
                  onClick={() => {
                    setGoalMenuOpen(!goalMenuOpen);
                    setUserMenuOpen(false);
                  }}
                >
                  <span>{currentGoalObj.icon}</span>
                  <span>{currentGoalObj.label}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {goalMenuOpen && (
                  <div className="goal-dropdown">
                    <div className="goal-dropdown-title">Select Target Goal</div>
                    {EXAM_GOALS.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        className={`goal-item ${selectedGoal === g.id ? 'active' : ''}`}
                        onClick={() => handleGoalSelect(g)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{g.icon}</span>
                          <span>{g.label}</span>
                        </span>
                        {selectedGoal === g.id && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center: Search Bar */}
            <div className="nav-center">
              <div className="search-box">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search courses, top educators, test series..."
                />
              </div>
            </div>

            {/* Right: Nav Links & Auth */}
            <div className="nav-right">
              <nav className="nav-links">
                <button
                  type="button"
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => onNavigate && onNavigate('home')}
                >
                  Explore
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    if (onNavigate) onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('batches-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Batches
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    if (onNavigate) onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('educators-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Educators
                </button>
              </nav>

              {user ? (
                /* User logged in */
                <div className="user-menu-wrapper">
                  <button
                    type="button"
                    className="user-profile-btn"
                    onClick={() => {
                      setUserMenuOpen(!userMenuOpen);
                      setGoalMenuOpen(false);
                    }}
                  >
                    <div className="user-avatar">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="user-details">
                      <span className="user-name">{user.name || 'Student'}</span>
                      <span className="user-role">{currentGoalObj.label}</span>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {userMenuOpen && (
                    <div className="user-dropdown">
                      <div className="user-dropdown-header">
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {user.name || 'Student'}
                        </div>
                        <div className="email">{user.email}</div>
                      </div>
                      <button
                        type="button"
                        className="user-dropdown-item"
                        onClick={() => {
                          setUserMenuOpen(false);
                          alert(`Welcome to your learning dashboard for ${currentGoalObj.label}!`);
                        }}
                      >
                        <span>📖</span> My Learning
                      </button>
                      <button
                        type="button"
                        className="user-dropdown-item"
                        onClick={() => {
                          setUserMenuOpen(false);
                          alert('Test Series: 4 mock tests scheduled this week.');
                        }}
                      >
                        <span>📊</span> Test Series & Analytics
                      </button>
                      <button
                        type="button"
                        className="user-dropdown-item logout"
                        onClick={() => {
                          setUserMenuOpen(false);
                          if (onLogout) onLogout();
                        }}
                      >
                        <span>🚪</span> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* User not logged in */
                <div className="auth-actions">
                  <button
                    type="button"
                    className="btn-login"
                    onClick={() => onNavigate && onNavigate('login')}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    className="btn-register"
                    onClick={() => onNavigate && onNavigate('login')}
                  >
                    Join For Free
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
