import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Landmark,
  Banknote,
  Users,
  FileText,
  Home,
  Scale,
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei parlare di un piano di decumulo e rendita. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact-pensionati"
      aria-labelledby="form-pensionati-title"
      className="bg-stone-100 py-20 px-4 border-t border-stone-200"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2
          id="form-pensionati-title"
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Parliamo del tuo piano
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un confronto gratuito, senza impegno. Dalla rendita integrativa
          alla pianificazione successoria: ogni situazione è diversa e merita
          attenzione specifica.
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
              Di cosa ti interessa parlare? (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Es. voglio una rendita mensile dal mio capitale, ho immobili e figli, sto pensando alla successione..."
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
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Contattami su WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Strumenti di decumulo
───────────────────────────────────────────── */
const decumuloTools = [
  {
    icon: Banknote,
    title: 'Rendita integrativa dal capitale',
    body: 'Esistono strumenti finanziari progettati per erogare un flusso di cassa mensile o trimestrale prelevando in modo programmato dal capitale accumulato. L\'obiettivo è duplice: integrare la pensione pubblica e preservare al contempo il valore reale del patrimonio nel tempo.',
  },
  {
    icon: Landmark,
    title: 'Portafoglio orientato alla stabilità',
    body: 'In questa fase, le priorità si invertono rispetto all\'accumulo. La volatilità va minimizzata, la liquidità va garantita e la struttura del portafoglio deve permettere prelievi periodici senza compromettere la tenuta complessiva. Crescita e protezione devono coesistere.',
  },
  {
    icon: FileText,
    title: 'Pianificazione successoria',
    body: 'Decidere in anticipo come ripartire il proprio patrimonio tra gli eredi non è solo una questione legale: è un atto di cura verso la propria famiglia. Strutturare correttamente la successione riduce il carico fiscale, semplifica le procedure e previene i conflitti che — nel caso di immobili o patrimoni complessi — sono molto più frequenti di quanto si pensi.',
  },
  {
    icon: Home,
    title: 'Patrimonio immobiliare: pianificare prima',
    body: 'Gli immobili sono l\'asset più difficile da trasmettere senza attriti. La comproprietà tra eredi con visioni diverse genera spesso blocchi decisionali e dispute lunghe anni. Strumenti come la donazione con riserva di usufrutto, il testamento ben strutturato o la valutazione di soluzioni alternative permettono di gestire questo aspetto con ordine e serenità.',
  },
  {
    icon: Scale,
    title: 'Ottimizzazione fiscale della successione',
    body: 'Le imposte di successione in Italia variano significativamente in base al grado di parentela e al valore trasferito. Una pianificazione anticipata — in coordinamento con un commercialista o notaio — permette di ridurre l\'impatto fiscale in modo legale e trasparente, tutelando il patrimonio costruito in anni di lavoro.',
  },
  {
    icon: Users,
    title: 'Coordinamento con professionisti del diritto',
    body: 'La consulenza finanziaria in questa fase non opera in isolamento. Per le questioni successorie e patrimoniali più articolate, la collaborazione con notai, commercialisti e avvocati specializzati è parte integrante del servizio: un approccio integrato che garantisce coerenza tra la strategia finanziaria e quella legale.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const PensionatiPage = () => {
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
        aria-labelledby="pensionati-hero-title"
        className="py-16 px-4 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-4">
            Servizio dedicato · Pensionati e fase di decumulo
          </p>
          <h1
            id="pensionati-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Il capitale c'è.
            <br />
            <span className="text-gold-amber">
              Ora deve lavorare per te, ogni mese.
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Dopo anni di costruzione, il patrimonio raggiunge il suo picco. Il lavoro
            finanziario cambia natura: non si tratta più di far crescere, ma di far
            durare — garantendo un flusso di reddito stabile, proteggendo il capitale
            dall'erosione e pensando a come trasmetterlo nel modo più ordinato possibile.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-pensionati"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Parliamo della tua situazione
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

      {/* ── Blocco due temi principali ── */}
      <section
        aria-labelledby="temi-title"
        className="py-14 px-4 bg-stone-50 border-b border-stone-200"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="temi-title"
            className="text-2xl font-bold text-text-primary mb-2"
          >
            Due priorità, un unico filo conduttore
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-2xl">
            La gestione finanziaria in questa fase ruota attorno a due temi distinti
            ma strettamente connessi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Decumulo */}
            <div className="bg-white rounded-2xl border-2 border-gold-amber p-8 text-left shadow-md">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-3">
                Tema 01
              </p>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Generare reddito dal capitale
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                La pensione pubblica copre raramente l'intero tenore di vita pre-pensionamento.
                Il capitale accumulato può colmare questo divario generando una rendita
                mensile programmata — senza intaccare il patrimonio di base più del necessario,
                e mantenendo la flessibilità di adattare i prelievi nel tempo.
              </p>
            </div>

            {/* Successione */}
            <div className="bg-white rounded-2xl border-2 border-stone-200 p-8 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                Tema 02
              </p>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Pianificare la successione
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Rimandare la pianificazione successoria è uno degli errori più costosi
                che una famiglia possa fare. Le dispute tra eredi, le imposte non ottimizzate
                e i blocchi sulla gestione degli immobili si risolvono raramente in modo
                rapido o economico. Affrontare il tema per tempo è un atto concreto
                di tutela verso chi si vuole bene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strumenti e approcci ── */}
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
            Dalla rendita mensile alla trasmissione del patrimonio: un approccio
            integrato che coordina finanza, fiscalità e diritto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {decumuloTools.map((tool) => (
              <div
                key={tool.title}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-sm text-left"
              >
                <div className="w-10 h-10 bg-white text-gold-amber rounded-lg flex items-center justify-center mb-4 border border-stone-200">
                  <tool.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nota sull'urgenza del tema successorio ── */}
      <section className="py-12 px-4 bg-stone-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-10 text-left shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-amber mb-3">
              Una riflessione
            </p>
            <h3 className="text-xl font-bold text-text-primary mb-4 max-w-2xl">
              La successione non è un tema morboso. È un atto di responsabilità.
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
              In Italia, circa il 40% delle eredità con patrimonio immobiliare genera
              attriti significativi tra gli eredi. Nella maggior parte dei casi, il
              problema non è la mancanza di affetto, ma l'assenza di indicazioni chiare
              lasciate in vita. Pianificare non significa pensare alla morte: significa
              decidere oggi come proteggere ciò che si è costruito e le persone a cui
              si vuole trasmetterlo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Citazione ── */}
      <section className="py-12 px-4 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-left">
          <blockquote className="border-l-4 border-gold-amber pl-6">
            <p className="text-lg text-text-secondary leading-relaxed italic">
              "Arrivare alla pensione con un patrimonio solido è un traguardo.
              Farlo durare nel modo giusto — generando reddito, proteggendo il
              capitale e pensando agli eredi — è la parte del lavoro che molti
              rimandano troppo a lungo."
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
