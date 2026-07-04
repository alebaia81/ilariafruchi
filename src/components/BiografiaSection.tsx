import { Award, BookOpen, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    label: 'Formazione',
    value: 'Laurea in Economia e Finanza, Università Cattolica di Piacenza',
  },
  {
    icon: Award,
    label: 'Esperienza',
    value: 'Oltre 15 anni nella consulenza patrimoniale con Fideuram',
  },
  {
    icon: MapPin,
    label: 'Territorio',
    value: 'Piacenza e provincia — presenza locale, visione globale',
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
                <source srcSet="/images/biografica.avif" type="image/avif" />
                <source srcSet="/images/biografica.webp" type="image/webp" />
                <img
                  src="/images/biografica.webp"
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
            Una consulente che mette il cliente al centro, sempre.
          </h2>

          <div className="space-y-4 text-stone-300 text-[15px] leading-relaxed mb-8">
            <p>
              Nata e cresciuta a Piacenza, ho costruito la mia carriera professionale con una convinzione chiara:{' '}
              <strong className="text-white font-semibold">la consulenza finanziaria vera non vende prodotti, costruisce futuro</strong>.
              Dopo la laurea in Economia e Finanza all'Università Cattolica, ho scelto Fideuram perché condividevo la sua visione: un consulente indipendente, vicino alle persone, non agli indici.
            </p>
            <p>
              Negli ultimi quindici anni ho affiancato centinaia di famiglie, liberi professionisti e imprenditori piacentini in ogni fase della vita patrimoniale — dalla costruzione del capitale alla pianificazione previdenziale, dal passaggio generazionale alla gestione delle liquidità aziendali.
            </p>
            <p>
              Il mio metodo è semplice:{' '}
              <em className="text-amber-300 not-italic font-medium">ascolto prima di consigliare</em>. Perché ogni patrimonio è diverso, ogni obiettivo è personale, e la soluzione giusta esiste solo quando si capisce davvero chi si ha di fronte.
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
            "Gestire un patrimonio non significa solo far crescere i numeri. Significa proteggere i sogni di chi me li affida."
            <footer className="mt-2 text-xs text-stone-500 not-italic font-semibold uppercase tracking-wider">
              — Ilaria Fruchi
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
};
