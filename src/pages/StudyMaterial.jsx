import React, { useState, useEffect } from 'react';
import '../css/studyMaterial.css';
import '../css/about.css';

const STUDY_RESOURCES = [
  {
    id: 'res-1',
    category: 'pyq',
    categoryLabel: 'Previous Year Papers (PYQs)',
    badge: 'UPSC CSE (2014-2025)',
    title: 'UPSC CSE Prelims & Mains 10-Year Subject-Wise Solved PYQs',
    desc: 'Topic-segregated previous year questions with model answers, constitutional articles, and trend analysis for GS Papers 1 to 4.',
    meta: '📄 120 Pages PDF · Verified Answers',
    fileType: 'PDF Document',
  },
  {
    id: 'res-2',
    category: 'mains',
    categoryLabel: 'Daily Mains Answer Writing',
    badge: 'Daily Evaluated Drill',
    title: 'Mains Question of the Day: Ethics Case Studies & GS Paper 2',
    desc: 'Daily practice problem with structuring guidelines, introduction hooks, body flowchart suggestions, and multi-dimensional conclusions.',
    meta: '✍️ Daily 8:00 AM · Mentor Evaluation',
    fileType: 'Interactive Exercise',
  },
  {
    id: 'res-3',
    category: 'ncert',
    categoryLabel: 'NCERT GS Crux Notes',
    badge: 'Classes 6 to 12 Foundation',
    title: 'NCERT Master Crux: History, Polity, Geography & Economy',
    desc: 'Consolidated chapter-wise notes eliminating repetitive text, focusing strictly on high-yield civil services Prelims & Mains concepts.',
    meta: '📚 4 Subject Modules · High-Yield',
    fileType: 'Curated Notes',
  },
  {
    id: 'res-4',
    category: 'editorial',
    categoryLabel: 'The Hindu & Express Editorial Gist',
    badge: 'Daily Current Affairs',
    title: 'The Hindu & Indian Express Editorial Analysis & Mindmaps',
    desc: 'Daily editorial breakdown categorized by GS Paper syllabus tags, with relevant Supreme Court judgements, committee recommendations, and data pointers.',
    meta: '📰 Updated Daily by 7:30 AM',
    fileType: 'Daily Analysis',
  },
  {
    id: 'res-5',
    category: 'yojana',
    categoryLabel: 'Yojana & Kurukshetra Summaries',
    badge: 'Monthly Policy Edition',
    title: 'Yojana & Kurukshetra Monthly Gist: Governance & Rural Dev',
    desc: 'Concise 15-page summaries of government flagship publications highlighting welfare initiatives, agricultural reforms, and administrative case studies.',
    meta: '📊 Monthly Compilation · GS 2 & 3',
    fileType: 'Monthly Summary',
  },
  {
    id: 'res-6',
    category: 'state-gk',
    categoryLabel: 'State PCS Special GK',
    badge: 'UP, Bihar, MP & Rajasthan',
    title: 'State PCS Comprehensive GK Modules (UP, BPSC, MP & RAS)',
    desc: 'Exhaustive notes covering state history, geographical resources, tribal traditions, state budgets, and previous year state commission questions.',
    meta: '🏛️ State Specific · Hindi & English',
    fileType: 'Special Compendium',
  },
];

export default function StudyMaterial({ onNavigate, initialCategory = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Study Material' },
    { id: 'pyq', label: 'UPSC PYQs' },
    { id: 'mains', label: 'Daily Mains Writing' },
    { id: 'ncert', label: 'NCERT GS Crux' },
    { id: 'editorial', label: 'The Hindu Editorial' },
    { id: 'yojana', label: 'Yojana & Kurukshetra' },
    { id: 'state-gk', label: 'State PCS GK' },
  ];

  const filteredResources =
    activeCategory === 'all'
      ? STUDY_RESOURCES
      : STUDY_RESOURCES.filter((res) => res.category === activeCategory);

  const handleAction = (res) => {
    alert(`Accessing "${res.title}". This study resource is available free in your student library!`);
  };

  return (
    <div className="material-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>📚 Free & Curated Civil Services Repository</span>
          </div>
          <h1 className="info-page-title">
            Civil Services <span>Study Material</span>
          </h1>
          <p className="info-page-subtitle">
            Concise, reliable, and syllabus-mapped study resources curated by experienced mentors
            to save your preparation time and build analytical depth.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="material-tabs-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`material-tab-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="material-cards-grid">
          {filteredResources.map((res) => (
            <div key={res.id} className="material-card">
              <div className="material-card-top">
                <span className="material-badge-type">{res.badge}</span>
                <h3 className="material-title">{res.title}</h3>
                <p className="material-desc">{res.desc}</p>
                <div className="material-details-meta">
                  <span>{res.meta}</span>
                  <span>•</span>
                  <span>{res.fileType}</span>
                </div>
              </div>

              <div className="material-card-footer">
                <button
                  type="button"
                  className="btn-material-action"
                  onClick={() => handleAction(res)}
                >
                  Download / Open →
                </button>
                <button
                  type="button"
                  className="btn-material-preview"
                  onClick={() => handleAction(res)}
                >
                  Preview Online
                </button>
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
