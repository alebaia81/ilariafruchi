import { Award, BookOpen, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    label: 'Formazione',
    value: 'Laurea in Giurisprudenza presso Università degli Studi di Milano',
  },
  {
    icon: Award,
    label: 'Esperienza',
    value: '13 anni nel settore bancario come gestore e vice responsabile di filiale',
  },
  {
    icon: MapPin,
    label: 'Territorio',
    value: 'Piacenza e Cremona — presenza locale, visione globale al fianco di famiglie e imprese',
  },
];

export const BiografiaSection = () => {
  return (
    <section
      id="biografia"
      aria-labelledby="biografia-title"
      className="py-20 px-6 bg-stone-900 text-stone-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Foto B&W */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-sm">
            {/* Decorative border frame */}
            <div className="absolute -inset-3 rounded-2xl border border-amber-500/30" />
            <div className="absolute -inset-6 rounded-2xl border border-amber-500/10" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}images/biografica.avif`} type="image/avif" />
                <source srcSet={`${import.meta.env.BASE_URL}images/biografica.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}images/biografica.webp`}
                  alt="Ilaria Fruchi — ritratto professionale in bianco e nero"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                  width={420}
                  height={560}
                />
              </picture>
              {/* Warm amber tint overlay — subtle */}
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Testo biografico */}
        <div className="lg:col-span-7 text-left order-1 lg:order-2">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            Chi sono
          </span>

          <h2
            id="biografia-title"
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6"
          >
            Benvenuti nel mio spazio!
          </h2>

          <div className="space-y-4 text-stone-300 text-[15px] leading-relaxed mb-8">
            <p>
              Nata a Cremona, ho sviluppato fin dagli studi classici una forte propensione per il pensiero analitico che mi ha guidato verso la Laurea Magistrale in Giurisprudenza. Il percorso legale ha affinato la mia naturale attitudine a risolvere problematiche patrimoniali complesse.
            </p>
            <p>
              Nel 2013 ho fatto il mio ingresso nel settore bancario: una scelta di famiglia, ereditando questa passione da papà e nonno. Lavorando per tanti anni in filiale, ho sentito il bisogno di fare di più per i miei clienti. Sono mossa da una convinzione:{' '}
              <strong className="text-white font-semibold">la consulenza finanziaria vera non vende prodotti, costruisce futuro</strong>.
            </p>
            <p>
              Oggi opero come <strong className="text-white font-semibold">consulente finanziario monomandatario</strong>, una scelta orientata alla qualità. Unisco la tutela legale del patrimonio a strategie finanziarie "sartoriali" per tradurre la complessità dei mercati in scelte chiare, serene e lungimiranti, avendo alle spalle la solidità di un grande gruppo bancario.
            </p>
            <p>
              Offro servizi patrimoniali di alto valore a privati e aziende. Accompagno i giovani che costruiscono il loro futuro e le famiglie nel pianificare i propri obiettivi. Guido imprenditori e aziende nella gestione delle risorse, dalla pianificazione previdenziale al passaggio generazionale.
            </p>
            <p className="text-amber-300 font-medium mt-2">
              Costruiremo insieme il percorso giusto per la crescita della Vostra famiglia e impresa con l’attenzione, l’ascolto e la professionalità che meritate.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-stone-800/60 border border-stone-700 rounded-xl p-4 flex flex-col gap-2"
              >
                <Icon className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{label}</span>
                <span className="text-sm text-stone-300 leading-snug">{value}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="border-l-2 border-amber-500 pl-5 italic text-stone-400 text-sm leading-relaxed">
            "Dove la tutela del vostro futuro finanziario trova risposte concrete, solide e d’avanguardia."
            <footer className="mt-2 text-xs text-stone-500 not-italic font-semibold uppercase tracking-wider">
              — Ilaria Fruchi
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
};
