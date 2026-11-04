import React, { useState } from 'react';
import '../css/courses.css';
import '../css/about.css';
import courseVideo from '../assets/Video/ngo.mp4';

const ALL_COURSES = [
  {
    id: 'c1',
    category: 'UPSC CSE',
    goalId: 'upsc-cse',
    tag: '🏛️ Prelims + Mains Foundation',
    title: 'Samarthya: UPSC CSE 2026/27 GS Comprehensive Foundation',
    mentor: 'V. K. Rathore (Ex-IRS) & Dr. Shiva Kumar',
    duration: '18 months',
    mode: 'Online Live + Mentorship',
    nextBatch: '15 Nov 2026',
    price: '₹ 24,999',
    desc: 'Complete coverage of GS Papers 1 to 4, Essay, CSAT qualifying modules, weekly handwritten answer writing evaluation, and 1-on-1 bureaucrat mentorship.',
    specs: ['GS Papers 1-4', 'CSAT Qualifying', 'Weekly Mains Check', '1-on-1 Mentorship'],
    pdfName: 'Samarthya_UPSC_2026_Complete_Curriculum.pdf',
  },
  {
    id: 'c2',
    category: 'State PSC',
    goalId: 'uppsc',
    tag: '📜 Pre + Mains Integrated',
    title: 'Vijayi Bhavah: UPPSC & BPSC Combined PCS Master Course',
    mentor: 'Prof. Rajeshwar Shastri & Core Panel',
    duration: '12 months',
    mode: 'Online Live + Recorded',
    nextBatch: '17 Nov 2026',
    price: '₹ 12,499',
    desc: 'Exhaustive syllabus for Uttar Pradesh and Bihar Civil Services. Includes dedicated coverage of UP GS Papers 5 & 6 and Bihar Special History, Geography, and Economy.',
    specs: ['UP Special Papers 5 & 6', 'Bihar History & Economy', 'Full Test Series', 'Live Doubts'],
    pdfName: 'UPPSC_BPSC_Combined_Syllabus_Handout.pdf',
  },
  {
    id: 'c3',
    category: 'State Govt',
    goalId: 'state-govt',
    tag: '👮 Administrative & Police',
    title: 'Lakshya: State Government SI & Administrative Officer Batch',
    mentor: 'Meenakshi Sharma & Faculty Team',
    duration: '8 months',
    mode: 'Online Live Drills',
    nextBatch: '20 Nov 2026',
    price: '₹ 6,999',
    desc: 'Targeted preparation for Sub-Inspector (SI), Revenue Inspector, and Secretariat Assistant examinations with daily mock drills and rapid revision modules.',
    specs: ['General Awareness', 'Reasoning & Aptitude', 'Legal Basics', 'Daily Mock Drills'],
    pdfName: 'State_Govt_SI_Comprehensive_Blueprint.pdf',
  },
  {
    id: 'c4',
    category: 'State PSC',
    goalId: 'mppsc',
    tag: '🎯 Foundation & Answer Writing',
    title: 'Sankalp: MPPSC & RAS Combined Foundation Course',
    mentor: 'Prof. Rajeshwar Shastri & V. K. Rathore',
    duration: '12 months',
    mode: 'Online Live + Notes',
    nextBatch: '24 Nov 2026',
    price: '₹ 11,999',
    desc: 'Designed for Madhya Pradesh and Rajasthan Public Service Commission aspirants. In-depth state heritage, tribal governance, ecology, and daily regional answer writing.',
    specs: ['MP & Rajasthan GK', 'Regional Administrative Law', 'State Mocks', 'Mentorship'],
    pdfName: 'MPPSC_RAS_Combined_Study_Plan.pdf',
  },
  {
    id: 'c5',
    category: 'UPSC CSE',
    goalId: 'upsc-cse',
    tag: '⚖️ GS Paper 4 Specialist',
    title: 'Ethics, Integrity & Aptitude Masterclass with Ex-IRS Officer',
    mentor: 'V. K. Rathore (Ex-IRS)',
    duration: '3 months',
    mode: 'Online Live Case Studies',
    nextBatch: '12 Nov 2026',
    price: '₹ 5,499',
    desc: 'Master GS Paper 4 with 100+ simulated case studies, ethical lexicon, moral philosophy thinkers, and administrative integrity frameworks evaluated by an ex-civil servant.',
    specs: ['100+ Real Case Studies', 'Thinkers & Lexicon', 'Answer Framing', 'Personal Feedback'],
    pdfName: 'Ethics_GS_Paper_4_Masterclass_Notes.pdf',
  },
  {
    id: 'c6',
    category: 'Mains Mentorship',
    goalId: 'upsc-cse',
    tag: '✍️ Daily Evaluated Writing',
    title: 'Daily Mains Answer Writing & Personal Critique Program',
    mentor: 'Core Civil Services Evaluation Board',
    duration: '6 months',
    mode: 'Daily Evaluation + Debriefs',
    nextBatch: 'Immediate Onboarding',
    price: '₹ 8,999',
    desc: 'Receive 2 high-yield Mains questions daily at 8:00 AM. Upload your handwritten scripts to get line-by-line structural feedback, diagram guidance, and model answers within 24 hours.',
    specs: ['2 Questions Daily', '24h Turnaround', 'Model Structures', 'Marking Metrics'],
    pdfName: 'Mains_Answer_Writing_Guide_Framework.pdf',
  },
];

