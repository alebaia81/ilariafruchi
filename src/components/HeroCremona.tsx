import { Link } from 'react-router-dom';

export const HeroCremona = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 text-left">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-amber mb-3">
          Ilaria Fruchi — Consulente Finanziaria
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight mb-6">
          Consulenza Finanziaria e Patrimoniale a Cremona
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
          Pianifica il tuo futuro finanziario con una strategia indipendente e personalizzata. Gestione patrimoniale e investimenti a Cremona e provincia, anche da remoto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/analisi-portafoglio"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block text-center bg-brand-bordeaux text-white font-bold px-8 py-3.5 rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none"
          >
            Richiedi un'Analisi Patrimoniale
          </Link>
          <a
            href="#expertise"
            className="inline-block text-center border-2 border-brand-bordeaux text-brand-bordeaux font-bold px-8 py-3.5 rounded-lg hover:bg-brand-bordeaux/5 transition-colors focus:outline-none"
          >
            Scopri i Servizi
          </a>
        </div>
      </div>
      
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-stone-200">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}images/home.avif`} type="image/avif" />
            <source srcSet={`${import.meta.env.BASE_URL}images/home.webp`} type="image/webp" />
            <img
              src={`${import.meta.env.BASE_URL}images/home.webp`}
              alt="Ilaria Fruchi, Consulente Finanziario a Cremona"
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={480}
              height={600}
            />
          </picture>
          {/* Soft gradient overlay at bottom for legibility */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl" />
        </div>
      </div>
    </section>
  );
};
