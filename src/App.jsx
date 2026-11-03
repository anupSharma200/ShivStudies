import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import EnrollNow from './pages/EnrollNow';
import './css/global.css';

export default function App() {
  // Default to 'login' page as requested
  const [currentPage, setCurrentPage] = useState('login'); // 'login' | 'home' | 'enroll'
  const [selectedGoal, setSelectedGoal] = useState('iit-jee');
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

    // Default to 'login' page unless explicitly navigated to #home, #dashboard, or #enroll
    const hash = window.location.hash.replace('#', '');
    if (hash === 'home' || hash === 'dashboard') {
      setCurrentPage('home');
    } else if (hash === 'enroll') {
      setCurrentPage('enroll');
    } else {
      setCurrentPage('login');
      window.location.hash = 'login';
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash === 'home' || currentHash === 'dashboard') {
        setCurrentPage('home');
      } else if (currentHash === 'enroll') {
        setCurrentPage('enroll');
      } else {
        setCurrentPage('login');
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

  // Navigation handler
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
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
