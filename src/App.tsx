import { Routes, Route } from 'react-router-dom';
import { SkipLink } from './components/SkipLink';
import { Navbar } from './components/Navbar';
import { FooterInstitutional } from './components/FooterInstitutional';

// Home sections
import { HeroPortfolio } from './components/HeroPortfolio';
import { Expertise } from './components/Expertise';
import { TrustTestimonials } from './components/TrustTestimonials';
import { CompoundCalculator } from './components/CompoundCalculator';
import { ContactForm } from './components/ContactForm';

// Service pages
import { DipendentiPage } from './pages/DipendentiPage';
import { GiovaniPage } from './pages/GiovaniPage';
import { MezzaEtaPage } from './pages/MezzaEtaPage';
import { PensionatiPage } from './pages/PensionatiPage';
import { GrandiPatrimoniPage } from './pages/GrandiPatrimoniPage';
import { AziendePage } from './pages/AziendePage';
import { AnalisiPortafoglioPage } from './pages/AnalisiPortafoglioPage';

const HomePage = () => (
  <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
    <HeroPortfolio />
    <Expertise />
    <CompoundCalculator />
    <TrustTestimonials />
    <ContactForm />
  </main>
);

function App() {
  return (
    <>
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
        <Route path="/servizi/aziende" element={<AziendePage />} />
      </Routes>
      <FooterInstitutional />
    </>
  );
}

export default App;
