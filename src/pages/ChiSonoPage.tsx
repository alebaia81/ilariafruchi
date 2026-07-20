import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BiografiaSection } from '../components/BiografiaSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

export const ChiSonoPage = () => {
  useDocumentHead({
    title: 'Chi Sono | Ilaria Fruchi - Consulente Finanziario',
    description:
      'Biografia e percorso professionale della Dott.ssa Ilaria Fruchi, consulente finanziaria a Piacenza e Cremona. Esperienza, formazione legale e consulenza sartoriale.',
  });

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary text-text-primary">
      {/* ── Breadcrumb / torna alla home ── */}
      <div className="bg-white border-b border-stone-200 px-4 py-3 text-left">
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

      <BiografiaSection />
    </main>
  );
};
