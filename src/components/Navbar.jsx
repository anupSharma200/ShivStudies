import React, { useState } from 'react';
import '../css/navbar.css';

const EXAM_GOALS = [
  { id: 'upsc-cse', label: 'UPSC CSE', icon: '🏛️', sub: 'IAS / IPS / IFS' },
  { id: 'uppsc', label: 'UPPSC (PCS)', icon: '📜', sub: 'UP State Civil Services' },
  { id: 'bpsc', label: 'BPSC (Bihar PCS)', icon: '📖', sub: 'Bihar Public Service' },
  { id: 'mppsc', label: 'MPPSC (MP PCS)', icon: '🎯', sub: 'Madhya Pradesh PCS' },
  { id: 'ras-rpsc', label: 'RAS / RPSC', icon: '⚔️', sub: 'Rajasthan Admin Services' },
  { id: 'state-govt', label: 'State Govt & Police', icon: '👮', sub: 'SI, Patwari & Secretariat' },
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
        <span>🏛️ ShivStudies Civil Services Scholarship Test (CSST) - Up to 90% Scholarship on UPSC & State PCS!</span>
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

      {/* Mobile Drawer Navigation (Interactive for Phones & Tablets) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div
                className="brand-logo"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('home');
                }}
              >
                <div className="brand-icon">S</div>
                <div className="brand-text">
                  <div className="brand-name">
                    Shiv<span>Studies</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Mobile User Profile or Auth */}
            {user ? (
              <div className="mobile-user-card">
                <div className="user-avatar" style={{ width: '42px', height: '42px', fontSize: '1.05rem' }}>
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.925rem' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 700, marginTop: '2px' }}>
                    🎯 {currentGoalObj.label}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mobile-auth-btns">
                <button
                  type="button"
                  className="btn-login"
                  style={{ width: '100%', textAlign: 'center' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigate) onNavigate('login');
                  }}
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="btn-register"
                  style={{ width: '100%', textAlign: 'center' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigate) onNavigate('login');
                  }}
                >
                  Join For Free
                </button>
              </div>
            )}

            {/* Target Goal Picker */}
            <div className="mobile-section-heading">Target Goal</div>
            <div className="mobile-goal-grid">
              {EXAM_GOALS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`mobile-goal-chip ${selectedGoal === g.id ? 'active' : ''}`}
                  onClick={() => {
                    handleGoalSelect(g);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span>{g.icon}</span>
                  <span>{g.label}</span>
                </button>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="mobile-section-heading">Menu</div>
            <div className="mobile-nav-links">
              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('home');
                }}
              >
                <span>🏠</span> Explore Platform
              </button>
              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('batches-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <span>📚</span> Live Batches
              </button>
              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('educators-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <span>👨‍🏫</span> Top Educators
              </button>
              {user && (
                <button
                  type="button"
                  className="mobile-nav-item logout"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onLogout) onLogout();
                  }}
                >
                  <span>🚪</span> Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
