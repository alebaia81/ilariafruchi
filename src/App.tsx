import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SkipLink } from './components/SkipLink';
import { Navbar } from './components/Navbar';
import { FooterInstitutional } from './components/FooterInstitutional';

// Home sections
import { HeroPortfolio } from './components/HeroPortfolio';
import { Expertise } from './components/Expertise';
import { TrustTestimonials } from './components/TrustTestimonials';

import { BookingCalendar } from './components/BookingCalendar';
import { ContactForm } from './components/ContactForm';

// Service pages
import { DipendentiPage } from './pages/DipendentiPage';
import { GiovaniPage } from './pages/GiovaniPage';
import { MezzaEtaPage } from './pages/MezzaEtaPage';
import { PensionatiPage } from './pages/PensionatiPage';
import { GrandiPatrimoniPage } from './pages/GrandiPatrimoniPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

import { AnalisiPortafoglioPage } from './pages/AnalisiPortafoglioPage';

const HomePage = () => (
  <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
    <HeroPortfolio />
    <Expertise />

    <TrustTestimonials />
    <div id="booking-section" className="scroll-mt-16">
      <BookingCalendar />
    </div>
    <ContactForm />
  </main>
);

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <SkipLink />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analisi-portafoglio" element={<AnalisiPortafoglioPage />} />
        <Route path="/servizi/dipendenti" element={<DipendentiPage />} />
        <Route path="/servizi/giovani" element={<GiovaniPage />} />
        <Route path="/servizi/mezza-eta" element={<MezzaEtaPage />} />
        <Route path="/servizi/pensionati" element={<PensionatiPage />} />
        <Route path="/servizi/grandi-patrimoni" element={<GrandiPatrimoniPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <FooterInstitutional />
    </>
  );
}

export default App;
