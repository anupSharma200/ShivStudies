import React from 'react';
import '../css/about.css';

export default function About({ onNavigate }) {
  return (
    <div className="info-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>🏛️ Dedicated Civil Services Mentorship</span>
          </div>
          <h1 className="info-page-title">
            About <span>ShivStudies</span>
          </h1>
          <p className="info-page-subtitle">
            Founded with a singular mission: to provide honest, disciplined, and rigorous guidance
            for every committed aspirant preparing for the UPSC Civil Services and State Public Service Examinations.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="about-card-section">
          <h2 className="about-card-title">
            <span>🇮🇳</span> Our Philosophy: Truth, Rigor & Purpose
          </h2>
          <p className="about-text">
            Civil services examinations demand intellectual honesty, deep conceptual understanding, and consistent daily discipline. At ShivStudies, we reject inflated marketing claims, exaggerated promises, and commercial gimmicks.
          </p>
          <p className="about-text">
            Instead, we have gathered a core team of experienced former civil servants, seasoned university academicians, and dedicated subject matter experts to work with aspirants directly from Day 1. Every lecture, answer writing critique, and mock test is designed to cultivate genuine bureaucratic competence.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="about-card-section">
          <h2 className="about-card-title">
            <span>⚖️</span> The Four Pillars of ShivStudies
          </h2>
          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="about-pillar-icon">✍️</div>
              <h3 className="about-pillar-title">Daily Mains Answer Writing</h3>
              <p className="about-pillar-desc">
                Knowledge without articulation is incomplete in the Mains exam. Our faculty reviews answers with individual feedback on question understanding, introduction, diagrams, and constitutional conclusions.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon">🏛️</div>
              <h3 className="about-pillar-title">Constitutional & Administrative Core</h3>
              <p className="about-pillar-desc">
                We ground every subject — from Polity and Governance to Ethics and Economy — in real-world administrative decision-making and constitutional principles.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon">🎯</div>
              <h3 className="about-pillar-title">State PCS Regional Depth</h3>
              <p className="about-pillar-desc">
                Specialized focus on UPPSC, BPSC, MPPSC, RAS, and State Police exams with exhaustive state-specific history, geography, economy, and budget modules.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon">🤝</div>
              <h3 className="about-pillar-title">Accessible Mentorship</h3>
              <p className="about-pillar-desc">
                High-quality guidance should not be confined to elite coaching hubs. We bring top-tier mentorship directly to aspirants across India at an honest, affordable fee.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Mentorship Panel */}
        <div className="about-card-section">
          <h2 className="about-card-title">
            <span>👨‍🏫</span> Core Academic Mentorship Panel
          </h2>
          <p className="about-text">
            Learn directly from guides with decades of combined service, academic scholarship, and proven teaching pedagogy:
          </p>
          <div className="about-faculty-grid">
            <div className="about-faculty-card">
              <div className="about-faculty-avatar">VR</div>
              <h3 className="about-faculty-name">V. K. Rathore (Ex-IRS)</h3>
              <div className="about-faculty-subj">Polity, Governance & Ethics (GS 2 & 4)</div>
              <p className="about-faculty-bio">
                Former Indian Revenue Service officer specializing in constitutional governance, ethics case studies, and interview preparation.
              </p>
            </div>

            <div className="about-faculty-card">
              <div className="about-faculty-avatar">SK</div>
              <h3 className="about-faculty-name">Dr. Shiva Kumar</h3>
              <div className="about-faculty-subj">Modern Indian History & IR (GS 1 & 2)</div>
              <p className="about-faculty-bio">
                Ph.D. from Jawaharlal Nehru University (JNU), author and authority on the Indian freedom movement and international geopolitics.
              </p>
            </div>

            <div className="about-faculty-card">
              <div className="about-faculty-avatar">MS</div>
              <h3 className="about-faculty-name">Meenakshi Sharma</h3>
              <div className="about-faculty-subj">Indian Economy & Budget (GS 3)</div>
              <p className="about-faculty-bio">
                Delhi School of Economics alumna decoding macroeconomic fundamentals, annual Economic Surveys, and sustainable development.
              </p>
            </div>

            <div className="about-faculty-card">
              <div className="about-faculty-avatar">RS</div>
              <h3 className="about-faculty-name">Prof. Rajeshwar Shastri</h3>
              <div className="about-faculty-subj">Geography, Ecology & State GK (GS 1)</div>
              <p className="about-faculty-bio">
                18+ years of university teaching experience guiding aspirants on physical cartography, climate change, and State PCS special papers.
              </p>
            </div>
          </div>
        </div>

        {/* Back / Explore Action */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            type="button"
            className="btn-back-home"
            onClick={() => onNavigate && onNavigate('home')}
          >
            ← Back to Home & Batches
          </button>
        </div>
      </div>
    </div>
  );
}
