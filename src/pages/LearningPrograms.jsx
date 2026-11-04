import React, { useState, useEffect } from 'react';
import '../css/learningPrograms.css';
import '../css/about.css';

const LEARNING_PROGRAMS = [
  {
    id: 'plus',
    title: 'ShivStudies Plus Subscription',
    icon: '⚡',
    tagline: 'Comprehensive Live Classes & Prelims cum Mains Batches',
    desc: 'Unrestricted access to all ongoing and upcoming UPSC & State PCS batches, recorded lectures in HD, and integrated Prelims test series.',
    perks: [
      'Daily live interactive lectures by core civil services faculty',
      'Daily recorded sessions with lifetime revision validity',
      'Comprehensive study materials, handouts & current affairs gists',
      'Topic-wise Prelims test series with negative marking analysis',
    ],
    featured: true,
    actionText: 'Explore Plus Batches',
  },
  {
    id: 'iconic',
    title: 'Iconic 1-on-1 Bureaucrat Mentorship',
    icon: '👨‍💼',
    tagline: 'Personalized Strategy & Accountability with Ex-Officers',
    desc: 'Designed for aspirants seeking disciplined personal accountability, curated study roadmaps, and detailed Mains answer writing critique.',
    perks: [
      'Dedicated serving or retired officer assigned as personal mentor',
      'Weekly 1-on-1 video call to review study hours and target milestones',
      'Detailed, line-by-line evaluation of your handwritten Mains answers',
      'Comprehensive DAF (Detailed Application Form) interview strategy',
    ],
    featured: true,
    actionText: 'Apply for Mentorship',
  },
  {
    id: 'offline',
    title: 'ShivStudies Offline Learning Centers',
    icon: '🏫',
    tagline: 'Physical Classrooms, Study Rooms & Library Desks',
    desc: 'Experience immersive classroom learning, distraction-free reading halls, and face-to-face doubts resolution with faculty.',
    perks: [
      'State-of-the-art hybrid classrooms in North India hubs',
      '24x7 peaceful reading library desks with high-speed Wi-Fi',
      'In-person answer writing workshops every Saturday',
      'Direct peer study circles and group discussion facilities',
    ],
    featured: false,
    actionText: 'View Center Locations',
  },
  {
    id: 'scholarship',
    title: 'CSST: Civil Services Scholarship Test',
    icon: '🏛️',
    tagline: 'Merit-Based Fee Waivers up to 90%',
    desc: 'We believe financial constraints should never stand between a dedicated aspirant and their dream of serving the nation.',
    perks: [
      'All-India objective test evaluating General Awareness & Aptitude',
      'Top scorers receive up to 90% scholarship on complete foundation batches',
      'Free comprehensive NCERT study pack for all participants',
      'Conducted online every month with immediate score cards',
    ],
    featured: false,
    actionText: 'Register for CSST Free',
  },
  {
    id: 'campus',
    title: 'Campus Ambassador Program',
    icon: '🎓',
    tagline: 'Lead Civil Services Awareness in Your College',
    desc: 'Represent ShivStudies at your university, organize civil services seminars with our mentors, and develop your own leadership profile.',
    perks: [
      'Official Certificate of Leadership & Letter of Recommendation',
      'Complimentary access to ShivStudies current affairs & GS modules',
      'Direct interaction with former civil servants and guest speakers',
      'Performance stipends and merchandise for active leaders',
    ],
    featured: false,
    actionText: 'Join as Ambassador',
  },
  {
    id: 'teach',
    title: 'Teach at ShivStudies',
    icon: '👨‍🏫',
    tagline: 'Join India\'s Most Purpose-Driven Civil Services Faculty',
    desc: 'We are inviting passionate subject specialists, university researchers, and former civil servants who believe in honest, gimmick-free pedagogy.',
    perks: [
      'Modern digital studio equipment and high-reach teaching platform',
      'Competitive compensation and academic research freedom',
      'Direct engagement with sincere, dedicated civil service aspirants',
      'Collaborative environment with senior civil servants and professors',
    ],
    featured: false,
    actionText: 'Apply to Teach',
  },
];

export default function LearningPrograms({ onNavigate, initialProgram = null, onEnroll }) {
  const [activeTab, setActiveTab] = useState(initialProgram || 'all');

  useEffect(() => {
    if (initialProgram) {
      setActiveTab(initialProgram);
    }
  }, [initialProgram]);

  const displayedPrograms =
    activeTab === 'all'
      ? LEARNING_PROGRAMS
      : LEARNING_PROGRAMS.filter((p) => p.id === activeTab);

  const handleAction = (prog) => {
    if (prog.id === 'plus') {
      if (onEnroll) {
        onEnroll({
          title: 'ShivStudies Plus: Complete Civil Services Subscription',
          duration: '12-18 months',
          mode: 'Online Live + Recorded',
          nextBatch: '15 Nov 2026',
          price: '₹ 24,999',
        });
      } else if (onNavigate) {
        onNavigate('enroll');
      }
    } else if (prog.id === 'iconic') {
      if (onEnroll) {
        onEnroll({
          title: 'Iconic 1-on-1 Bureaucrat Mentorship Program',
          duration: '18 months',
          mode: 'Personal Mentor + Live Batches',
          nextBatch: 'Immediate Onboarding',
          price: '₹ 34,999',
        });
      } else if (onNavigate) {
        onNavigate('enroll');
      }
    } else if (prog.id === 'scholarship') {
      alert('Civil Services Scholarship Test (CSST) registration confirmed! Check your email for syllabus and test timing.');
    } else if (prog.id === 'teach' || prog.id === 'campus' || prog.id === 'offline') {
      if (onNavigate) onNavigate('contact');
    }
  };

  return (
    <div className="programs-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>✨ Structured Academic Initiatives</span>
          </div>
          <h1 className="info-page-title">
            ShivStudies <span>Learning Programs</span>
          </h1>
          <p className="info-page-subtitle">
            From flexible digital subscriptions to 1-on-1 officer mentorship and merit scholarships,
            discover the program built for your civil services preparation style.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="programs-tabs-nav">
          <button
            type="button"
            className={`programs-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>All Programs</span>
          </button>
          {LEARNING_PROGRAMS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`programs-tab-btn ${activeTab === p.id ? 'active' : ''}`}
              onClick={() => setActiveTab(p.id)}
            >
              <span>{p.icon}</span>
              <span>{p.title.split(' ')[0]} {p.title.split(' ')[1] || ''}</span>
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {displayedPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`program-card ${prog.featured ? 'featured' : ''}`}
            >
              <div>
                {prog.featured && (
                  <span className="featured-tag">Most Recommended</span>
                )}
                <div className="program-icon-box">{prog.icon}</div>
                <h2 className="program-title">{prog.title}</h2>
                <div className="program-tagline">{prog.tagline}</div>
                <p className="program-desc">{prog.desc}</p>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  What you get:
                </div>
                <ul className="program-perks-list">
                  {prog.perks.map((perk, i) => (
                    <li key={i} className="program-perk-item">
                      <span>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn-program-enroll"
                onClick={() => handleAction(prog)}
              >
                {prog.actionText} →
              </button>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
