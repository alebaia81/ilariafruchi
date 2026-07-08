import { User, TrendingUp, Shield, BarChart3, Landmark, ArrowRight, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceCategories = [
  {
    id: "servizi-dipendenti",
    path: "/servizi/dipendenti",
    icon: User,
    title: "Pianificazione Previdenziale & TFR a Cremona",
    desc: "Ottimizzazione del TFR e previdenza complementare per i clienti dell'area di Cremona, per valorizzare le risorse accumulate e costruire un futuro sereno."
  },
  {
    id: "servizi-giovani",
    path: "/servizi/giovani",
    icon: TrendingUp,
    title: "Piani di Accumulo (PAC)",
    desc: "Piani di accumulo (PAC) accessibili ai risparmiatori di Cremona per costruire un patrimonio solido nel tempo sfruttando l'interesse composto."
  },
  {
    id: "servizi-mezza-eta",
    path: "/servizi/mezza-eta",
    icon: Shield,
    title: "Tutela del Risparmio e Gestione",
    desc: "Bilanciamento del rischio e tutela del risparmio per i clienti di Cremona e provincia, con pianificazione di medio-lungo termine."
  },
  {
    id: "servizi-pensionati",
    path: "/servizi/pensionati",
    icon: Landmark,
    title: "Gestione del Decumulo",
    desc: "Strategie di prelievo programmato per mantenere inalterato lo stile di vita tutelando il capitale, attive sull'area di Cremona."
  },
  {
    id: "servizi-patrimoni",
    path: "/servizi/grandi-patrimoni",
    icon: BarChart3,
    title: "Pianificazione Successoria",
    desc: "Consulenza avanzata su pianificazione successoria e tutela del patrimonio familiare, disponibile su appuntamento a Cremona o da remoto."
  },
  {
    id: "servizi-aziende",
    path: "/#contact",
    icon: Briefcase,
    title: "Servizi per le Aziende di Cremona",
    desc: "Soluzioni dedicate alle imprese cremonesi: gestione della liquidità aziendale, TFM e ottimizzazione della tesoreria."
  },
];

export const ExpertiseCremona = () => {
  const navigate = useNavigate();
  return (
    <section aria-labelledby="expertise-title" id="expertise" className="py-16 px-4 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="expertise-title" className="text-3xl font-bold text-text-primary mb-4">
            Aree di Consulenza e Soluzioni Patrimoniali a Cremona
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ogni fase della vita richiede una strategia finanziaria dedicata. Scopri le soluzioni studiate per i tuoi obiettivi specifici nell'area di Cremona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              id={category.id}
              onClick={() => {
                if (category.path.startsWith('/#')) {
                  navigate(category.path);
                  const id = category.path.split('#')[1];
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  navigate(category.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
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
