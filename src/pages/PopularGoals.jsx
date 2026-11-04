import React, { useState, useEffect } from 'react';
import '../css/popularGoals.css';
import '../css/about.css';

const DETAILED_GOALS = [
  {
    id: 'upsc-cse',
    title: 'UPSC Civil Services (IAS / IPS / IFS)',
    short: 'UPSC CSE',
    subtitle: 'Indian Administrative Service, Police & Foreign Services',
    icon: '🏛️',
    motto: 'Integrity, Vision & Public Service',
    pattern: [
      'Stage 1: Prelims (GS Paper 1 + CSAT Qualifying)',
      'Stage 2: Mains (9 Papers including Essay & GS 1-4)',
      'Stage 3: Personality Test & Interview (275 Marks)',
    ],
    curriculum: 'Complete GS 1-4, CSAT, Weekly Answer Writing & 1-on-1 Bureaucrat Mentorship',
    recommendedBatch: 'Samarthya UPSC CSE 2026/27 Foundation',
    fee: '₹ 24,999',
  },
  {
    id: 'uppsc',
    title: 'UPPSC (Uttar Pradesh PCS)',
    short: 'UPPSC',
    subtitle: 'Sub-Divisional Magistrate (SDM), DSP & Commercial Tax',
    icon: '📜',
    motto: 'Excellence in State Administration',
    pattern: [
      'Stage 1: Prelims (GS 1 + CSAT GS 2)',
      'Stage 2: Mains (GS Papers 1-6 including UP Special Papers 5 & 6)',
      'Stage 3: Personality Interview',
    ],
    curriculum: 'Complete General Studies, UP History, Economy, Culture & GS Papers 5 & 6',
    recommendedBatch: 'Vijayi Bhavah: UPPSC & BPSC Combined PCS',
    fee: '₹ 12,499',
  },
  {
    id: 'bpsc',
    title: 'BPSC (Bihar Public Service Commission)',
    short: 'BPSC',
    subtitle: '70th & 71st Combined Competitive Examination (CCE)',
    icon: '📖',
    motto: 'Empowering Administrative Leadership for Bihar',
    pattern: [
      'Stage 1: Prelims (150 Marks with Negative Marking)',
      'Stage 2: Mains (General Hindi, GS Paper 1, GS Paper 2, Essay)',
      'Stage 3: Personality Test',
    ],
    curriculum: 'Comprehensive Bihar History, Champaran Satyagraha, Bihar Economy & Current Affairs',
    recommendedBatch: 'Vijayi Bhavah: UPPSC & BPSC Combined PCS',
    fee: '₹ 12,499',
  },
  {
    id: 'mppsc',
    title: 'MPPSC (Madhya Pradesh PCS)',
    short: 'MPPSC',
    subtitle: 'Deputy Collector, DSP, Accounts Officer & Excise',
    icon: '🎯',
    motto: 'Devoted to Transparent State Governance',
    pattern: [
      'Stage 1: State Service Prelims Exam',
      'Stage 2: Mains Examination (GS Papers 1-4, Hindi & Essay)',
      'Stage 3: Interview / Viva-Voce',
    ],
    curriculum: 'MP Special GK, Tribal Heritage, Narmada Valley Economy & State Administrative Ethics',
    recommendedBatch: 'Lakshya State Administrative Foundation',
    fee: '₹ 11,999',
  },
  {
    id: 'ras-rpsc',
    title: 'RAS / RPSC (Rajasthan Admin Services)',
    short: 'RAS / RPSC',
    subtitle: 'Rajasthan Administrative Service & Rajasthan Police Service',
    icon: '⚔️',
    motto: 'Service with Dignity & Honour',
    pattern: [
      'Stage 1: Combined Competitive Prelims',
      'Stage 2: Mains (GS 1, GS 2, GS 3, General Hindi & English)',
      'Stage 3: Personality and Viva-Voce Examination',
    ],
    curriculum: 'Rajasthan History, Art & Culture, Geography, Economy & Administrative English/Hindi',
    recommendedBatch: 'Lakshya State Administrative Foundation',
    fee: '₹ 11,999',
  },
  {
    id: 'state-govt',
    title: 'State Government & Police Exams',
    short: 'State SI & Police',
    subtitle: 'Sub-Inspector (SI), Revenue Inspector & Secretariat Assistant',
    icon: '👮',
    motto: 'Commitment to Law, Public Order & Duty',
    pattern: [
      'Stage 1: Written Examination (Aptitude, GS & Hindi/Regional)',
      'Stage 2: Physical Endurance & Efficiency Test (PET/PST)',
      'Stage 3: Document Verification & Merit Medical',
    ],
    curriculum: 'General Awareness, Indian Penal Laws overview, Reasoning, Quantitative Aptitude & Hindi',
    recommendedBatch: 'Lakshya: State Govt SI & Admin Officer Batch',
    fee: '₹ 6,999',
  },
];

