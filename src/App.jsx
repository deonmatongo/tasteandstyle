import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCursor } from './hooks/useCursor';

import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import EventRecap from './pages/EventRecap';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  useScrollReveal();
  useCursor();

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
      <ScrollProgress />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventRecap />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <BookingProvider>
          <ScrollToTop />
          <AppInner />
        </BookingProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
