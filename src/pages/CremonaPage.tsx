import { HeroCremona } from '../components/HeroCremona';
import { ExpertiseCremona } from '../components/ExpertiseCremona';
import { BiografiaSection } from '../components/BiografiaSection';
import { TrustTestimonials } from '../components/TrustTestimonials';
import { CompoundCalculator } from '../components/CompoundCalculator';
import { BookingCalendar } from '../components/BookingCalendar';
import { ContactForm } from '../components/ContactForm';
import { FaqSection } from '../components/FaqSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

export const CremonaPage = () => {
  useDocumentHead({
    title: "Consulente Finanziario Cremona | Ilaria Fruchi",
    description: "Gestione patrimoniale, investimenti e pianificazione finanziaria personalizzata a Cremona. Richiedi un primo colloquio conoscitivo gratuito con Ilaria Fruchi.",
  });

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
      <HeroCremona />
      <ExpertiseCremona />
      <BiografiaSection />
      <TrustTestimonials />
      
      <CompoundCalculator />
      
      <div id="booking-section" className="scroll-mt-16">
        <BookingCalendar />
      </div>
      
      <ContactForm locationText="Consulenza finanziaria e patrimoniale per privati e aziende della zona di Cremona, disponibile anche comodamente da remoto." />
      
      <FaqSection />
    </main>
  );
};
