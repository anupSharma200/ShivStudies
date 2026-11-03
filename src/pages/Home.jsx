import React, { useState } from 'react';
import '../css/home.css';

const EXAM_GOALS = [
  {
    id: 'iit-jee',
    title: 'IIT JEE',
    subtitle: 'Mains & Advanced',
    icon: '⚛️',
    courses: '2,840+ Courses',
    rankers: 'AIR 1, 4, 7 in 2025',
    color: '#08BD80',
  },
  {
    id: 'neet-ug',
    title: 'NEET UG',
    subtitle: 'Medical Entrance Exam',
    icon: '🩺',
    courses: '3,450+ Courses',
    rankers: '715/720 Top Score',
    color: '#3B82F6',
  },
  {
    id: 'upsc-cse',
    title: 'UPSC CSE',
    subtitle: 'IAS, IPS, IFS & State PSC',
    icon: '🏛️',
    courses: '1,920+ Courses',
    rankers: '180+ Selections 2025',
    color: '#F59E0B',
  },
  {
    id: 'ssc-bank',
    title: 'SSC & Banking',
    subtitle: 'CGL, CHSL, IBPS PO & Clerk',
    icon: '💼',
    courses: '4,100+ Courses',
    rankers: '5,000+ Govt Selections',
    color: '#8B5CF6',
  },
  {
    id: 'cbse-12',
    title: 'CBSE Class 12',
    subtitle: 'Board Prep & CUET',
    icon: '📚',
    courses: '5,800+ Courses',
    rankers: '99.4% Highest Board Score',
    color: '#EC4899',
  },
  {
    id: 'coding-tech',
    title: 'Coding & AI',
    subtitle: 'Full Stack, Python & DSA',
    icon: '💻',
    courses: '1,200+ Courses',
    rankers: 'Top Placements at FAANG',
    color: '#10B981',
  },
];

const EDUCATORS = [
  {
    id: 1,
    name: 'Dr. Shiv Kumar',
    subject: 'Physics • IIT JEE Advanced',
    credentials: 'B.Tech IIT Delhi • 14+ Years Experience',
    initial: 'SK',
    followers: '480k Followers',
    watchTime: '120M+ Watch Mins',
    initialFollowed: false,
  },
  {
    id: 2,
    name: 'Prof. Ananya Sen',
    subject: 'Organic & Inorganic Chemistry',
    credentials: 'Ph.D. Chemistry • CSIR-NET JRF AIR 3',
    initial: 'AS',
    followers: '395k Followers',
    watchTime: '95M+ Watch Mins',
    initialFollowed: false,
  },
  {
    id: 3,
    name: 'V. K. Rathore (Ex-IRS)',
    subject: 'General Studies & Ethics • UPSC',
    credentials: 'Ex-Civil Servant • Mentored 200+ IAS/IPS',
    initial: 'VR',
    followers: '620k Followers',
    watchTime: '210M+ Watch Mins',
    initialFollowed: true,
  },
  {
    id: 4,
    name: 'Meenakshi Sundaram',
    subject: 'Advanced Mathematics & Calculus',
    credentials: 'M.Sc. Mathematics • Author of 3 JEE Bestsellers',
    initial: 'MS',
    followers: '510k Followers',
    watchTime: '140M+ Watch Mins',
    initialFollowed: false,
  },
];

