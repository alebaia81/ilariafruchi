import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Layers,
  SlidersHorizontal,
  Target,
  EyeOff,
  BadgeCheck,
  FileUp,
  Mail,
  MessageCircle,
  CheckCircle2,
  Phone,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Form di richiesta analisi
───────────────────────────────────────────── */
const AnalysisForm = () => {
  const nameId = useId();
  const emailId = useId();
  const notesId = useId();
  const privacyId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei richiedere un'analisi gratuita del mio portafoglio. Note: ${notes || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="richiedi-analisi"
      aria-labelledby="form-analisi-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="form-analisi-title"
            className="text-3xl font-extrabold text-text-primary mb-3"
          >
            Richiedi la tua analisi gratuita
          </h2>
          <p className="text-text-secondary">
            Compila il form oppure inviami direttamente i tuoi documenti
            via email o WhatsApp. Non è richiesto alcun impegno.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
          <form
            className="space-y-5 text-left"
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
                htmlFor={notesId}
                className="block text-sm font-bold text-text-primary mb-1"
              >
                Descrivimi brevemente la tua situazione (Opzionale)
              </label>
              <textarea
                id={notesId}
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Es. ho un portafoglio con la mia banca attuale, ho fondi e polizze di cui non conosco i costi reali, voglio capire se sto investendo bene..."
                className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
              />
            </div>

            {/* Upload file */}
            <div className="border-2 border-dashed border-stone-300 rounded-xl p-6 text-center hover:border-gold-amber transition-colors cursor-pointer">
              <FileUp className="w-8 h-8 text-stone-400 mx-auto mb-2" aria-hidden="true" />
              <p className="text-sm font-bold text-text-primary mb-1">
                Allega il rendiconto del tuo portafoglio
              </p>
              <p className="text-xs text-stone-500">
                PDF, immagine o screenshot dei report bancari — opzionale
              </p>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="sr-only"
                aria-label="Carica rendiconto portafoglio"
              />
            </div>

            {/* Consenso GDPR */}
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
              className="w-full bg-[#25D366] text-[#1A1816] font-bold py-3.5 px-6 rounded-lg shadow-md hover:brightness-95 transition-all focus:outline-none min-h-[48px] flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Contattami su WhatsApp</span>
            </button>

            {/* Canali alternativi */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:ilaria.fruchi@fideuram.it"
                className="flex-1 flex items-center justify-center gap-2 border border-stone-300 text-text-secondary text-sm font-bold py-3 px-4 rounded-lg hover:border-gold-amber hover:text-text-primary transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Invia via Email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   I 5 criteri di analisi
───────────────────────────────────────────── */
const criteria = [
  {
    icon: Layers,
    number: '01',
    title: 'Diversificazione reale',
    body: 'Avere tanti prodotti non significa essere diversificati. Molti portafogli bancari contengono strumenti che si muovono nella stessa direzione in caso di crisi — il rischio è concentrato anche quando sembra distribuito. Verificheremo se le tue asset class sono realmente decorrelate tra loro.',
  },
  {
    icon: SlidersHorizontal,
    number: '02',
    title: 'Equilibrio rischio / rendimento',
    body: 'Il rendimento atteso deve essere proporzionale al rischio che stai effettivamente assumendo. Spesso si scopre di tollerare una volatilità significativa per un rendimento modesto — o l\'opposto: di stare troppo fermi per paura di perdere. Valuteremo se il tuo profilo di rischio è coerente con la struttura del portafoglio.',
  },
  {
    icon: Target,
    number: '03',
    title: 'Coerenza con i tuoi obiettivi',
    body: 'Investire bene significa investire con uno scopo. Un portafoglio costruito per chi ha 35 anni e vuole comprare casa tra 10 anni è strutturalmente diverso da uno pensato per chi vuole una rendita tra 20 anni. Verificheremo che i tuoi investimenti siano allineati con gli obiettivi che hai davvero.',
  },
  {
    icon: EyeOff,
    number: '04',
    title: 'Costi reali e costi nascosti',
    body: 'I costi espliciti sono quelli che vedi: le commissioni di ingresso, i costi di gestione dichiarati. Poi ci sono i costi impliciti: retrocessioni, spread sui prodotti strutturati, TER totale dei fondi. Su un portafoglio di 100.000€, un punto percentuale di costo annuo in più vale 1.000€ sottratti ogni anno alla crescita del capitale.',
  },
  {
    icon: BadgeCheck,
    number: '05',
    title: 'Qualità degli strumenti',
    body: 'Non tutti i fondi e i prodotti strutturati hanno la stessa qualità. Alcuni sono efficienti e trasparenti; altri hanno strutture di costo opache, liquidità limitata o rendimenti storici che non giustificano i rischi assunti. Esamineremo ogni strumento nel tuo portafoglio con criteri oggettivi.',
  },
];

/* ─────────────────────────────────────────────
   Come funziona il processo
───────────────────────────────────────────── */
const steps = [
  {
    n: '1',
    title: 'Condividi i tuoi documenti',
    body: 'Il rendiconto della tua banca, un estratto conto degli investimenti o anche solo una lista dei prodotti che possiedi. Qualsiasi formato va bene.',
  },
  {
    n: '2',
    title: 'Analizzo la tua situazione',
    body: 'Esamino struttura, costi reali, diversificazione e coerenza con il tuo profilo. L\'analisi richiede normalmente qualche giorno lavorativo.',
  },
  {
    n: '3',
    title: 'Ti presento i risultati',
    body: 'Un confronto chiaro, con dati alla mano. Se ci sono margini di miglioramento te lo dico con trasparenza. Se invece la tua situazione è già solida, te lo confermo senza giri di parole.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const AnalisiPortafoglioPage = () => {
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
        aria-labelledby="analisi-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio gratuito · Analisi del portafoglio
          </p>
          <h1
            id="analisi-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            La tua banca lavora
            <br />
            <span className="text-gold-amber">nel tuo interesse?</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            È una domanda legittima — e spesso la risposta non è quella che ci si aspetta.
            Costi non dichiarati, prodotti inefficienti, diversificazione più apparente
            che reale: questi elementi limitano i tuoi rendimenti in modo silenzioso,
            anno dopo anno. Un'analisi professionale esterna è il primo passo per
            scoprire se il tuo portafoglio lavora davvero per te.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#richiedi-analisi"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Analisi gratuita — inizia qui
            </a>
            <a
              href="tel:+390523123456"
              className="inline-flex items-center gap-2 border border-stone-300 text-text-primary font-bold py-3 px-6 rounded-xl hover:border-gold-amber transition-colors focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Preferisci chiamare?
            </a>
          </div>

          {/* Garanzie rapide */}
          <div className="mt-10 flex flex-wrap gap-5">
            {['Gratuita e senza impegno', 'Massima riservatezza', 'Risposta entro 48 ore'].map((g) => (
              <div key={g} className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perché farlo ── */}
      <section
        aria-labelledby="perche-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="perche-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Perché un secondo parere cambia tutto
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Il consulente della tua banca non è indipendente: è remunerato
            per vendere i prodotti della casa. Questo non significa che stia
            sbagliando, ma significa che il suo punto di vista è strutturalmente
            orientato. Un'analisi esterna non ha questo vincolo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Conflitto di interessi',
                text: 'Le banche guadagnano dalle retrocessioni sui prodotti che vendono. I fondi più remunerativi per la banca non sono necessariamente quelli migliori per te.',
              },
              {
                label: 'Costi che non vedi',
                text: 'Il TER (Total Expense Ratio) di un fondo include costi che non appaiono mai in modo esplicito nel rendiconto. Su orizzonti lunghi, l\'impatto è enorme.',
              },
              {
                label: 'Complessità apparente',
                text: 'Prodotti strutturati, polizze multiramo, fondi di fondi: spesso la complessità serve a rendere difficile il confronto. La chiarezza è un vantaggio per il cliente, non per la banca.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gold-amber mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 criteri ── */}
      <section
        aria-labelledby="criteri-title"
        className="py-14 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="criteri-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Cosa viene analizzato, e come
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            Cinque dimensioni di valutazione, ognuna con criteri oggettivi
            e misurabili. Non opinioni, ma dati.
          </p>

          <div className="space-y-4">
            {criteria.map((c) => (
              <div
                key={c.title}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-sm text-left flex gap-5 items-start"
              >
                <div className="shrink-0 w-10 h-10 bg-white text-gold-amber rounded-lg flex items-center justify-center border border-stone-200">
                  <c.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">
                    {c.number}
                  </p>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Come funziona ── */}
      <section
        aria-labelledby="come-funziona-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="come-funziona-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Come funziona il processo
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-xl">
            Tre passaggi semplici. Nessun obbligo in nessuna fase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-stone-900 text-white rounded-lg flex items-center justify-center mb-4 font-extrabold text-lg">
                  {s.n}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
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
              "Non ho mai incontrato un cliente che, dopo un'analisi approfondita
              del proprio portafoglio, non avesse trovato almeno un'area di
              miglioramento significativa. Non perché la banca precedente fosse
              necessariamente disonesta — ma perché un punto di vista esterno,
              senza conflitti di interesse, vede quello che dall'interno
              non si riesce a vedere."
            </p>
            <footer className="mt-4 text-sm font-bold text-text-primary not-italic">
              — Ilaria Fruchi, Consulente Finanziaria
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Form ── */}
      <AnalysisForm />
    </main>
  );
};
