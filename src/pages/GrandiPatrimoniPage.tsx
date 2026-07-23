import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  ArrowLeft,
  BarChart3,
  ShieldCheck,
  Building2,
  ScrollText,
  Landmark,
  Lock,
  Users,
  RefreshCw,
  Phone,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Form di contatto specifico per questa pagina
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei prenotare un colloquio riservato sulla gestione del patrimonio. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/393463470232?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-patrimoni"
      aria-labelledby="form-patrimoni-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-patrimoni-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left uppercase"
        >
          PRENOTA UN COLLOQUIO RISERVATO
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un primo incontro conoscitivo e strettamente confidenziale, finalizzato a valutare le specifiche esigenze patrimoniali.
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
              Di cosa vorresti parlare? (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. ho un portafoglio esistente da rivedere, sto valutando la cessione di un'azienda, voglio pianificare la successione..."
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
            className="w-full bg-[#25D366] text-[#1A1816] font-bold py-3 px-6 rounded-lg shadow-md hover:brightness-95 transition-all focus:outline-none min-h-[48px] flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Contattami su WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Aree di intervento
───────────────────────────────────────────── */
const areas = [
  {
    icon: BarChart3,
    title: 'Portafoglio e ottimizzazione della struttura',
    body: 'Strutture patrimoniali articolate richiedono un’architettura finanziaria mirata. L’analisi si concentra sulla coerenza e sulla solidità degli investimenti, valorizzando la diversificazione strategica. Ottimizzare la struttura significa garantire che ogni asset contribuisca pienamente alla crescita e alla stabilità del patrimonio nel tempo.',
  },
  {
    icon: ShieldCheck,
    title: 'Polizze assicurative di investimento',
    body: 'Le soluzioni assicurative di ramo I e III uniscono investimento e tutela del capitale. Grazie ai benefici di impignorabilità e insequestrabilità previsti dalla legge, offrono importanti vantaggi successori, consentendo di designare beneficiari specifici anche al di fuori dell’asse ereditario ordinario e di accedere ad un trattamento fiscale favorevole.',
  },
  {
    icon: ScrollText,
    title: 'Trust e strumenti fiduciari',
    body: 'Quando gli strumenti ordinari non bastano a pianificare il futuro patrimoniale, il trust e i mandati fiduciari offrono una tutela avanzata. Avvalendosi delle strutture specializzate e dei servizi fiduciari della Società Mandante è possibile stabilire con precisione come gestire e distribuire le risorse nel tempo, rispondendo efficacemente a esigenze di massima riservatezza o a situazioni familiari complesse.',
  },
  {
    icon: Building2,
    title: 'Cessione e acquisizione di aziende',
    body: 'Il passaggio di proprietà o la vendita di un’azienda sono operazioni straordinarie che richiedono massima precisione. La consulenza accompagna l’imprenditore in ogni fase, integrando le competenze sul territorio con le soluzioni di Private Wealth Management (PWM) e le divisioni dedicate della Mandante per la pianificazione fiscale, la corretta strutturazione contrattuale e l’utilizzo di strumenti di tutela transazionale come gli escrow agreement.',
  },
  {
    icon: Landmark,
    title: 'Patrimonio immobiliare e beni di lusso',
    body: 'Immobili, opere d’arte e beni di pregio rispondono a logiche diverse rispetto ai mercati finanziari. La consulenza offre le competenze specialistiche necessarie per mappare e valorizzare questi asset, pianificarne il passaggio generazionale e valutarne correttamente l’impatto complessivo sull’architettura patrimoniale.',
  },
  {
    icon: Lock,
    title: 'Fiduciarie e riservatezza',
    body: 'Per rispondere ad esigenze di massima tutela da rischi esterni e garantire la massima riservatezza, l’amministrazione fiduciaria rappresenta uno strumento d’elezione. Attraverso la collaborazione con la società fiduciaria della Mandante, è possibile intestare e gestire beni e investimenti in modo protetto, sicuro e nel rigoroso rispetto delle normative vigenti.',
  },
];

/* ─────────────────────────────────────────────
   Elementi differenzianti
───────────────────────────────────────────── */
const differentiators = [
  {
    icon: RefreshCw,
    title: 'Monitoraggio e adattamento costante',
    body: 'Una struttura patrimoniale complessa richiede un’evoluzione continua. Lo scenario dei mercati, le normative fiscali e le tue priorità cambiano nel tempo. Per questo la revisione periodica e l’adattamento della strategia sono passaggi fondamentali per garantire stabilità e sicurezza a lungo termine.',
  },
  {
    icon: Users,
    title: 'Coordinamento con i professionisti di settore',
    body: 'La gestione di patrimoni complessi non opera mai in isolamento, ma in collaborazione con gli esperti del settore (notai, avvocati, commercialisti, agenti immobiliari) scelti dal Cliente e di sua fiducia. Questo approccio integrato garantisce coerenza tra le decisioni finanziarie, legali e quelle fiscali.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const GrandiPatrimoniPage = () => {
  useDocumentHead({
    title: 'Consulenza Patrimoniale per Grandi Patrimoni e Aziende | Ilaria Fruchi',
    description:
      'Servizi di Family Office, tutela patrimoniale, passaggi generazionali e gestione tesoreria aziendale. Consulenza finanziaria sartoriale ad alto valore.',
  });

  return (
    <main
      id="main-content"
      className="min-h-screen bg-bg-primary text-text-primary"
    >
      {/* ── Breadcrumb / torna alla home ── */}
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
        aria-labelledby="patrimoni-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Passaggio Generazionale & Grandi Patrimoni
          </p>
          <h1
            id="patrimoni-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Passaggio Generazionale & Grandi Patrimoni
            <br />
            <span className="text-brand-bordeaux">soluzioni strategiche su misura.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Oltre una certa soglia, la gestione patrimoniale supera la semplice selezione di fondi per diventare una questione di architettura: protezione legale, efficienza fiscale, pianificazione successoria, coordinamento strategico fra diverse asset class. Ogni decisione ha un impatto profondo sull’intero patrimonio e sulle persone coinvolte.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-patrimoni"
              className="inline-flex items-center gap-2 bg-brand-bordeaux text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Prenota un colloquio privato
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

      {/* ── Cosa differenzia questo servizio ── */}
      <section
        aria-labelledby="approccio-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="approccio-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Non solo investimenti
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            La gestione dei grandi patrimoni supera la scelta dei singoli investimenti. Abbraccia ogni fase della vita del patrimonio: dalla protezione all’efficienza nella crescita, fino alla pianificazione del passaggio generazionale e alla gestione delle operazioni straordinarie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-xl border-2 border-gold-amber p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strumenti avanzati ── */}
      <section
        aria-labelledby="strumenti-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="strumenti-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Gli strumenti a disposizione
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Dalla protezione legale del capitale alle operazioni straordinarie:
            un repertorio di soluzioni per ogni esigenza patrimoniale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-white text-gold-amber rounded-lg flex items-center justify-center mb-4 border border-stone-200">
                  <area.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Citazione ── */}
      <section className="py-12 px-4 bg-stone-50 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-left">
          <blockquote className="border-l-4 border-gold-amber pl-6">
            <p className="text-lg text-text-secondary leading-relaxed italic">
              “Oltre determinate soglie, ogni decisione patrimoniale genera un impatto reale che richiede massima attenzione. Il ruolo della consulenza non si limita alla selezione dei singoli strumenti, ma consiste nel coordinare aspetti legali, fiscali e finanziari affinchè operino come un sistema coerente – oggi e per le generazioni future”.
            </p>
            <footer className="mt-4 text-sm font-bold text-text-primary not-italic">
              — Ilaria Fruchi, Consulente Finanziaria
            </footer>
          </blockquote>
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
