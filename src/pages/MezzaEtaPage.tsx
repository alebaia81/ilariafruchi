import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  BarChart2,
  SlidersHorizontal,
  RefreshCw,
  TrendingDown,
  Briefcase,
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei rivedere il mio portafoglio. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-mezza-eta"
      aria-labelledby="form-mezza-eta-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-mezza-eta-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Rivediamo il tuo portafoglio insieme
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un confronto gratuito e senza impegno per valutare se la struttura
          attuale del tuo patrimonio è ancora allineata ai tuoi obiettivi.
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
              Descrivimi la tua situazione attuale (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. ho un portafoglio fondi che non ho mai rivisto, ho ricevuto un'eredità, voglio capire se sto rischiando troppo..."
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
   Le due fasi a confronto
───────────────────────────────────────────── */
const phases = [
  {
    label: 'Fase di accumulo',
    icon: BarChart2,
    color: 'border-stone-300',
    accent: 'text-stone-500',
    points: [
      'Orizzonte temporale lungo: il mercato ha tempo per recuperare',
      'Priorità alla crescita del capitale',
      'Volatilità tollerabile: le oscillazioni si assorbono nel tempo',
      'Versamenti periodici che sfruttano i cali come opportunità',
    ],
  },
  {
    label: 'Fase di gestione',
    icon: Shield,
    color: 'border-gold-amber',
    accent: 'text-gold-amber',
    points: [
      'Orizzonte temporale più contenuto: il tempo di recupero si accorcia',
      'Priorità alla protezione e alla stabilità del capitale',
      'Volatilità da ridurre: stessa oscillazione percentuale, impatto reale maggiore',
      'Struttura del portafoglio da riallineare agli obiettivi attuali',
    ],
  },
];

/* ─────────────────────────────────────────────
   Strumenti e approcci
───────────────────────────────────────────── */
const tools = [
  {
    icon: SlidersHorizontal,
    title: 'Ribilanciamento del portafoglio',
    body: 'Quando la composizione originale del portafoglio cambia per effetto dei mercati, alcune asset class diventano sovrarappresentate. Il ribilanciamento periodico riporta il rischio reale al livello desiderato — senza aspettare che le oscillazioni diventino problemi.',
  },
  {
    icon: TrendingDown,
    title: 'Riduzione progressiva della volatilità',
    body: 'Man mano che l\'orizzonte temporale si accorcia, la tolleranza al rischio cambia. Un portafoglio che funzionava a 35 anni può essere inadeguato a 50. Ridurre l\'esposizione azionaria in modo graduale e controllato è una scelta strategica, non una rinuncia.',
  },
  {
    icon: Briefcase,
    title: 'Strumenti di gestione avanzata',
    body: 'Gestioni patrimoniali, private equity e investimenti alternativi offrono una diversificazione che va oltre i mercati quotidiani. Permettono di accedere a rendimenti decorrelati dall\'andamento di borsa, riducendo l\'impatto delle fasi di turbolenza.',
  },
  {
    icon: RefreshCw,
    title: 'Monitoraggio e adattamento continui',
    body: 'Il patrimonio non si gestisce una volta sola. Le condizioni di mercato evolvono, le esigenze personali cambiano, gli obiettivi si ridefiniscono. Una strategia efficace è quella che prevede revisioni periodiche e la flessibilità di correggere la rotta quando necessario.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const MezzaEtaPage = () => {
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
        aria-labelledby="mezza-eta-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Ottimizzazione e Gestione Risorse
          </p>
          <h1
            id="mezza-eta-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Ottimizzazione e Gestione Risorse
            <br />
            <span className="text-gold-amber">
              per proteggere e valorizzare il tuo patrimonio.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            C'è un momento nella vita finanziaria in cui la domanda non è più
            "come faccio crescere il capitale?" ma "come lo proteggo senza
            rinunciare a farlo lavorare?". Riconoscere questo passaggio — e
            strutturare il portafoglio di conseguenza — è una delle decisioni
            più rilevanti che un investitore possa prendere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-mezza-eta"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Analisi gratuita del portafoglio
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

      {/* ── Le due fasi ── */}
      <section
        aria-labelledby="fasi-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="fasi-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Due fasi, due logiche completamente diverse
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Usare la stessa strategia in fasi diverse della vita finanziaria
            è uno degli errori più comuni — e più costosi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.label}
                className={`bg-white rounded-2xl border-2 ${phase.color} p-8 text-left shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                    <phase.icon className={`w-5 h-5 ${phase.accent}`} aria-hidden="true" />
                  </div>
                  <h3 className={`text-lg font-bold ${phase.accent}`}>
                    {phase.label}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volatilità e numeri ── */}
      <section
        aria-labelledby="volatilita-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="volatilita-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Perché la stessa oscillazione pesa di più quando il capitale cresce
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Non è una questione psicologica. È aritmetica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scenario basso capitale */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                Fase di accumulo
              </p>
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Calo del 10% su un portafoglio da 30.000 €
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Perdita effettiva</span>
                  <span className="font-bold text-text-primary">− 3.000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Impatto psicologico</span>
                  <span className="font-bold text-text-primary">Tollerabile</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tempo di recupero stimato</span>
                  <span className="font-bold text-text-primary">1–2 anni</span>
                </div>
              </div>
            </div>

            {/* Scenario alto capitale */}
            <div className="bg-white rounded-2xl border-2 border-gold-amber p-8 text-left shadow-md">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-3">
                Fase di gestione
              </p>
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Calo del 10% su un portafoglio da 300.000 €
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Perdita effettiva</span>
                  <span className="font-bold text-red-600">− 30.000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Impatto psicologico</span>
                  <span className="font-bold text-red-600">Significativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Orizzonte temporale rimasto</span>
                  <span className="font-bold text-red-600">Più breve</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4">
                * Stessa percentuale. Impatto reale dieci volte superiore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strumenti e approcci ── */}
      <section
        aria-labelledby="strumenti-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="strumenti-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Come si gestisce un patrimonio in questa fase
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Strumenti diversi, obiettivo comune: rendimento stabile e rischio
            sotto controllo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Citazione ── */}
      <section className="py-12 px-4 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-left">
          <blockquote className="border-l-4 border-gold-amber pl-6">
            <p className="text-lg text-text-secondary leading-relaxed italic">
              "Nella gestione del patrimonio non esiste un assetto definitivo.
              Le condizioni di mercato cambiano, le esigenze personali evolvono
              e gli obiettivi si ridefiniscono nel tempo. Un buon piano è quello
              che prevede revisioni periodiche — non per inseguire i mercati,
              ma per verificare che la strategia sia ancora allineata a dove
              si vuole arrivare."
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
            className="inline-flex items-center justify-center bg-gold-amber text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-amber"
          >
            Fissa una Call Conoscitiva
          </Link>
        </div>
      </section>
    </main>
  );
};
