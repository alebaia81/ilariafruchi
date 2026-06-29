import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei organizzare un colloquio riservato sulla gestione del patrimonio. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
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
          className="text-2xl font-bold text-text-primary mb-2 text-left"
        >
          Organizziamo un colloquio riservato
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Un primo confronto gratuito e strettamente confidenziale.
          Nessun impegno, nessuna pressione commerciale.
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
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
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
    title: 'Portafoglio e ottimizzazione dei costi',
    body: 'Patrimoni significativi richiedono architetture finanziarie più sofisticate. L\'analisi parte sempre dai costi reali — commissioni esplicite e implicite — che in portafogli di grandi dimensioni erodono rendimenti in modo spesso sottovalutato. Ridurre un punto percentuale di costo annuo su un patrimonio rilevante significa decine di migliaia di euro preservati nel tempo.',
  },
  {
    icon: ShieldCheck,
    title: 'Polizze assicurative di investimento',
    body: 'Le polizze vita di ramo I e III sono strumenti che combinano investimento e protezione patrimoniale. I capitali investiti beneficiano dell\'impignorabilità e dell\'insequestrabilità previste per legge, offrono vantaggi successori significativi — con la possibilità di designare beneficiari specifici al di fuori delle regole ereditarie ordinarie — e godono di un trattamento fiscale favorevole sulle plusvalenze.',
  },
  {
    icon: ScrollText,
    title: 'Trust e strumenti fiduciari',
    body: 'Quando un testamento non è sufficiente a esprimere in modo preciso le volontà future, il trust rappresenta uno strumento di pianificazione avanzata. Permette di definire con dettaglio come le risorse verranno amministrate e distribuite nel tempo, anche in presenza di beneficiari con esigenze particolari o situazioni patrimoniali complesse. Gli Small Trust sono soluzioni accessibili anche per patrimoni meno elevati ma con esigenze specifiche.',
  },
  {
    icon: Building2,
    title: 'Cessione e acquisizione di aziende',
    body: 'Vendere o acquistare un\'azienda è una delle operazioni finanziarie più delicate che un imprenditore possa affrontare. La consulenza in questa fase include la strutturazione dell\'operazione, la valutazione degli aspetti fiscali e l\'utilizzo di strumenti come l\'escrow agreement — un conto fiduciario che garantisce la transazione eliminando i rischi sulla controparte prima del trasferimento del bene.',
  },
  {
    icon: Landmark,
    title: 'Patrimonio immobiliare e beni di lusso',
    body: 'Immobili, opere d\'arte, collezioni e beni di lusso richiedono una valutazione e una gestione che vadano oltre la logica del mercato finanziario standard. La consulenza integra competenze specifiche per valorizzare questi asset, pianificarne il passaggio generazionale e valutarne il peso complessivo all\'interno dell\'architettura patrimoniale.',
  },
  {
    icon: Lock,
    title: 'Fiduciarie e riservatezza',
    body: 'Per chi necessita di proteggere il capitale da rischi patrimoniali e garantire il massimo livello di privacy nella gestione delle proprie risorse, le società fiduciarie offrono uno strumento efficace. Permettono di intestare beni e investimenti in modo riservato, con la garanzia di una gestione professionale e nel pieno rispetto della normativa vigente.',
  },
];

/* ─────────────────────────────────────────────
   Elementi differenzianti
───────────────────────────────────────────── */
const differentiators = [
  {
    icon: RefreshCw,
    title: 'Monitoraggio e adattamento costante',
    body: 'Un grande patrimonio non può essere strutturato una volta sola e lasciato invariato. Le condizioni di mercato, la normativa fiscale e le esigenze del cliente cambiano. La revisione periodica e la flessibilità della strategia sono elementi fondamentali, non opzionali.',
  },
  {
    icon: Users,
    title: 'Rete di professionisti specializzati',
    body: 'Avvocati, notai, commercialisti, agenti immobiliari e altri esperti di settore collaborano in modo coordinato. La consulenza patrimoniale non opera in isolamento: un approccio integrato garantisce coerenza tra le decisioni finanziarie, quelle legali e quelle fiscali.',
  },
];

/* ─────────────────────────────────────────────
   Componente principale pagina
───────────────────────────────────────────── */
export const GrandiPatrimoniPage = () => {
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
            Servizio dedicato · Grandi Patrimoni
          </p>
          <h1
            id="patrimoni-hero-title"
            className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-6 max-w-3xl"
          >
            Patrimoni complessi
            <br />
            <span className="text-gold-amber">richiedono soluzioni su misura.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Oltre una certa soglia, la gestione finanziaria cessa di essere
            un esercizio di selezione di fondi. Diventa una questione di
            architettura: protezione legale, efficienza fiscale, pianificazione
            successoria, coordinamento tra asset class diverse. Ogni decisione
            ha un peso proporzionale al patrimonio che coinvolge.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-patrimoni"
              className="inline-flex items-center gap-2 bg-gold-amber text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:outline-none"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Colloquio riservato
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
            La consulenza per grandi patrimoni va oltre la selezione degli strumenti
            finanziari. Include tutto ciò che riguarda la vita del patrimonio: come
            proteggerlo, come farlo crescere in modo efficiente, come trasmetterlo
            e come gestire le operazioni straordinarie.
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
              "Quando il patrimonio raggiunge una certa dimensione, ogni decisione
              ha un impatto reale che non può essere ignorato. Il mio compito non
              è solo selezionare gli strumenti migliori, ma coordinare legge, fiscalità
              e finanza in modo che il tutto funzioni come un sistema coerente —
              oggi e per le generazioni future."
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
