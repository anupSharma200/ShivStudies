import React, { useState } from 'react';
import '../css/home.css';

const EXAM_GOALS = [
  {
    id: 'upsc-cse',
    title: 'UPSC CSE',
    subtitle: 'IAS, IPS, IFS & Central Services',
    icon: '🏛️',
    courses: 'Prelims + Mains + Interview',
    highlight: 'Comprehensive GS 1-4 & CSAT',
    motto: 'Integrity, Vision & Public Service',
    color: '#08BD80',
  },
  {
    id: 'uppsc',
    title: 'UPPSC (PCS)',
    subtitle: 'SDM, DSP & UP State Services',
    icon: '📜',
    courses: 'Pre + Mains Integrated',
    highlight: 'UP Special GK (Papers 5 & 6)',
    motto: 'Excellence in State Administration',
    color: '#3B82F6',
  },
  {
    id: 'bpsc',
    title: 'BPSC (Bihar PCS)',
    subtitle: '70th & 71st Combined Exam',
    icon: '📖',
    courses: 'Complete Syllabus Coverage',
    highlight: 'Bihar History, Economy & Polity',
    motto: 'Empowering Administrative Leadership',
    color: '#F59E0B',
  },
  {
    id: 'mppsc',
    title: 'MPPSC (State PCS)',
    subtitle: 'Deputy Collector, DSP & Excise',
    icon: '🎯',
    courses: 'Foundation & Answer Writing',
    highlight: 'Madhya Pradesh Specific Modules',
    motto: 'Devoted to Transparent Governance',
    color: '#8B5CF6',
  },
  {
    id: 'ras-rpsc',
    title: 'RAS / RPSC',
    subtitle: 'Rajasthan Administrative Service',
    icon: '⚔️',
    courses: 'General Studies & Regional Focus',
    highlight: 'Rajasthan Heritage & Administration',
    motto: 'Service with Dignity & Honour',
    color: '#EC4899',
  },
  {
    id: 'state-govt',
    title: 'State Govt & Police',
    subtitle: 'Sub-Inspector, Patwari & Secretariat',
    icon: '👮',
    courses: 'Rigorous Test Drills & Notes',
    highlight: 'Aptitude, Law & General Awareness',
    motto: 'Commitment to Law & Public Duty',
    color: '#10B981',
  },
];

const EDUCATORS = [
  {
    id: 1,
    name: 'V. K. Rathore (Ex-IRS)',
    subject: 'Indian Polity, Governance & Ethics (GS Paper 4)',
    credentials: 'Ex-Civil Servant • Indian Revenue Service (IRS)',
    initial: 'VR',
    domain: 'GS Paper 2 & 4',
    approach: 'Constitutional Core & Case Studies',
    initialFollowed: true,
  },
  {
    id: 2,
    name: 'Dr. Shiva Kumar',
    subject: 'Modern Indian History & International Relations',
    credentials: 'Ph.D. JNU • Modern Indian History Specialist',
    initial: 'SK',
    domain: 'GS Paper 1 & 2',
    approach: 'Timeline & Historiographical Analysis',
    initialFollowed: false,
  },
  {
    id: 3,
    name: 'Meenakshi Sharma',
    subject: 'Indian Economy & Annual Economic Survey',
    credentials: 'Alumna Delhi School of Economics • Macroeconomics Specialist',
    initial: 'MS',
    domain: 'GS Paper 3',
    approach: 'Analytical & Concept-Driven Economics',
    initialFollowed: false,
  },
  {
    id: 4,
    name: 'Prof. Rajeshwar Shastri',
    subject: 'Geography, Environment & State PCS Special GK',
    credentials: 'Former University Faculty • 18+ Yrs Academic Guidance',
    initial: 'RS',
    domain: 'GS Paper 1 & State GK',
    approach: 'Mapping, Cartography & Ecology',
    initialFollowed: false,
  },
];

