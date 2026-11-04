import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import EnrollNow from './pages/EnrollNow';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQ from './pages/FAQ';
import ContactSupport from './pages/ContactSupport';
import PopularGoals from './pages/PopularGoals';
import StudyMaterial from './pages/StudyMaterial';
import LearningPrograms from './pages/LearningPrograms';
import './css/global.css';

export default function App() {
  // Default to 'login' page as requested
  const [currentPage, setCurrentPage] = useState('login');
  const [navParam, setNavParam] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState('upsc-cse');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);

  // Restore authenticated session from localStorage on initial load
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('shivstudies_user');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        if (parsed.goal) {
          setSelectedGoal(parsed.goal);
        }
      }
    } catch {
      // Ignore parse error
    }

    const parseHash = () => {
      const raw = window.location.hash.replace('#', '');
      const parts = raw.split('/');
      return { route: parts[0] || '', param: parts[1] || null };
    };

    const validRoutes = [
      'login',
      'home',
      'dashboard',
      'enroll',
      'about',
      'privacy',
      'terms',
      'faq',
      'contact',
      'goals',
      'study-material',
      'programs',
    ];

    const { route, param } = parseHash();
    if (validRoutes.includes(route)) {
      setCurrentPage(route === 'dashboard' ? 'home' : route);
      if (param) setNavParam(param);
    } else {
      setCurrentPage('login');
      window.location.hash = 'login';
    }

    const handleHashChange = () => {
      const { route: newRoute, param: newParam } = parseHash();
      if (validRoutes.includes(newRoute)) {
        setCurrentPage(newRoute === 'dashboard' ? 'home' : newRoute);
        setNavParam(newParam || null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show a notification toast
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Navigation handler supporting target page and optional parameters/tabs
  const handleNavigate = (page, param = null) => {
    setCurrentPage(page);
    setNavParam(param);
    window.location.hash = param ? `${page}/${param}` : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle clicking "Enroll Now" on any batch or course
  const handleEnroll = (course) => {
    setSelectedCourse(course);
    handleNavigate('enroll');
  };

  // Handle successful login or sign up -> Navigates to Home / Dashboard
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    if (userData.goal) {
      setSelectedGoal(userData.goal);
    }
    showToast(`Welcome back, ${userData.name}! Logged in successfully 🎉`);
    handleNavigate('home');
  };

  // Handle user logout -> Returns to Login page
  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('shivstudies_user');
    } catch {
      // Ignore
    }
    showToast('You have been logged out successfully.', 'info');
    handleNavigate('login');
  };

  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Navbar
        user={user}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        selectedGoal={selectedGoal}
        onSelectGoal={setSelectedGoal}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentPage === 'home' && (
          <Home
            user={user}
            onNavigate={handleNavigate}
            selectedGoal={selectedGoal}
            onSelectGoal={setSelectedGoal}
            onEnroll={handleEnroll}
          />
        )}

        {currentPage === 'login' && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigate}
            defaultGoal={selectedGoal}
          />
        )}

        {currentPage === 'enroll' && (
          <EnrollNow
            course={selectedCourse}
            user={user}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <TermsConditions onNavigate={handleNavigate} />
        )}

        {currentPage === 'faq' && (
          <FAQ onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactSupport user={user} onNavigate={handleNavigate} />
        )}

        {currentPage === 'goals' && (
          <PopularGoals
            onNavigate={handleNavigate}
            onSelectGoal={setSelectedGoal}
            initialGoal={navParam}
            onEnroll={handleEnroll}
          />
        )}

        {currentPage === 'study-material' && (
          <StudyMaterial
            onNavigate={handleNavigate}
            initialCategory={navParam}
          />
        )}

        {currentPage === 'programs' && (
          <LearningPrograms
            onNavigate={handleNavigate}
            initialProgram={navParam}
            onEnroll={handleEnroll}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Toast Notification */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          <span>{toast.type === 'error' ? '⚠️' : '✅'}</span>
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