export default function PopularGoals({ onNavigate, onSelectGoal, initialGoal = null, onEnroll }) {
  const [activeTab, setActiveTab] = useState(initialGoal || 'all');

  useEffect(() => {
    if (initialGoal) {
      setActiveTab(initialGoal);
    }
  }, [initialGoal]);

  const displayedGoals =
    activeTab === 'all'
      ? DETAILED_GOALS
      : DETAILED_GOALS.filter((g) => g.id === activeTab);

  return (
    <div className="goals-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>🎯 Civil Services & State Government Exam Portfolio</span>
          </div>
          <h1 className="info-page-title">
            Popular <span>Exam Goals</span>
          </h1>
          <p className="info-page-subtitle">
            Explore dedicated curricula, exam patterns, and structured cohorts designed specifically
            for UPSC Civil Services and State Public Service commissions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="goals-tabs-nav">
          <button
            type="button"
            className={`goals-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>All Exam Goals</span>
          </button>
          {DETAILED_GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              className={`goals-tab-btn ${activeTab === g.id ? 'active' : ''}`}
              onClick={() => setActiveTab(g.id)}
            >
              <span>{g.icon}</span>
              <span>{g.short}</span>
            </button>
          ))}
        </div>

        {/* Goals Grid */}
        <div className="goals-grid-detailed">
          {displayedGoals.map((goal) => (
            <div key={goal.id} className="goal-detail-card">
              <div>
                <div className="goal-card-header-det">
                  <div className="goal-card-icon-det">{goal.icon}</div>
                  <div>
                    <h2 className="goal-title-det">{goal.title}</h2>
                    <div className="goal-subtitle-det">{goal.subtitle}</div>
                  </div>
                </div>

                <div className="goal-motto-badge">"{goal.motto}"</div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Exam Pattern Overview:
                </div>
                <ul className="goal-pattern-list">
                  {goal.pattern.map((p, i) => (
                    <li key={i} className="goal-pattern-item">
                      <span>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Curriculum Highlight:</strong> {goal.curriculum}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Recommended Batch</span>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>{goal.fee}</span>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {goal.recommendedBatch}
                </div>

                <div className="goal-card-actions">
                  <button
                    type="button"
                    className="btn-enroll-goal"
                    onClick={() => {
                      if (onSelectGoal) onSelectGoal(goal.id);
                      if (onEnroll) {
                        onEnroll({
                          title: goal.recommendedBatch,
                          duration: '12-18 months',
                          mode: 'Online Live + Mentorship',
                          nextBatch: '15 Nov 2026',
                          price: goal.fee,
                        });
                      } else if (onNavigate) {
                        onNavigate('enroll');
                      }
                    }}
                  >
                    Enroll in Batch →
                  </button>

                  <button
                    type="button"
                    className="btn-syllabus-goal"
                    onClick={() => {
                      if (onSelectGoal) onSelectGoal(goal.id);
                      if (onNavigate) onNavigate('study-material');
                    }}
                  >
                    View Study Material
                  </button>
                </div>
              </div>
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
