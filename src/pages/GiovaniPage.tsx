import { useId } from 'react';
import { Link } from 'react-router-dom';
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
          onSubmit={(e) => e.preventDefault()}
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
              placeholder="Es. circa 300 € al mese, ho già un fondo di emergenza, vorrei iniziare a investire..."
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-amber text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none"
          >
            Richiedi consulenza gratuita
          </button>

          <p className="text-[11px] text-stone-500 leading-tight mt-4">
            Inviando il modulo confermi il trattamento dei dati personali a norma
            di legge per finalità legate esclusivamente alla richiesta di contatto
            professionale.
          </p>
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
    title: 'Costanza prima di tutto',
    body: 'Il mercato sale e scende. Chi investe la stessa cifra ogni mese, indipendentemente dal momento, compra più quote quando i prezzi sono bassi e meno quando sono alti. Nel tempo, questa disciplina batte quasi sempre il tentativo di trovare il "momento giusto".',
  },
  {
    icon: Clock,
    title: 'Il tempo è la variabile più potente',
    body: 'L\'interesse composto funziona in modo esponenziale: i guadagni del primo anno diventano capitale, che genera ulteriori guadagni. Chi inizia a 25 anni con 200€ al mese arriva al pensionamento con un patrimonio molto superiore a chi inizia a 35 con 400€. Non si recupera il tempo perduto.',
  },
  {
    icon: Layers,
    title: 'Minimizzare i costi è già un rendimento',
    body: 'Una differenza di un solo punto percentuale nelle commissioni annue si traduce, su 30 anni, in decine di migliaia di euro di capitale in meno. Scegliere strumenti efficienti non è un dettaglio: è una delle leve più concrete a disposizione di qualunque investitore.',
  },
  {
    icon: ShieldCheck,
    title: 'Il capitale già accumulato merita un portafoglio su misura',
    body: 'I risparmi esistenti non devono solo "stare al sicuro": devono lavorare. Un portafoglio diversificato, costruito sulla tua reale propensione al rischio, protegge da perdite eccessive e cattura la crescita dei mercati nel lungo periodo.',
  },
  {
    icon: Target,
    title: 'Previdenza complementare: meglio prima che poi',
    body: 'Il sistema pensionistico pubblico è sotto pressione strutturale. Iniziare a costruire una rendita integrativa da giovani non significa rinunciare a qualcosa oggi: significa non dipendere da un sistema incerto domani. E farlo presto costa proporzionalmente molto meno.',
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
            Servizio dedicato · Fase di accumulo
          </p>
          <h1
            id="giovani-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Ogni mese metti da parte qualcosa.
            <br />
            <span className="text-gold-amber">
              Stai già facendo la cosa più difficile.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Riuscire a risparmiare una quota del proprio reddito non è scontato.
            Chi ci riesce ha in mano lo strumento più potente della finanza personale:
            il capitale da investire. Il passaggio successivo è farlo lavorare nel modo
            più efficiente possibile — e questo richiede metodo, non fortuna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-giovani"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Costruiamo il tuo piano
            </a>
            <Link
              to="/#calculator-section"
              onClick={() => window.scrollTo({ top: 0 })}
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-gold-amber transition-colors focus:outline-none"
            >
              Prova il simulatore di interessi
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
          <p className="text-text-secondary text-sm mb-10 max-w-xl">
            Simulazioni a scopo illustrativo con rendimento annuo del 4%,
            senza considerare l'inflazione. I rendimenti reali variano.
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
            Vuoi vedere la simulazione con i tuoi numeri?{' '}
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document
                    .getElementById('calculator-section')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="font-bold text-gold-amber hover:underline focus:outline-none"
            >
              Usa il simulatore nella home →
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
              "Nei mercati finanziari, la disciplina vale più dell'intelligenza.
              Chi investe con costanza nel lungo periodo, mantenendo costi bassi
              e aspettative realistiche, ottiene quasi sempre risultati migliori
              di chi cerca il momento perfetto per entrare o uscire."
            </p>
            <footer className="mt-4 text-sm font-bold text-text-primary not-italic">
              — Ilaria Fruchi, Consulente Finanziaria
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Form di contatto ── */}
      <ServiceContactForm />
    </main>
  );
};