const BATCHES = [
  {
    id: 'b1',
    goalId: 'upsc-cse',
    category: 'UPSC CSE',
    tag: '🏛️ Target 2026/27',
    title: 'Samarthya: UPSC CSE 2026/27 Prelims + Mains Foundation',
    desc: 'Complete GS Papers 1-4, CSAT, Weekly Answer Writing Evaluation, and 1-on-1 Bureaucrat Mentorship.',
    educators: 'V. K. Rathore & Dr. Shiva Kumar',
    price: '₹ 24,999',
    originalPrice: '₹ 49,999',
    discount: '50% OFF',
  },
  {
    id: 'b2',
    goalId: 'uppsc',
    category: 'State PSC',
    tag: '📜 Pre + Mains Integrated',
    title: 'Vijayi Bhavah: UPPSC & BPSC Combined PCS Master Batch',
    desc: 'Exhaustive General Studies syllabus, UP & Bihar Special GK modules, and personalized Answer Writing Drills.',
    educators: 'Prof. Rajeshwar Shastri & Team',
    price: '₹ 12,499',
    originalPrice: '₹ 24,999',
    discount: '50% OFF',
  },
  {
    id: 'b3',
    goalId: 'state-govt',
    category: 'State Govt',
    tag: '👮 Complete Syllabus',
    title: 'Lakshya: State Government SI & Administrative Officer Batch',
    desc: 'Targeted preparation for Sub-Inspector, Revenue Inspector & Secretariat Assistant exams with daily mock drills.',
    educators: 'Meenakshi Sharma & Faculty Panel',
    price: '₹ 6,999',
    originalPrice: '₹ 13,999',
    discount: '50% OFF',
  },
];

