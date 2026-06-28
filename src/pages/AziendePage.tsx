import { useId } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Banknote,
  Users,
  TrendingUp,
  ShieldCheck,
  ScrollText,
  Calculator,
  Phone,
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
      id="contact-aziende"
      aria-labelledby="form-aziende-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-aziende-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Parliamo della tua azienda
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un primo confronto gratuito e riservato. Dalla gestione del TFR
          dei dipendenti alle operazioni straordinarie: ogni realtà aziendale
          ha le sue specificità.
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
              Nome e Cognome
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
              Email aziendale
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
              Di cosa ha bisogno la tua azienda? (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              placeholder="Es. voglio ottimizzare il TFR dei dipendenti, ho liquidità ferma sul conto corrente, sto valutando un'acquisizione..."
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-amber text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none"
          >
            Richiedi una consulenza aziendale
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
   Servizi principali
───────────────────────────────────────────── */
const services = [
  {
    icon: Users,
    tag: 'Welfare aziendale',
    title: 'TFR dei dipendenti: da passivo a strumento di valore',
    body: 'Il TFR lasciato in azienda genera rivalutazioni obbligatorie che pesano sul bilancio senza produrre valore per nessuno. Trasferirlo in un fondo pensione dedicato elimina questi oneri dalla contabilità aziendale e — contemporaneamente — trasforma una voce passiva in uno strumento di welfare concreto per i dipendenti. Una delle poche operazioni dove l\'interesse dell\'impresa e quello dei collaboratori coincidono perfettamente.',
  },
  {
    icon: Banknote,
    tag: 'Liquidità aziendale',
    title: 'La liquidità sul conto corrente non è mai neutra',
    body: 'Il capitale aziendale fermo sul conto corrente perde potere d\'acquisto ogni anno per effetto dell\'inflazione. Esistono strumenti specifici — a capitale garantito e con possibilità di liquidazione rapida — che permettono di far rendere la liquidità senza rinunciare alla flessibilità operativa. Una soluzione adatta a chi non vuole immobilizzare risorse ma non può permettersi di tenerle ferme.',
  },
  {
    icon: TrendingUp,
    tag: 'Operazioni straordinarie',
    title: 'Acquisizioni, cessioni e riorganizzazioni societarie',
    body: 'Quando l\'azienda affronta momenti di discontinuità — l\'acquisto di un concorrente, la vendita di un ramo d\'attività, un cambio generazionale — le decisioni finanziarie diventano strategiche. In questi casi mi avvalgo di un team specializzato messo a disposizione dalla struttura mandataria, con competenze specifiche per operazioni di M&A, valutazione d\'azienda e strutturazione delle transazioni.',
  },
  {
    icon: ShieldCheck,
    tag: 'Protezione patrimoniale',
    title: 'Separare il patrimonio personale dall\'impresa',
    body: 'L\'imprenditore che non separa il proprio patrimonio personale da quello aziendale si espone a rischi che spesso emergono solo quando è troppo tardi. Polizze imprenditoriali, trust, fiduciarie ed escrow agreement sono strumenti che creano confini netti e legalmente solidi — proteggendo sia il capitale privato sia gli asset aziendali da eventi avversi legati all\'attività.',
  },
  {
    icon: ScrollText,
    tag: 'Strumenti giuridici',
    title: 'Trust, fiduciarie ed escrow per le operazioni rilevanti',
    body: 'Il trust consente di separare e proteggere asset specifici seguendo indicazioni precise per la loro amministrazione futura. Le fiduciarie garantiscono riservatezza e ordine nella titolarità dei beni. L\'escrow agreement protegge le grandi transazioni commerciali — acquisto di immobili, aziende o beni di valore — assicurando che il pagamento avvenga solo al completamento delle condizioni concordate.',
  },
  {
    icon: Calculator,
    tag: 'Efficienza fiscale',
    title: 'Ottimizzazione fiscale in collaborazione con il commercialista',
    body: 'La fiscalità aziendale richiede competenze specialistiche che vanno oltre la consulenza finanziaria. Per questo lavoro in stretta collaborazione con commercialisti esperti: il mio contributo è garantire che le decisioni finanziarie siano strutturate in modo coerente con la strategia fiscale complessiva dell\'azienda, senza duplicazioni o inefficienze tra le due aree.',
  },
];

/* ─────────────────────────────────────────────
   Vantaggi TFR in cifre
───────────────────────────────────────────── */
const tfr_benefits = [
  {
    value: '0%',
    label: 'Oneri di rivalutazione',
    sub: 'Il fondo pensione elimina dal bilancio aziendale le rivalutazioni obbligatorie del TFR',
  },
  {
    value: '+',
    label: 'Welfare per i dipendenti',
    sub: 'Il TFR trasferito diventa un vantaggio tangibile per chi lavora in azienda',
  },
  {
    value: '↓',
    label: 'Rischio previdenziale aziendale',
    sub: 'La responsabilità sul TFR passa al fondo: meno esposizione per l\'impresa',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const AziendePage = () => {
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
        aria-labelledby="aziende-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Imprese e imprenditori
          </p>
          <h1
            id="aziende-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            L'azienda ha esigenze finanziarie proprie.
            <br />
            <span className="text-gold-amber">
              E l'imprenditore anche.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Gestire un'impresa significa muoversi su due piani contemporaneamente:
            la salute finanziaria dell'azienda e la tutela del patrimonio personale
            di chi la guida. Questi due livelli si intersecano in modi che spesso
            non emergono finché non si presenta un problema. Lavorare su entrambi
            in anticipo è l'unico approccio che funziona davvero.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-aziende"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Consulenza aziendale gratuita
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

      {/* ── TFR in cifre ── */}
      <section
        aria-labelledby="tfr-aziende-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="tfr-aziende-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Il TFR dei tuoi dipendenti: un costo che può diventare un vantaggio
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            È una delle poche operazioni in cui ottimizzare per l'azienda
            significa fare qualcosa di concreto anche per i dipendenti.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tfr_benefits.map((b) => (
              <div
                key={b.label}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-3xl font-extrabold text-text-primary mb-1">
                  {b.value}
                </p>
                <p className="text-sm font-bold text-text-primary mb-1">{b.label}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servizi principali ── */}
      <section
        aria-labelledby="servizi-aziende-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="servizi-aziende-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            I servizi disponibili per le imprese
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Dalla gestione ordinaria della liquidità alle operazioni straordinarie,
            fino alla tutela del patrimonio dell'imprenditore.
          </p>

          <div className="space-y-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-sm text-left flex gap-5 items-start"
              >
                <div className="shrink-0 w-10 h-10 bg-white text-gold-amber rounded-lg flex items-center justify-center border border-stone-200">
                  <s.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-1">
                    {s.tag}
                  </p>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.body}
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
              "L'imprenditore che affronta la propria situazione finanziaria
              solo in termini aziendali rischia di trascurare il patrimonio
              personale. E chi pensa solo a sé stesso spesso non ottimizza
              le opportunità che l'azienda offre. La consulenza che funziona
              è quella che guarda entrambi i livelli insieme."
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
