import React, { useState } from 'react';
import '../css/faq.css';
import '../css/about.css';

const FAQ_DATA = [
  {
    category: 'General',
    q: 'What makes ShivStudies different from other UPSC coaching platforms?',
    a: 'ShivStudies is founded on genuine mentorship, complete transparency, and zero marketing hype. We provide daily Mains answer evaluation with personal faculty feedback, live interactive classes with experienced ex-civil servants, and honest syllabus tracking without false guarantees.',
  },
  {
    category: 'General',
    q: 'Are the courses suitable for beginners who are starting from scratch?',
    a: 'Yes, our foundation batches (such as Samarthya for UPSC and Vijayi Bhavah for State PCS) begin with foundational NCERT crux modules, core conceptual vocabulary, and syllabus breakdown before progressing to advanced GS analytical themes and previous year question drills.',
  },
  {
    category: 'Mains & Answers',
    q: 'How does the Daily Mains Answer Writing evaluation work?',
    a: 'Every morning at 8:00 AM, our subject experts release 2 high-yield Mains questions (1 GS and 1 Current Affairs-based). You write your answers by hand, scan them, and upload them via your dashboard. Our evaluator faculty checks them against UPSC marking parameters (Introduction, Body points, Diagrams, Constitutional Articles, Conclusion) with personalized remarks within 24 to 48 hours.',
  },
  {
    category: 'Mains & Answers',
    q: 'Can I write answers in Hindi or other regional mediums?',
    a: 'Yes! We support both English and Hindi medium cohorts for all UPSC and State PCS foundation courses. Evaluators fluent in the respective medium grade your submissions.',
  },
  {
    category: 'State PCS',
    q: 'Do you cover state-specific general knowledge for UPPSC, BPSC, MPPSC and RAS?',
    a: 'Absolutely. For UPPSC, we cover the newly introduced GS Papers 5 & 6 (UP Special). For BPSC, we have dedicated modules on Bihar History, Economy, and Geography. Similar comprehensive state modules are provided for MPPSC and RAS / RPSC.',
  },
  {
    category: 'Batches & Fees',
    q: 'Can I access recorded lectures if I miss a live session?',
    a: 'Yes, every live lecture is automatically archived in high definition in your student library within 2 hours of completion. You can re-watch lectures unlimited times throughout your subscription period.',
  },
  {
    category: 'Batches & Fees',
    q: 'What is the refund and cancellation policy?',
    a: 'Before any payment is collected, an academic counselor consults with you to confirm your target exam, language medium, and batch suitability. We also offer a 7-day satisfaction window during which you can request course reassignment or assistance if needed.',
  },
  {
    category: 'Mentorship',
    q: 'How does 1-on-1 Bureaucrat & Officer Mentorship operate?',
    a: 'Students in our Iconic programs receive dedicated monthly 1-on-1 strategy video calls with serving or retired civil servants. These sessions focus on booklist consolidation, time management, optional subject selection, overcoming study fatigue, and Personality Test (DAF) interview readiness.',
  },
];

export default function FAQ({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const categories = ['All', 'General', 'Mains & Answers', 'State PCS', 'Batches & Fees', 'Mentorship'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="info-page-header">
          <div className="info-page-badge">
            <span>❓ Aspirant Help Center</span>
          </div>
          <h1 className="info-page-title">
            Frequently Asked <span>Questions</span>
          </h1>
          <p className="info-page-subtitle">
            Find answers to common questions about UPSC CSE, State PCS batches, Mains evaluation,
            study materials, and 1-on-1 mentor guidance.
          </p>
        </div>

        {/* Search Box */}
        <div className="faq-search-box">
          <span className="faq-search-icon">🔍</span>
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search question, keyword, or topic (e.g. Mains, BPSC, Hindi)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="faq-category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`faq-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon-toggle">
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No questions found matching your search. Please reach out to our 24x7 support desk below.
            </div>
          )}
        </div>

        {/* Contact Support CTA Box */}
        <div className="faq-cta-card">
          <h3>Still have questions or need guidance?</h3>
          <p>
            Our academic counselors are available 24x7 to help you choose the right exam path and batch.
          </p>
          <button
            type="button"
            className="btn-contact-cta"
            onClick={() => onNavigate && onNavigate('contact')}
          >
            <span>💬 Speak to a Counsellor</span>
            <span>→</span>
          </button>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
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
