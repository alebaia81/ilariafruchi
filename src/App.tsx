import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SkipLink } from './components/SkipLink';
import { Navbar } from './components/Navbar';
import { FooterInstitutional } from './components/FooterInstitutional';

// Home sections
import { HeroPortfolio } from './components/HeroPortfolio';
import { Expertise } from './components/Expertise';
import { TrustTestimonials } from './components/TrustTestimonials';
import { CompoundCalculator } from './components/CompoundCalculator';
import { BookingCalendar } from './components/BookingCalendar';
import { FaqSection } from './components/FaqSection';

// Service & Info pages
import { DipendentiPage } from './pages/DipendentiPage';
import { GiovaniPage } from './pages/GiovaniPage';
import { MezzaEtaPage } from './pages/MezzaEtaPage';
import { PensionatiPage } from './pages/PensionatiPage';
import { GrandiPatrimoniPage } from './pages/GrandiPatrimoniPage';
import { AziendePage } from './pages/AziendePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CremonaPage } from './pages/CremonaPage';
import { PiacenzaPage } from './pages/PiacenzaPage';
import { AnalisiPortafoglioPage } from './pages/AnalisiPortafoglioPage';
import { ChiSonoPage } from './pages/ChiSonoPage';
import { ContattiPage } from './pages/ContattiPage';

import { useDocumentHead } from './hooks/useDocumentHead';

const HomePage = () => {
  useDocumentHead({
    title: 'Ilaria Fruchi | Consulente Finanziario Piacenza e Cremona',
    description:
      'Consulenza finanziaria, gestione patrimoniale e pianificazione degli investimenti a Piacenza, Cremona e limitrofi. Proteggi il tuo futuro con Ilaria Fruchi.',
  });

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
      <HeroPortfolio />
      <Expertise />
      <TrustTestimonials />
      <CompoundCalculator />
      <div id="booking-section" className="scroll-mt-16">
        <BookingCalendar />
      </div>
      <FaqSection />
    </main>
  );
};

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
        {/* Core Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-sono" element={<ChiSonoPage />} />
        <Route path="/contatti" element={<ContattiPage />} />

        {/* SEO Silo Services */}
        <Route path="/servizi/analisi-portafoglio" element={<AnalisiPortafoglioPage />} />
        <Route path="/servizi/pianificazione-previdenziale-tfr" element={<DipendentiPage />} />
        <Route path="/servizi/piani-di-accumulo-pac" element={<GiovaniPage />} />
        <Route path="/servizi/gestione-risorse-patrimonio" element={<MezzaEtaPage />} />
        <Route path="/servizi/pensionati" element={<PensionatiPage />} />
        <Route path="/servizi/grandi-patrimoni" element={<GrandiPatrimoniPage />} />
        <Route path="/servizi/pianificazione-patrimoniale-aziende" element={<AziendePage />} />

        {/* Local Landing Pages */}
        <Route path="/dove-sono/consulente-finanziario-piacenza" element={<PiacenzaPage />} />
        <Route path="/dove-sono/consulente-finanziario-cremona" element={<CremonaPage />} />

        {/* Legacy / Helper Routes (Secondary) */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <FooterInstitutional />
    </>
  );
}

export default App;
