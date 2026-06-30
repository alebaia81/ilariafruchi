import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  Percent,
  BadgeEuro,
  CheckCircle2,
  Phone,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Mini contact form inline per la pagina
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei richiedere un'analisi del mio TFR. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-dipendenti"
      aria-labelledby="form-dipendenti-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-dipendenti-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Richiedi un'analisi del tuo TFR
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un confronto gratuito e senza impegno. Ti mostro i numeri del tuo caso specifico.
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
              Anni di contributi versati (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. lavoro da 8 anni presso la stessa azienda, ho il TFR in azienda..."
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
   Dati comparativi TFR
───────────────────────────────────────────── */
const stats = [
  {
    icon: TrendingUp,
    value: '+3,5%',
    label: 'Rendimento medio annuo',
    sub: 'Linea bilanciata del fondo pensione negli ultimi 20 anni',
  },
  {
    icon: Percent,
    value: '1,7%',
    label: 'Rivalutazione TFR in azienda',
    sub: 'Media storica della rivalutazione legale lasciando il TFR al datore',
  },
  {
    icon: BadgeEuro,
    value: '9%',
    label: 'Aliquota minima sul riscatto',
    sub: 'Raggiungibile nel fondo pensione dopo 35 anni di partecipazione',
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Nessun esborso dal tuo stipendio',
    body: 'Il TFR è accantonato dall\'azienda per legge: scegliere dove mandarlo non costa nulla di più. È una decisione, non una spesa.',
  },
  {
    icon: PiggyBank,
    title: 'Deducibilità fiscale dei versamenti volontari',
    body: 'Ogni euro versato volontariamente nel fondo pensione fino a 5.164,57 € annui è deducibile dal reddito imponibile: il Fisco ti restituisce una parte di quanto investi.',
  },
  {
    icon: Percent,
    title: 'Tassazione agevolata sulle plusvalenze',
    body: 'I guadagni all\'interno del fondo pensione scontano un\'imposta sostitutiva del 20%, contro il 26% degli strumenti finanziari classici.',
  },
  {
    icon: BadgeEuro,
    title: 'Montante escluso dal calcolo ISEE',
    body: 'Il capitale accumulato nel fondo pensione non rientra nel calcolo ISEE: non penalizza eventuali agevolazioni, bonus o prestazioni sociali legate al reddito.',
  },
  {
    icon: CheckCircle2,
    title: 'Nessuna imposta di bollo',
    body: 'A differenza dei conti titoli o dei fondi comuni ordinari, il fondo pensione non è soggetto all\'imposta di bollo annua dello 0,2% sul capitale.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const DipendentiPage = () => {
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

      {/* ── Hero sezione ── */}
      <section
        aria-labelledby="dipendenti-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Lavoratori dipendenti
          </p>
          <h1
            id="dipendenti-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Il TFR che lasci dormire in azienda
            <br />
            <span className="text-gold-amber">ti costa molto più di quanto pensi.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Come dipendente hai accesso a uno strumento che quasi nessun altro investitore
            può sfruttare: il versamento del TFR da parte dell'azienda a tuo favore.
            Il problema non è avercelo — il problema è non sapere dove mandarlo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-dipendenti"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Analisi gratuita del tuo TFR
            </a>
            <a
              href="tel:+390523123456"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-gold-amber transition-colors focus:outline-none"
            >
              Chiamami direttamente
            </a>
          </div>
        </div>
      </section>

      {/* ── Blocco statistiche ── */}
      <section
        aria-labelledby="stats-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="stats-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            I dati storici parlano chiaro
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-xl">
            Prima di qualunque valutazione personale, ecco cosa dice la storia degli
            ultimi vent'anni.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-3xl font-extrabold text-text-primary mb-1">
                  {s.value}
                </p>
                <p className="text-sm font-bold text-text-primary mb-1">{s.label}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Esempio numeri concreti ── */}
      <section
        aria-labelledby="esempio-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="esempio-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Un esempio per capire la differenza
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Ipotizziamo, per semplicità, che i rendimenti siano identici in entrambi i
            casi — anche se storicamente il fondo pensione ha fatto meglio. La differenza
            è solo fiscale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TFR in azienda */}
            <div className="rounded-2xl border-2 border-stone-200 p-8 text-left bg-stone-50">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                Scenario A
              </p>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                TFR lasciato in azienda
              </h3>
              <p className="text-sm text-stone-500 mb-6">
                Al momento del pensionamento, il TFR erogato in busta paga è soggetto
                a tassazione ordinaria IRPEF (aliquota media degli ultimi 5 anni).
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Capitale accumulato</span>
                  <span className="font-bold text-text-primary">€ 100.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Tassazione applicata</span>
                  <span className="font-bold text-red-600">fino al 43%</span>
                </div>
                <div className="h-px bg-stone-200" />
                <div className="flex justify-between">
                  <span className="font-bold text-text-primary">Netto in tasca</span>
                  <span className="text-2xl font-extrabold text-red-600">€ 57.000</span>
                </div>
              </div>
            </div>

            {/* TFR nel fondo pensione */}
            <div className="rounded-2xl border-2 border-gold-amber p-8 text-left bg-white shadow-md">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-3">
                Scenario B
              </p>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                TFR nel fondo pensione
              </h3>
              <p className="text-sm text-stone-500 mb-6">
                Dopo 35 anni di partecipazione, l'aliquota sul riscatto scende al 9%.
                Un'agevolazione prevista dalla legge, riservata a chi ha scelto in tempo.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Capitale accumulato</span>
                  <span className="font-bold text-text-primary">€ 100.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Tassazione applicata</span>
                  <span className="font-bold text-emerald-600">dal 9% al 15%</span>
                </div>
                <div className="h-px bg-stone-200" />
                <div className="flex justify-between">
                  <span className="font-bold text-text-primary">Netto in tasca</span>
                  <span className="text-2xl font-extrabold text-emerald-600">€ 91.000</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4">
                * A parità di rendimento: la differenza è solo fiscale e dipende
                dall'anticipo con cui si sottoscrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ulteriori vantaggi ── */}
      <section
        aria-labelledby="vantaggi-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="vantaggi-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Oltre alla tassazione: tutto ciò che il fondo pensione porta con sé
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Il confronto fiscale è il più immediato, ma non è l'unico argomento.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-3">
                  <adv.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">{adv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nota finale ── */}
      <section className="py-12 px-4 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-left">
          <blockquote className="border-l-4 border-gold-amber pl-6">
            <p className="text-lg text-text-secondary leading-relaxed italic">
              "Il fondo pensione non è uno strumento per tutti i gusti: le somme non
              sono sempre disponibili in modo immediato. Ma per chi ha un orizzonte
              temporale lungo e vuole costruire un patrimonio previdenziale efficiente,
              è difficile trovare qualcosa di comparabile in termini di vantaggi fiscali
              e di costo reale."
            </p>
            <footer className="mt-4 text-sm font-bold text-text-primary not-italic">
              — Ilaria Fruchi, Consulente Finanziaria
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Form di contatto inline ── */}
      <ServiceContactForm />
      {/* ── CTA Booking ── */}
      <section className="bg-[#FCFAF7] py-16 px-4 border-t border-stone-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-text-primary mb-6">
            Vuoi approfondire la tua situazione?
          </h2>
          <Link
            to="/#booking-section"
            className="inline-flex items-center justify-center bg-gold-amber text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-amber"
          >
            Fissa una Call Conoscitiva
          </Link>
        </div>
      </section>
    </main>
  );
};
