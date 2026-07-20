import { HeroPortfolio } from '../components/HeroPortfolio';
import { Expertise } from '../components/Expertise';
import { BiografiaSection } from '../components/BiografiaSection';
import { TrustTestimonials } from '../components/TrustTestimonials';
import { CompoundCalculator } from '../components/CompoundCalculator';
import { BookingCalendar } from '../components/BookingCalendar';
import { FaqSection } from '../components/FaqSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

export const PiacenzaPage = () => {
  useDocumentHead({
    title: 'Consulente Finanziario Piacenza | Ilaria Fruchi',
    description:
      'Gestione patrimoniale, investimenti e pianificazione finanziaria personalizzata a Piacenza. Richiedi un primo colloquio conoscitivo gratuito con Ilaria Fruchi.',
  });

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
      <HeroPortfolio />
      <Expertise />
      <BiografiaSection />
      <TrustTestimonials />
      <CompoundCalculator />
      <div id="booking-section" className="scroll-mt-16">
        <BookingCalendar />
      </div>
      <FaqSection />
    </main>
  );
};
