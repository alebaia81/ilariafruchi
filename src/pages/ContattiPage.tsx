import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BookingCalendar } from '../components/BookingCalendar';
import { useDocumentHead } from '../hooks/useDocumentHead';

export const ContattiPage = () => {
  useDocumentHead({
    title: 'Contatti | Ilaria Fruchi - Consulente Finanziario',
    description:
      'Prenota una consulenza conoscitiva gratuita con Ilaria Fruchi. Calendario appuntamenti online per Piacenza, Cremona e videoconferenza.',
  });

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
      {/* ── Breadcrumb / torna alla home ── */}
      <div className="bg-white border-b border-stone-200 px-4 py-3 text-left">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-text-primary transition-colors focus:outline-none group"
          >
            <ArrowLeft
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              aria-hidden="true"
            />
            Torna alla home
          </Link>
        </div>
      </div>

      <div className="py-12 bg-stone-50 text-left">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Contatti e Appuntamenti
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
            Pianifica un colloquio conoscitivo gratuito
          </h1>
          <p className="text-text-secondary max-w-xl mb-8">
            Seleziona l'area di interesse, scegli il giorno e l'orario che preferisci ed inserisci il tuo nome per inviare la richiesta di prenotazione direttamente via WhatsApp.
          </p>
        </div>
      </div>

      <div className="bg-bg-primary">
        <BookingCalendar />
      </div>
    </main>
  );
};
