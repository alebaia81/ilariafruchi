import { User, TrendingUp, Shield, BarChart3, Landmark, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceCategories = [
  {
    id: "servizi-dipendenti",
    path: "/servizi/dipendenti",
    icon: User,
    title: "Dipendenti",
    desc: "TFR, fondo pensione e previdenza complementare: la risorsa che l'azienda versa per te, ottimizzata per costruire patrimonio."
  },
  {
    id: "servizi-giovani",
    path: "/servizi/giovani",
    icon: TrendingUp,
    title: "Giovani e accumulo",
    desc: "Piani di accumulo del capitale (PAC) efficienti per costruire un patrimonio solido nel tempo, sfruttando l'interesse composto."
  },
  {
    id: "servizi-mezza-eta",
    path: "/servizi/mezza-eta",
    icon: Shield,
    title: "Gestione delle risorse – Mezza età",
    desc: "Bilanciamento del rischio del portafoglio, protezione dei beni accumulati e pianificazione degli obiettivi di vita intermedi."
  },
  {
    id: "servizi-pensionati",
    path: "/servizi/pensionati",
    icon: Landmark,
    title: "Pensionati e fase di decumulo",
    desc: "Strategie di prelievo programmato e integrazione pensionistica per mantenere inalterato lo stile di vita senza intaccare il capitale core."
  },
  {
    id: "servizi-patrimoni",
    path: "/servizi/grandi-patrimoni",
    icon: BarChart3,
    title: "Grandi Patrimoni",
    desc: "Consulenza avanzata su architetture finanziarie complesse, efficienza nei costi di gestione e diversificazione internazionale."
  },
];

export const Expertise = () => {
  const navigate = useNavigate();
  return (
    <section aria-labelledby="expertise-title" className="py-16 px-4 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="expertise-title" className="text-3xl font-bold text-text-primary mb-4">
            Aree di Consulenza e Soluzioni Patrimoniali
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ogni fase della vita richiede una strategia finanziaria dedicata. Scopri le soluzioni studiate per i tuoi obiettivi specifici.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              id={category.id}
              onClick={() => {
                navigate(category.path);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-gold-amber hover:shadow-md transition-all focus:outline-none scroll-mt-20 text-left group cursor-pointer w-full"
            >
              <div className="w-12 h-12 bg-stone-100 text-gold-amber rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                <category.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{category.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{category.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-amber group-hover:gap-2 transition-all">
                Scopri di più <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