export default function Courses({ onNavigate, onEnroll }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activeVideoCourse, setActiveVideoCourse] = useState(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'UPSC CSE', label: 'UPSC Civil Services' },
    { id: 'State PSC', label: 'State PSC (UP/Bihar/MP/RAS)' },
    { id: 'State Govt', label: 'State Govt & Police' },
    { id: 'Mains Mentorship', label: 'Mains Writing & Ethics' },
  ];

  const filteredCourses =
    activeCategory === 'all'
      ? ALL_COURSES
      : ALL_COURSES.filter((c) => c.category === activeCategory);

  const toggleDropdown = (e, courseId) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === courseId ? null : courseId);
  };

  const handlePlayVideo = (e, course) => {
    e.stopPropagation();
    setOpenDropdownId(null);
    setActiveVideoCourse(course);
  };

  const handleDownloadPdf = (e, course) => {
    e.stopPropagation();
    setOpenDropdownId(null);
    // Create an accessible text syllabus download or trigger download prompt
    const content = `SHIVSTUDIES CIVIL SERVICES ACADEMY\nCourse: ${course.title}\nMentor: ${course.mentor}\nDuration: ${course.duration}\nMode: ${course.mode}\nBatch Starts: ${course.nextBatch}\nFee: ${course.price}\n\nOverview:\n${course.desc}\n\nCurriculum Specs:\n- ${course.specs.join('\n- ')}\n\nFor questions, contact support@shivstudies.com | Toll-Free: 1800-889-SHIV`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = course.pdfName.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    alert(`Downloading syllabus & curriculum document for "${course.title}".`);
  };

  const handleCardClick = (course) => {
    // When a user clicks on a course, display its video using local video file
    setActiveVideoCourse(course);
  };

  const handleEnrollClick = (e, course) => {
    e.stopPropagation();
    if (onEnroll) {
      onEnroll(course);
    } else if (onNavigate) {
      onNavigate('enroll');
    }
  };

  return (
    <div className="courses-page-wrapper" onClick={() => setOpenDropdownId(null)}>
      <div className="container">
        {/* Header Section */}
        <div className="courses-header-section">
          <div className="info-page-badge">
            <span>🏛️ Dedicated Civil Services & State Exam Batches</span>
          </div>
          <h1 className="info-page-title">
            All Available <span>Courses & Batches</span>
          </h1>
          <p className="info-page-subtitle">
            Explore comprehensive Prelims cum Mains cohorts, State PSC batches, and specialized Mains answer
            writing modules. Click on any course to preview its orientation video.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="courses-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`courses-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveCategory(cat.id);
              }}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid-layout">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="course-master-card"
              onClick={() => handleCardClick(course)}
            >
              <div>
                {/* Card Top: Category Tag + Three-Dot Menu */}
                <div className="course-card-top-bar">
                  <span className="course-category-pill">{course.tag}</span>

                  {/* Three-Dot Menu */}
                  <div className="course-menu-wrapper">
                    <button
                      type="button"
                      className="btn-three-dots"
                      onClick={(e) => toggleDropdown(e, course.id)}
                      aria-label="Course actions menu"
                      title="More options"
                    >
                      ⋮
                    </button>

                    {openDropdownId === course.id && (
                      <div
                        className="course-dropdown-menu"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          className="course-dropdown-action"
                          onClick={(e) => handlePlayVideo(e, course)}
                        >
                          <span>▶</span>
                          <span>Play Video</span>
                        </button>
                        <button
                          type="button"
                          className="course-dropdown-action"
                          onClick={(e) => handleDownloadPdf(e, course)}
                        >
                          <span>📥</span>
                          <span>Download PDF</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Thumbnail Mockup with Play Icon */}
                <div className="course-video-thumb-preview">
                  <div className="play-badge-pulse">▶</div>
                  <div className="thumb-tag-corner">Click to preview lecture</div>
                </div>

                {/* Title & Mentor */}
                <h2 className="course-title-main">{course.title}</h2>
                <div className="course-mentor-line">Faculty: {course.mentor}</div>
                <p className="course-desc-brief">{course.desc}</p>

                {/* Specs Pills */}
                <div className="course-features-pills">
                  {course.specs.map((spec, i) => (
                    <span key={i} className="course-spec-pill">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Fee and Enroll Now Button */}
              <div className="course-card-bottom">
                <div className="course-fee-wrap">
                  <span className="course-price-val">{course.price}</span>
                  <span className="course-duration-sub">{course.duration} · {course.mode}</span>
                </div>

                <button
                  type="button"
                  className="btn-enroll-action"
                  onClick={(e) => handleEnrollClick(e, course)}
                >
                  Enroll Now →
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

      {/* Video Modal Player (Using local video file src/assets/Video/ngo.mp4) */}
      {activeVideoCourse && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideoCourse(null)}
        >
          <div
            className="video-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="video-modal-header">
              <div className="video-modal-title">
                <span>🎥</span>
                <span>{activeVideoCourse.title}</span>
              </div>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setActiveVideoCourse(null)}
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>

            {/* Local Video Player */}
            <div className="video-player-container">
              <video
                className="course-html5-video"
                controls
                autoPlay
                playsInline
                src={courseVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer with Actions */}
            <div className="video-modal-footer">
              <div className="video-footer-info">
                <div>Faculty: <strong>{activeVideoCourse.mentor}</strong></div>
                <div style={{ fontSize: '0.75rem', marginTop: '2px' }}>
                  Next Live Batch Starts: <strong>{activeVideoCourse.nextBatch}</strong> · {activeVideoCourse.price}
                </div>
              </div>

              <div className="video-modal-actions">
                <button
                  type="button"
                  className="btn-modal-download"
                  onClick={(e) => handleDownloadPdf(e, activeVideoCourse)}
                >
                  📥 Download PDF
                </button>
                <button
                  type="button"
                  className="btn-modal-enroll"
                  onClick={(e) => {
                    const c = activeVideoCourse;
                    setActiveVideoCourse(null);
                    handleEnrollClick(e, c);
                  }}
                >
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
