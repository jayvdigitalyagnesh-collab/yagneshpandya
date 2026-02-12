import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PodcastPage from './pages/PodcastPage';
import CoachingPage from './pages/CoachingPage';
import EventsPage from './pages/EventsPage';
import Footer from './components/Footer';
import Banner from './components/Banner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Global PROMO Banner */}
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