export default function Home({ user, onNavigate, selectedGoal, onSelectGoal, onEnroll }) {
  const [activeBatchTab, setActiveBatchTab] = useState('all');
  const [pollVoted, setPollVoted] = useState(false);
  const [pollSelection, setPollSelection] = useState(null);
  const [followedEducators, setFollowedEducators] = useState({
    1: false,
    2: false,
    3: true,
    4: false,
  });

  const toggleFollow = (id) => {
    setFollowedEducators((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBatches =
    activeBatchTab === 'all'
      ? BATCHES
      : BATCHES.filter((b) => b.goalId === activeBatchTab);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Hero / Dashboard Content */}
            <div className="hero-content">
              {user ? (
                <div className="user-dashboard-banner">
                  <div className="hero-pill" style={{ background: 'var(--primary-light)', borderColor: 'var(--primary-border)' }}>
                    <span>🎓 Student Dashboard</span>
                    <span>•</span>
                    <span>{selectedGoal.toUpperCase().replace('-', ' ')}</span>
                  </div>

                  <h1 className="hero-title" style={{ fontSize: '2.75rem' }}>
                    Welcome back, <span className="highlight">{user.name}</span>! 👋
                  </h1>

                  <p className="hero-subtitle">
                    Your civil services preparation is on track. Your next live session with <strong>V. K. Rathore (Ex-IRS)</strong> starts in <strong>45 minutes</strong>.
                  </p>

                  <div className="dashboard-metrics-grid">
                    <div className="dash-metric-card">
                      <span className="dash-icon">🎯</span>
                      <div>
                        <div className="dash-num">Target {selectedGoal.toUpperCase().replace('-', ' ')}</div>
                        <div className="dash-desc">Your Selected Goal</div>
                      </div>
                    </div>
                    <div className="dash-metric-card">
                      <span className="dash-icon">✍️</span>
                      <div>
                        <div className="dash-num">Daily</div>
                        <div className="dash-desc">Mains Answer Writing</div>
                      </div>
                    </div>
                    <div className="dash-metric-card">
                      <span className="dash-icon">🏛️</span>
                      <div>
                        <div className="dash-num">1-on-1</div>
                        <div className="dash-desc">Mentor Doubt Resolution</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="hero-pill">
                    <span>🏛️</span>
                    <span>Dedicated UPSC CSE & State PCS Coaching</span>
                  </div>

                  <h1 className="hero-title">
                    Begin Your Civil Services Journey with{' '}
                    <span className="highlight">True Mentorship & Purpose</span>
                  </h1>

                  <p className="hero-subtitle">
                    Honest, rigorous preparation built by experienced civil servants and academicians.
                    Master Prelims and Mains through daily answer writing, deep conceptual clarity, and personal guidance.
                  </p>
                </>
              )}

              {/* Goal Pills */}
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Popular Goals:
                </span>
                <div className="hero-goal-chips">
                  {EXAM_GOALS.slice(0, 5).map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`goal-chip ${selectedGoal === g.id ? 'active' : ''}`}
                      onClick={() => onSelectGoal && onSelectGoal(g.id)}
                    >
                      <span>{g.icon}</span> {g.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="btn-primary-large"
                  onClick={() => {
                    if (onEnroll) {
                      onEnroll({
                        title: 'Samarthya: UPSC CSE 2026/27 Prelims + Mains Foundation',
                        duration: '18 months',
                        mode: 'Online Live + Mentorship',
                        nextBatch: '15 Nov 2026',
                        price: '₹ 24,999',
                      });
                    } else if (onNavigate) {
                      onNavigate('enroll');
                    }
                  }}
                >
                  <span>{user ? 'Explore Target Batches' : 'Start UPSC Preparation Free'}</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  className="btn-secondary-large"
                  onClick={() => {
                    const el = document.getElementById('goals-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>🎯 Choose Your Exam</span>
                </button>
              </div>

              {/* Core Values & Mentorship Pillars (Honest & Inspiring) */}
              <div className="hero-trust-bar">
                <div className="trust-item">
                  <span className="trust-number">Ex-Officers</span>
                  <span className="trust-label">Civil Services Mentors</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">Daily</span>
                  <span className="trust-label">Mains Answer Evaluation</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">1-on-1</span>
                  <span className="trust-label">Personal Doubt Solving</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">100%</span>
                  <span className="trust-label">Transparent Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Hero: Interactive Live Session Card */}
            <div className="hero-live-card">
              <div className="live-card-header">
                <div className="live-badge">
                  <span className="pulse-dot"></span>
                  <span>LIVE CLASS IN PROGRESS</span>
                </div>
                <span className="live-attendees">🔴 Live Mentorship Classroom</span>
              </div>

              <div className="live-video-preview">
                <div className="educator-live-bar">
                  <div className="educator-avatar-live">VR</div>
                  <div className="educator-info-live">
                    <h4>V. K. Rathore (Ex-IRS)</h4>
                    <p>Polity & Ethics Mentor • Ex-Civil Servant</p>
                  </div>
                </div>

                <div className="live-class-title">
                  🏛️ Modern Indian History & Mains Answer Writing: 10 High-Yield Themes
                </div>

                {/* Simulated Interactive Live Poll */}
                <div className="live-poll-card">
                  <div className="poll-question">
                    ❓ Quick Prelims Poll: Under which Article of the Constitution is the Finance Commission constituted?
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <button
                      type="button"
                      className="poll-option"
                      onClick={() => {
                        setPollVoted(true);
                        setPollSelection('A');
                      }}
                      style={{
                        background:
                          pollSelection === 'A'
                            ? 'rgba(8, 189, 128, 0.4)'
                            : 'rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                      }}
                    >
                      <span>A) Article 280 (By President every 5th year)</span>
                      <span>{pollVoted ? '✓ Correct Choice' : 'Vote'}</span>
                    </button>
                    <button
                      type="button"
                      className="poll-option"
                      onClick={() => {
                        setPollVoted(true);
                        setPollSelection('B');
                      }}
                      style={{
                        background:
                          pollSelection === 'B'
                            ? 'rgba(239, 68, 68, 0.3)'
                            : 'rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                      }}
                    >
                      <span>B) Article 324 (Election Commission)</span>
                      <span>{pollVoted ? 'Incorrect' : 'Vote'}</span>
                    </button>
                  </div>
                  {pollVoted && (
                    <div style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '6px', fontWeight: 600 }}>
                      ✓ Correct answer recorded! Article 280 empowers the President.
                    </div>
                  )}
                </div>
              </div>

              <div className="live-card-footer">
                <button
                  type="button"
                  className="btn-join-live"
                  onClick={() => {
                    if (user) {
                      alert('Entering live GS lecture with V. K. Rathore (Ex-IRS)...');
                    } else if (onNavigate) {
                      onNavigate('login');
                    }
                  }}
                >
                  {user ? 'Enter Live Classroom Now' : 'Sign In to Join Live Discussion'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Exam Goals Section */}
      <section id="goals-section" className="goals-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Target Exams</span>
            <h2 className="section-title">Select your Civil Services Goal</h2>
            <p className="section-subtitle">
              Dedicated coaching for UPSC Civil Services, UPPSC, BPSC, MPPSC, RAS, and State Government examinations.
            </p>
          </div>

          <div className="goals-grid">
            {EXAM_GOALS.map((g) => (
              <div
                key={g.id}
                className="goal-card"
                onClick={() => {
                  if (onSelectGoal) onSelectGoal(g.id);
                  const el = document.getElementById('batches-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div>
                  <div className="goal-card-top">
                    <div className="goal-icon-box">{g.icon}</div>
                    <div>
                      <h3 className="goal-title">{g.title}</h3>
                      <div className="goal-meta">{g.subtitle}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                    🎯 <strong>{g.highlight}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, marginTop: '3px', fontStyle: 'italic' }}>
                      "{g.motto}"
                    </div>
                  </div>
                </div>

                <div className="goal-stats">
                  <span>{g.courses}</span>
                  <span className="explore-link">
                    Explore Syllabus →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why ShivStudies Platform Advantage */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Preparation Edge</span>
            <h2 className="section-title">Our Foundation: Discipline, Rigor & Honest Mentorship</h2>
            <p className="section-subtitle">
              We focus on what truly matters to crack UPSC and State PCS — clear concepts, structured answer writing, and unwavering commitment.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">✍️</div>
              <h3>Daily Mains Answer Writing</h3>
              <p>
                Write daily GS and Optional answers evaluated by subject experts with constructive feedback, model answers, and structure tips.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📰</div>
              <h3>Current Affairs & Editorial Gist</h3>
              <p>
                Daily decoded analysis from The Hindu, Indian Express, and monthly Yojana & Kurukshetra summaries for GS Papers 2 & 3.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🎯</div>
              <h3>Prelims Simulation with Negative Marking</h3>
              <p>
                Practice topic-wise and full-length GS papers designed strictly on UPSC patterns to build accuracy and real exam temperament.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">👨‍💼</div>
              <h3>Direct Mentor Accessibility</h3>
              <p>
                Reach out directly to experienced mentors and former civil servants for strategy guidance, syllabus prioritization, and study plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Educators Section */}
      <section id="educators-section" className="educators-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Mentors & Guides</span>
            <h2 className="section-title">Learn from Experienced Civil Services Mentors</h2>
            <p className="section-subtitle">
              A dedicated core faculty of former civil servants, university academicians, and subject experts committed to honest guidance.
            </p>
          </div>

          <div className="educators-grid">
            {EDUCATORS.map((edu) => (
              <div key={edu.id} className="educator-card">
                <div className="educator-avatar-large">{edu.initial}</div>
                <h3 className="educator-name">{edu.name}</h3>
                <div className="educator-subject">{edu.subject}</div>
                <p className="educator-credentials">{edu.credentials}</p>

                <div className="educator-metrics">
                  <div className="metric-col">
                    <span className="number">{edu.domain}</span>
                    <span className="label">Focus Area</span>
                  </div>
                  <div className="metric-col">
                    <span className="number" style={{ fontSize: '0.85rem' }}>{edu.approach}</span>
                    <span className="label">Pedagogy</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-follow"
                  style={{
                    backgroundColor: followedEducators[edu.id] ? 'var(--primary)' : 'transparent',
                    color: followedEducators[edu.id] ? '#FFFFFF' : 'var(--primary)',
                  }}
                  onClick={() => toggleFollow(edu.id)}
                >
                  {followedEducators[edu.id] ? '✓ Mentor Selected' : '+ Select for Guidance'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trending Batches & Courses */}
      <section id="batches-section" className="batches-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">New Batches</span>
            <h2 className="section-title">Structured Batches for Upcoming Exam Cycles</h2>
            <p className="section-subtitle">
              Comprehensive live cohorts designed for complete syllabus coverage, conceptual clarity, and daily mentor accountability.
            </p>
          </div>

          {/* Batch Filter Tabs */}
          <div className="batch-tabs">
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('all')}
            >
              All Batches
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'upsc-cse' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('upsc-cse')}
            >
              UPSC CSE
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'uppsc' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('uppsc')}
            >
              State PSC (UP/Bihar/MP)
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'state-govt' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('state-govt')}
            >
              State Govt Exams
            </button>
          </div>

          {/* Batches Grid */}
          <div className="batches-grid">
            {filteredBatches.map((batch) => (
              <div key={batch.id} className="batch-card">
                <div>
                  <span className="batch-tag">{batch.tag}</span>
                  <h3 className="batch-title">{batch.title}</h3>
                  <p className="batch-desc">{batch.desc}</p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                    👨‍🏫 Faculty: <strong>{batch.educators}</strong>
                  </div>
                </div>

                <div className="batch-footer">
                  <div className="batch-price">
                    <span className="price-val">{batch.price}</span>
                    <span className="price-sub">
                      <del style={{ color: '#94A3B8' }}>{batch.originalPrice}</del> • {batch.discount}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn-enroll"
                    onClick={() => {
                      if (onEnroll) {
                        onEnroll({
                          title: batch.title,
                          duration: '12 months',
                          mode: 'Online / Classroom',
                          nextBatch: '10 Nov 2026',
                          price: batch.price,
                        });
                      } else if (onNavigate) {
                        onNavigate('enroll');
                      }
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mobile App Download Section */}
      <section className="app-banner-section">
        <div className="container">
          <div className="app-banner-card">
            <div className="app-banner-info">
              <h2>Never Stop Learning. Get the ShivStudies App</h2>
              <p>
                Download lectures to watch offline, solve daily practice problems on your commute,
                and receive instant notifications before live sessions begin.
              </p>
              <div className="app-store-btns">
                <div
                  className="app-btn"
                  onClick={() => alert('Redirecting to Google Play Store...')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="app-btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.185A2.32 2.32 0 0 1 3 20.575V3.424c0-.623.228-1.2.609-1.61z" fill="#00C1A6"/>
                      <path d="M17.18 8.614l-3.387 3.386L3.61 1.814a2.27 2.27 0 0 1 1.156-.314c.732 0 1.41.34 1.85.875l10.564 6.239z" fill="#00E676"/>
                      <path d="M17.18 15.386l-10.564 6.24c-.44.534-1.118.874-1.85.874a2.27 2.27 0 0 1-1.156-.314l10.183-10.186 3.387 3.386z" fill="#FF3D00"/>
                      <path d="M21.365 11.082l-4.185-2.468-3.387 3.386 3.387 3.386 4.185-2.468c.847-.5 1.335-1.127 1.335-1.918 0-.791-.488-1.418-1.335-1.918z" fill="#FFD600"/>
                    </svg>
                  </span>
                  <div className="app-btn-text">
                    <span className="small">GET IT ON</span>
                    <span className="large">Google Play</span>
                  </div>
                </div>

                <div
                  className="app-btn"
                  onClick={() => alert('Downloading ShivStudies Android APK...')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="app-btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3DDC84">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993 0 .5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9997.4482.9997.9993 0 .5511-.4486.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1s-3.5902.3116-5.1368.8497L4.8409 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.152.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                    </svg>
                  </span>
                  <div className="app-btn-text">
                    <span className="small">DOWNLOAD FOR</span>
                    <span className="large">Android APK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Mockup */}
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.06)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>📲</div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>Scan QR to Download</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Available for Android Devices</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
