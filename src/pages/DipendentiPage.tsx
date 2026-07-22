import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  ArrowLeft,
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
    const whatsappUrl = `https://wa.me/393463470232?text=${encodeURIComponent(text)}`;
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
          Pianifica la tua previdenza
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un colloquio dedicato e senza impegno per analizzare le tue prospettive e valorizzare il tuo futuro pensionistico.
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



const advantages = [
  {
    icon: ShieldCheck,
    title: 'Nessun esborso dal tuo stipendio',
    body: 'Il TFR è una quota già accantonata dal datore di lavoro per legge. Scegliere dove destinarlo è una decisione, non una spesa aggiuntiva.',
  },
  {
    icon: PiggyBank,
    title: 'Deducibilità fiscale dei versamenti volontari',
    body: 'Ogni euro versato volontariamente nel fondo pensione, fino al limite massimo di 5.300,00 euro annui, è deducibile dal reddito imponibile. Questo ti permette di accedere subito ad un importante risparmio d’imposta in sede di dichiarazione dei redditi.',
  },
  {
    icon: Percent,
    title: 'Tassazione agevolata sulle plusvalenze',
    body: 'I rendimenti generati all’interno del fondo pensione scontano un’imposta sostitutiva del 20% (che scende al 12,5% per la quota investita in Titoli di Stato), a fronte del 26% ordinario degli altri strumenti finanziari.',
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
  useDocumentHead({
    title: 'Previdenza Complementare e TFR per Dipendenti | Ilaria Fruchi',
    description:
      'Ottimizza il tuo TFR e scopri i vantaggi fiscali dei fondi pensione. Consulenza patrimoniale e previdenziale personalizzata per lavoratori dipendenti.',
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

      {/* ── Hero sezione ── */}
      <section
        aria-labelledby="dipendenti-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Pianificazione Previdenziale & TFR
          </p>
          <h1
            id="dipendenti-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Pianificazione Previdenziale & TFR
            <br />
            <span className="text-gold-amber">per un futuro sereno e sicuro.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Come lavoratore dipendente hai a disposizione un asset straordinario per la costruzione della tua ricchezza: il trattamento di fine rapporto. Questa risorsa alimentata regolarmente, rappresenta una base solida che merita una gestione strategica. La vera sfida non è l’accumulo, ma saper indirizzare il proprio TFR verso le soluzioni più efficienti per massimizzarne il rendimento e proteggere il proprio domani.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-dipendenti"
              className="inline-flex items-center gap-2 bg-brand-bordeaux text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              PIANIFICA LA TUA PREVIDENZA
            </a>
            <a
              href="tel:+393463470232"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-brand-bordeaux transition-colors focus:outline-none"
            >
              Prenota un appuntamento telefonico
            </a>
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

          <p className="text-xs text-stone-400 mt-8 leading-relaxed text-left border-t border-stone-250 pt-4">
            * Nota informativa: I dati riportati rappresentano una simulazione puramente indicativa a scopo illustrativo. L’esempio è calcolato al lordo dei costi di gestione e al netto dell’imposta sostitutiva sui rendimenti finanziari annuali, applicata secondo le rispettive normative vigenti per il TFR in azienda e per le forme pensionistiche complementari.
          </p>
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
              "La previdenza complementare risponde ad una scelta lungimirante. Per chi si focalizza su un orizzonte temporale di lungo periodo e desidera costruire una stabilità futura, rappresenta una soluzione fondamentale, capace di offrire importanti tutele e un impianto fiscale fortemente agevolato."
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
            className="inline-flex items-center justify-center bg-brand-bordeaux text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-bordeaux"
          >
            Fissa una Call Conoscitiva
          </Link>
        </div>
      </section>
    </main>
  );
};
