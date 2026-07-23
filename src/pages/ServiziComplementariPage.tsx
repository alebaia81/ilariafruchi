import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Landmark,
  Calendar,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Form di contatto per Servizi Complementari
───────────────────────────────────────────── */
const ServiceContactForm = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const privacyId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei un colloquio dedicato per valutare l'assetto patrimoniale, bancario e assicurativo. Note: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/393463470232?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-servizi-complementari"
      aria-labelledby="form-complementari-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-complementari-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Inizia il tuo percorso di tutela
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un colloquio dedicato per valutare se l’attuale assetto patrimoniale,
          bancario e assicurativo è in linea con i tuoi traguardi di vita.
        </p>

        <form
          className="space-y-4 text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor={nameId}
              className="block text-sm font-bold text-text-primary mb-1"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id={nameId}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-bold text-text-primary mb-1"
            >
              Indirizzo Email
            </label>
            <input
              type="email"
              id={emailId}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor={messageId}
              className="block text-sm font-bold text-text-primary mb-1"
            >
              Note o esigenze specifiche (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. Protezione personale e familiare, operatività bancaria, mutui e finanziamenti..."
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id={privacyId}
              required
              className="mt-1 w-4 h-4 shrink-0 accent-gold-amber cursor-pointer"
            />
            <label htmlFor={privacyId} className="text-sm text-text-secondary leading-snug cursor-pointer">
              Accetto il trattamento dei dati personali secondo la{' '}
              <a href="/privacy-policy" className="underline hover:text-text-primary focus:outline-none">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] text-[#1A1816] font-bold py-3 px-6 rounded-lg shadow-md hover:brightness-95 transition-all focus:outline-none min-h-[48px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Invia richiesta via WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Strumenti di tutela
───────────────────────────────────────────── */
const protectionTools = [
  {
    icon: ShieldCheck,
    title: 'Protezione assicurativa',
    body: 'Soluzioni mirate alla salvaguardia della persona, della famiglia e del patrimonio personale e aziendale per proteggere i progetti di vita da eventi imprevisti.',
  },
  {
    icon: CreditCard,
    title: 'Operatività bancaria completa',
    body: 'Conti correnti, carte di debito e strumenti di credito ordinari, per una gestione quotidiana fluida, semplice e sicura.',
  },
  {
    icon: Landmark,
    title: 'Linee di credito selezionate',
    body: 'Mutui e finanziamenti per progetti importanti legati alla valorizzazione degli investimenti complessivi.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const ServiziComplementariPage = () => {
  useDocumentHead({
    title: 'Operatività Bancaria e Servizi Complementari | Ilaria Fruchi',
    description:
      'Soluzioni assicurative, bancarie e di credito per una tutela a 360 gradi. Gestione integrata e personalizzata del patrimonio a Piacenza e Cremona.',
  });

  return (
    <main
      id="main-content"
      className="min-h-screen bg-bg-primary text-text-primary text-left"
    >
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-stone-200 px-4 py-3">
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

      {/* ── Hero ── */}
      <section
        aria-labelledby="complementari-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Operatività Bancaria e Servizi Complementari
          </p>
          <h1
            id="complementari-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Soluzioni assicurative, bancarie e di credito
            <br />
            <span className="text-brand-bordeaux">
              per una tutela a 360 gradi.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            L’esperienza maturata in diversi settori finanziari consente di spaziare nella gestione del cliente con una visione d’insieme. Trasversalità si traduce in una forte propensione alla gestione dinamica di tutte le necessità patrimoniali, offrendo un coordinamento sinergico che spazia dal credito alla protezione della persona.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-servizi-complementari"
              className="inline-flex items-center gap-2 bg-brand-bordeaux text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Inizia il tuo percorso di tutela
            </a>
            <Link
              to="/#booking-section"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-brand-bordeaux transition-colors focus:outline-none"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Prenota un appuntamento telefonico
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gli strumenti di tutela ── */}
      <section
        aria-labelledby="strumenti-title"
        className="py-16 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              id="strumenti-title"
              className="text-3xl font-extrabold text-text-primary tracking-tight mb-4"
            >
              Gli strumenti di tutela
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Soluzioni integrate per una gestione completa e coordinata del patrimonio personale, familiare e aziendale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protectionTools.map((tool) => (
              <div
                key={tool.title}
                className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-amber-50 text-gold-amber rounded-lg flex items-center justify-center mb-6">
                    <tool.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {tool.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form di contatto ── */}
      <ServiceContactForm />

      {/* ── CTA Booking ── */}
      <section className="bg-[#FCFAF7] py-16 px-4 border-t border-stone-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-text-primary mb-6">
            Vuoi approfondire la tua situazione?
          </h2>
          <Link
            to="/#booking-section"
            className="inline-flex items-center justify-center bg-brand-bordeaux text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-bordeaux"
          >
            Fissa una Call Conoscitiva
          </Link>
        </div>
      </section>
    </main>
  );
};
