import { Link } from 'react-router-dom';

export const HeroPortfolio = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 text-left">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-amber mb-3">
          Fideuram — Consulente Finanziaria
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight mb-6">
          Pianificazione Patrimoniale Trasparente a Piacenza
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
          Consulente Fideuram attiva sul territorio piacentino. Aiuto famiglie e imprese a proteggere e far crescere il patrimonio attraverso soluzioni chiare, trasparenti e allineate ai vostri obiettivi reali.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/analisi-portafoglio"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block text-center bg-gold-amber text-white font-bold px-8 py-3.5 rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none"
          >
            Richiedi un'Analisi Patrimoniale
          </Link>
          <a
            href="#expertise"
            className="inline-block text-center border border-stone-300 text-text-primary font-bold px-8 py-3.5 rounded-lg hover:bg-stone-50 transition-colors focus:outline-none"
          >
            Scopri i Servizi
          </a>
        </div>
      </div>
      
      <div className="lg:col-span-5 flex justify-center">
        {/* Elegant geometric abstract placeholder representing a premium portrait frame */}
        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 via-stone-50 to-[#FCFAF7] opacity-60"></div>
          {/* Abstract elegant inner frames to simulate depth */}
          <div className="relative w-full h-full border border-dashed border-stone-300 rounded-xl flex flex-col items-center justify-center text-center p-6 bg-white/40 backdrop-blur-[2px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-amber/20 to-gold-amber/5 border border-gold-amber/30 flex items-center justify-center mb-4">
              <span className="text-xl font-semibold text-gold-amber">IF</span>
            </div>
            <p className="text-xs font-bold text-text-primary tracking-wide uppercase mb-1">
              Ilaria Fruchi
            </p>
            <p className="text-[11px] text-text-secondary max-w-[200px]">
              Ritratto professionale in arrivo per il lancio del portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
