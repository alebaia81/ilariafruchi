import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Clock,
  Layers,
  ShieldCheck,
  Repeat2,
  Phone,
  ArrowRight,
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei costruire un piano di accumulo. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/393463470232?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-giovani"
      aria-labelledby="form-giovani-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-giovani-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Costruiamo insieme il tuo piano
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un confronto gratuito, senza impegno. Ti mostro concretamente
          quanto può crescere il tuo risparmio mensile nel tempo.
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
              Quanto riesci a mettere da parte ogni mese? (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. circa 300 € al mese, ho già un fondo di emergenza, vorrei iniziare a investire..."
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
   Principi dell'accumulo intelligente
───────────────────────────────────────────── */
const principles = [
  {
    icon: Repeat2,
    title: 'Costanza nel tempo',
    body: 'Il mercato esprime naturali fluttuazioni. Investire con regolarità permette di mediare i prezzi di acquisto in modo automatico, indipendentemente dal momento. Questa disciplina valorizza il percorso, superando la difficoltà di dover individuare il “momento giusto”.',
  },
  {
    icon: Clock,
    title: 'La variabile tempo',
    body: 'L’interesse composto esprime la sua massima forza nel lungo periodo, poiché i risultati generati si consolidano nel tempo. Avviare un piano con anticipo, anche se con piccoli importi, offre prospettive superiori rispetto ad un inizio ritardato. Non si recupera il tempo perduto.',
  },
  {
    icon: Layers,
    title: 'Ottimizzazione e pianificazione',
    body: 'Una pianificazione attenta e strutturata fa la vera differenza nel lungo periodo. Scegliere soluzioni coordinate e coerenti con i propri obiettivi non è un dettaglio, ma una leva strategica fondamentale per valorizzare il patrimonio.',
  },
  {
    icon: ShieldCheck,
    title: 'Portafoglio su misura',
    body: 'I risparmi accumulati meritano di essere valorizzati. Un portafoglio diversificato, costruito sulla tua reale propensione al rischio, mira a tutelare il capitale nei momenti complessi e a catturare le opportunità di crescita nel tempo.',
  },
  {
    icon: Target,
    title: 'Pianificazione lungimirante',
    body: 'Costruire una stabilità per il domani richiede scelte consapevoli nel presente. Avviare un progetto di crescita patrimoniale con anticipo permette di consolidare i risultati nel tempo, riducendo l’impegno necessario e offrendo una maggiore serenità per il futuro.',
  },
];

/* ─────────────────────────────────────────────
   Simulazione illustrativa PAC
───────────────────────────────────────────── */
const pacExamples = [
  {
    monthly: '200 €/mese',
    years: '20 anni',
    versato: '48.000 €',
    risultato: '~73.600 €',
    rendimento: '4% annuo stimato',
  },
  {
    monthly: '200 €/mese',
    years: '30 anni',
    versato: '72.000 €',
    risultato: '~138.900 €',
    rendimento: '4% annuo stimato',
  },
  {
    monthly: '500 €/mese',
    years: '25 anni',
    versato: '150.000 €',
    risultato: '~256.000 €',
    rendimento: '4% annuo stimato',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const GiovaniPage = () => {
  useDocumentHead({
    title: 'Pianificazione Finanziaria per Giovani Risparmiatori | Ilaria Fruchi',
    description:
      "Inizia a pianificare il tuo futuro finanziario. Scopri l'interesse composto, piani di accumulo (PAC) e investimenti a lungo termine su misura per i giovani.",
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
        aria-labelledby="giovani-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Piani di Accumulo e Costruzione Capitale (PAC)
          </p>
          <h1
            id="giovani-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Piani di Accumulo e Costruzione Capitale (PAC)
            <br />
            <span className="text-brand-bordeaux">
              per dare valore nel tempo al tuo risparmio.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Riuscire ad accantonare una parte del proprio reddito è un passo importante, non scontato. Chi ci riesce ha a disposizione una risorsa fondamentale per il proprio futuro: il capitale da valorizzare. Il passaggio successivo è farlo lavorare con un metodo strategico e costante, orientato ai tuoi obiettivi e indipendente dall’andamento del momento. E’ una scelta che richiede metodo, non fortuna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-giovani"
              className="inline-flex items-center gap-2 bg-brand-bordeaux text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Costruiamo il tuo piano
            </a>
            <Link
              to="/#simulatore-interessi"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-brand-bordeaux transition-colors focus:outline-none"
            >
              Simula la crescita del tuo piano
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Simulazioni PAC ── */}
      <section
        aria-labelledby="pac-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="pac-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Cosa può diventare un risparmio mensile costante
          </h2>
          <p className="text-text-secondary text-xs mb-10 max-w-3xl leading-relaxed">
            I dati riportati costituiscono una simulazione puramente indicativa basata su un rendimento ipotetico costante. I rendimenti passati non sono indicativi di quelli futuri. La stima è calcolata al lordo degli oneri fiscali, dei costi di gestione dello strumento e dell’impatto dell’inflazione, elementi che possono ridurre il capitale finale effettivamente realizzato.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pacExamples.map((ex) => (
              <div
                key={ex.years + ex.monthly}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-xl font-extrabold text-text-primary mb-1">
                  {ex.monthly}
                </p>
                <p className="text-sm text-stone-500 mb-4">per {ex.years}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Versato totale</span>
                    <span className="font-bold text-text-primary">{ex.versato}</span>
                  </div>
                  <div className="h-px bg-stone-100" />
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Capitale finale</span>
                    <span className="font-extrabold text-emerald-600 text-base">
                      {ex.risultato}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 mt-3">{ex.rendimento}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone-500 text-center">
            Vuoi calcolare il tuo potenziale di risparmio?{' '}
            <Link
              to="/#simulatore-interessi"
              className="font-bold text-gold-amber hover:underline focus:outline-none"
            >
              Prova il simulatore.
            </Link>
          </p>
        </div>
      </section>

      {/* ── Principi ── */}
      <section
        aria-labelledby="principi-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="principi-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Le regole che fanno davvero la differenza
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Non servono strategie complesse. Servono le strategie giuste, applicate
            con metodo.
          </p>

          <div className="space-y-5">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm text-left flex gap-5 items-start"
              >
                <div className="shrink-0 w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center">
                  <p.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                    0{i + 1}
                  </p>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {p.body}
                  </p>
                </div>
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
              "Nei mercati finanziari, la disciplina e la costanza nel lungo periodo superano qualsiasi tentativo di rincorrere il momento perfetto. Il miglior momento per investire non esiste: ieri è tardi, oggi è l’unico momento reale per iniziare a proteggere e valorizzare i propri progetti."
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
