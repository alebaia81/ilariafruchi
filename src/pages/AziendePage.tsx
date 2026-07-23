import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  ArrowLeft,
  Briefcase,
  Coins,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Form di contatto specifico per Aziende
   ───────────────────────────────────────────── */
const ServiceContactForm = () => {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();
  const privacyId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Ciao Ilaria, sono ${name} dell'azienda ${company} (${email}). Vorrei informazioni sulla pianificazione patrimoniale aziendale. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/393463470232?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-aziende"
      aria-labelledby="form-aziende-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-aziende-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Richiedi una consulenza aziendale
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un colloquio riservato e senza impegno. Analizziamo insieme le soluzioni migliori per la tua impresa.
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
              Nome e Cognome
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
              htmlFor={companyId}
              className="block text-sm font-bold text-text-primary mb-1"
            >
              Ragione Sociale / Nome Azienda
            </label>
            <input
              type="text"
              id={companyId}
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-bold text-text-primary mb-1"
            >
              Email Aziendale
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
              Esigenze o domande (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. Gestione liquidità aziendale, attivazione TFM..."
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

const businessAreas = [
  {
    icon: Briefcase,
    title: 'Gestione del TFR dei dipendenti',
    body: 'Soluzioni strategiche per l’accantonamento e la valorizzazione del Trattamento di Fine Rapporto (TFR). Questa scelta garantisce importanti benefici fiscali e contributivi per la società, ottimizza la liquidità aziendale e riduce l’esborso finanziario immediato al momento della cessazione del rapporto di lavoro.',
  },
  {
    icon: ShieldCheck,
    title: 'Tutela patrimoniale dell’imprenditore',
    body: 'Protezione del patrimonio personale dai rischi d’impresa. Attraverso la collaborazione con le divisioni e la società fiduciaria della Mandante, la consulenza integra soluzioni evolute come small trust, mandati fiduciari e formule assicurative dedicate.',
  },
  {
    icon: Coins,
    title: 'Gestione della liquidità aziendale',
    body: 'Ottimizzazione delle riserve monetarie e dei flussi di cassa societari. Un approccio mirato alla stabilità e alla protezione del capitale, per preservare il valore della liquidità aziendale nel tempo.',
  },
];

export const AziendePage = () => {
  useDocumentHead({
    title: 'Pianificazione Patrimoniale Aziende | Ilaria Fruchi',
    description:
      'Soluzioni patrimoniali dedicate alle imprese a Piacenza e Cremona. Gestione efficiente della liquidità aziendale, ottimizzazione fiscale con TFM e tutela della tesoreria.',
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
        aria-labelledby="aziende-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizi alle Imprese
          </p>
          <h1
            id="aziende-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Servizi alle imprese
            <br />
            <span className="text-brand-bordeaux">e agli imprenditori</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Soluzioni strategiche per imprese e imprenditori: protezione del patrimonio personale dai rischi aziendali, gestione della liquidità e ottimizzazione del TFR.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-aziende"
              className="inline-flex items-center gap-2 bg-brand-bordeaux text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            >
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              Richiedi una consulenza aziendale
            </a>
            <a
              href="https://wa.me/393463470232?text=Ciao%20Ilaria%2C%20vorrei%20prenotare%20un%20appuntamento%20telefonico%20per%20una%20consulenza."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-brand-bordeaux transition-colors focus:outline-none"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" aria-hidden="true" />
              Prenota un appuntamento telefonico
            </a>
          </div>
        </div>
      </section>

      {/* ── Aree d'intervento ── */}
      <section
        aria-labelledby="intervento-title"
        className="py-16 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              id="intervento-title"
              className="text-3xl font-extrabold text-text-primary tracking-tight mb-4"
            >
              Soluzioni strategiche per la tua impresa
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Dalla liquidità eccedente alla tutela degli amministratori: strumenti e consulenza dedicati a ottimizzare ogni aspetto del patrimonio aziendale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-amber-50 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perché agire ora ── */}
      <section
        aria-labelledby="benefici-title"
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="benefici-title"
            className="text-3xl font-extrabold text-text-primary tracking-tight mb-8"
          >
            I vantaggi di una pianificazione aziendale mirata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                t: 'Efficienza fiscale',
                d: 'Massimizza i benefici fiscali con soluzioni di pianificazione previdenziale dedicate ad amministratori e soci',
              },
              {
                t: 'Previdenza per i dipendenti',
                d: 'Soluzioni strategiche per l’accantonamento e la valorizzazione del TFR, garantendo stabilità e i vantaggi legati alla previdenza.',
              },
              {
                t: 'Tutela imprenditoriale e patrimoniale',
                d: 'Strumenti mirati alla protezione della tesoreria e del patrimonio personale, isolandoli dai potenziali rischi legati all’attività d’impresa.',
              },
              {
                t: 'Ottimizzazione e liquidità aziendale',
                d: 'Ottimizzazione della tesoreria e della cassa aziendale in base alle scadenze, proteggendo il potere di acquisto della liquidità.',
              },
            ].map((item) => (
              <div key={item.t} className="flex gap-3 text-left">
                <CheckCircle2
                  className="w-5 h-5 text-gold-amber shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">{item.t}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <ServiceContactForm />
    </main>
  );
};