const BATCHES = [
  {
    id: 'b1',
    goalId: 'iit-jee',
    category: 'IIT JEE',
    tag: '🔥 Target 2026/27',
    title: 'Emerge Excellence Batch: Complete Physics & Math',
    desc: 'Comprehensive coverage of Class 11 & 12 syllabus with 200+ live classes, weekly tests, and PYQ drills.',
    educators: 'Dr. Shiv Kumar & M. Sundaram',
    price: '₹ 14,999',
    originalPrice: '₹ 29,999',
    discount: '50% OFF',
  },
  {
    id: 'b2',
    goalId: 'neet-ug',
    category: 'NEET UG',
    tag: '🩺 Rankers Batch',
    title: 'Sanjeevani NEET 2026: PCB Mastery Program',
    desc: 'Line-by-line NCERT decoding for Biology, Chemistry and Physics with 50+ Full Syllabus Mock Tests.',
    educators: 'Prof. Ananya Sen & Team',
    price: '₹ 12,499',
    originalPrice: '₹ 24,999',
    discount: '50% OFF',
  },
  {
    id: 'b3',
    goalId: 'upsc-cse',
    category: 'UPSC CSE',
    tag: '🏛️ Prelims + Mains',
    title: 'Samarthya Foundation: UPSC 2026 Comprehensive Batch',
    desc: 'Daily Answer Writing practice, Current Affairs 360, CSAT mastery, and 1-on-1 interview mentorship.',
    educators: 'V. K. Rathore & Top GS Faculty',
    price: '₹ 24,999',
    originalPrice: '₹ 49,999',
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
                    Your learning momentum is strong. Your next live class with <strong>Dr. Shiv Kumar</strong> starts in <strong>45 minutes</strong>.
                  </p>

                  <div className="dashboard-metrics-grid">
                    <div className="dash-metric-card">
                      <span className="dash-icon">📖</span>
                      <div>
                        <div className="dash-num">3 / 5</div>
                        <div className="dash-desc">Daily Tasks Done</div>
                      </div>
                    </div>
                    <div className="dash-metric-card">
                      <span className="dash-icon">🔥</span>
                      <div>
                        <div className="dash-num">7 Days</div>
                        <div className="dash-desc">Active Study Streak</div>
                      </div>
                    </div>
                    <div className="dash-metric-card">
                      <span className="dash-icon">📊</span>
                      <div>
                        <div className="dash-num">94.2%</div>
                        <div className="dash-desc">Recent Test Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="hero-pill">
                    <span>🔥</span>
                    <span>Over 250,000+ Aspirants Learning Today</span>
                  </div>

                  <h1 className="hero-title">
                    Crack your dream exam with India's{' '}
                    <span className="highlight">Top Educators</span>
                  </h1>

                  <p className="hero-subtitle">
                    Access structured live courses, daily interactive doubt-solving,
                    comprehensive study notes, and mock tests with real-time All-India ranking.
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
                    if (user) {
                      const el = document.getElementById('batches-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (onNavigate) {
                      onNavigate('login');
                    }
                  }}
                >
                  <span>{user ? 'Explore All Courses' : 'Start Learning For Free'}</span>
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
                  <span>🎯 Choose Your Goal</span>
                </button>
              </div>

              {/* Trust Metrics Bar */}
              <div className="hero-trust-bar">
                <div className="trust-item">
                  <span className="trust-number">15M+</span>
                  <span className="trust-label">Happy Learners</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">50,000+</span>
                  <span className="trust-label">Top Educators</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">4.9 ★</span>
                  <span className="trust-label">Rated on App Store</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">12,000+</span>
                  <span className="trust-label">Selections in 2025</span>
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
                <span className="live-attendees">👥 14,820 watching</span>
              </div>

              <div className="live-video-preview">
                <div className="educator-live-bar">
                  <div className="educator-avatar-live">SK</div>
                  <div className="educator-info-live">
                    <h4>Dr. Shiv Kumar</h4>
                    <p>Physics Guru • Ex-IIT Delhi (AIR 42)</p>
                  </div>
                </div>

                <div className="live-class-title">
                  ⚡ Electrostatics & Gauss Law: 10 PYQ Patterns for JEE Advanced 2026
                </div>

                {/* Simulated Interactive Live Poll */}
                <div className="live-poll-card">
                  <div className="poll-question">
                    ❓ Quick Live Poll: What is the electric flux through a closed surface enclosing no charge?
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
                      <span>A) Zero (Gauss's Theorem)</span>
                      <span>{pollVoted ? '✓ Correct (88%)' : 'Vote'}</span>
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
                      <span>B) Equal to q / ε₀</span>
                      <span>{pollVoted ? '12%' : 'Vote'}</span>
                    </button>
                  </div>
                  {pollVoted && (
                    <div style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '6px', fontWeight: 600 }}>
                      ✓ Your answer has been registered!
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
                      alert('Entering live session room with Dr. Shiv Kumar...');
                    } else if (onNavigate) {
                      onNavigate('login');
                    }
                  }}
                >
                  {user ? 'Enter Live Classroom Now' : 'Sign In to Join Live Chat'}
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
            <span className="section-tag">Exam Goals</span>
            <h2 className="section-title">Select your Goal & Start Preparing</h2>
            <p className="section-subtitle">
              Choose from over 60+ competitive exam categories tailored with dedicated syllabus,
              live classes, and mock tests.
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
                    🏆 <strong>{g.rankers}</strong>
                  </div>
                </div>

                <div className="goal-stats">
                  <span>{g.courses}</span>
                  <span className="explore-link">
                    Explore Goal →
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
            <span className="section-tag">Platform Advantage</span>
            <h2 className="section-title">Why 15 Million+ Students Choose ShivStudies</h2>
            <p className="section-subtitle">
              We provide an end-to-end learning ecosystem designed to turn your hard work into top ranks.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🎥</div>
              <h3>Daily Interactive Live Classes</h3>
              <p>
                Engage directly with faculty, participate in live polls, and get doubts answered in real-time.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📊</div>
              <h3>All-India Mock Test Series</h3>
              <p>
                Real exam simulation with deep AI analytics: question speed analysis, accuracy breakdown, and national percentile.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🤝</div>
              <h3>1-on-1 Academic Mentorship</h3>
              <p>
                Get personal guidance from top rankers and expert academic coaches who craft customized study schedules.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📱</div>
              <h3>Learn Anywhere, Anytime</h3>
              <p>
                Download lecture videos and PDF summary notes to revise offline anytime on iOS, Android, or Web.
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
            <h2 className="section-title">Learn from India's Best Teachers</h2>
            <p className="section-subtitle">
              Over 50,000+ handpicked educators, IITians, Doctors, and Civil Servants guiding you at every step.
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
                    <span className="number">{edu.followers}</span>
                    <span className="label">Followers</span>
                  </div>
                  <div className="metric-col">
                    <span className="number">{edu.watchTime}</span>
                    <span className="label">Watch Time</span>
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
                  {followedEducators[edu.id] ? '✓ Following' : '+ Follow Educator'}
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
            <h2 className="section-title">Structured Batches Starting This Week</h2>
            <p className="section-subtitle">
              Join live batches covering full syllabus from basic concepts to advanced problem solving.
            </p>
          </div>

          {/* Batch Filter Tabs */}
          <div className="batch-tabs">
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('all')}
            >
              All Goals
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'iit-jee' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('iit-jee')}
            >
              IIT JEE
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'neet-ug' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('neet-ug')}
            >
              NEET UG
            </button>
            <button
              type="button"
              className={`batch-tab ${activeBatchTab === 'upsc-cse' ? 'active' : ''}`}
              onClick={() => setActiveBatchTab('upsc-cse')}
            >
              UPSC CSE
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
