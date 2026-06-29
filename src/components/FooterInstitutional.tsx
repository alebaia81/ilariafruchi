import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterInstitutional = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-6 border-t border-stone-800 text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Ilaria Fruchi</h3>
          <p className="text-stone-400 text-sm max-w-sm mb-6">
            Consulenza finanziaria e patrimoniale personalizzata, basata su trasparenza, assenza di conflitti d'interesse ed efficacia normativa.
          </p>
          <p className="text-[11px] text-stone-500 leading-relaxed max-w-md">
            Iscritta all'Albo Unico dei Consulenti Finanziari. Attività svolta esclusivamente sotto mandato Fideuram. Le informazioni fornite non costituiscono sollecitazione al pubblico risparmio.
          </p>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contatti & Sede</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <span>Via Roma 1, 29121 Piacenza (PC)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <a href="tel:+390523123456" className="hover:text-white transition-colors focus:outline-none">
                  +39 0523 123456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <a href="mailto:ilaria.fruchi@fideuram.it" className="hover:text-white transition-colors focus:outline-none">
                  ilaria.fruchi@fideuram.it
                </a>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-stone-800 pt-6 mt-6 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-4">
            <span>© {new Date().getFullYear()} Ilaria Fruchi. Tutti i diritti riservati.</span>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-stone-400 focus:outline-none transition-colors">
                Informativa Privacy & Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
