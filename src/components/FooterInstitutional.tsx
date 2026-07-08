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
          <p className="text-xs text-stone-300 leading-relaxed max-w-xl mb-6 border-l-2 border-amber-500 pl-3">
            Sito personale di Ilaria Fruchi, Consulente Finanziario abilitato all'offerta fuori sede. Questa comunicazione è realizzata a titolo personale dal singolo Private Banker. Per informazioni specifiche su prodotti, servizi e performance si rimanda ai canali ufficiali della Società in questione.
          </p>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contatti & Sede</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col">
                  <span>via G. Manfredi 105, Piacenza (PC)</span>
                  <span className="text-xs text-stone-500 mt-1">Operativa su appuntamento anche a Cremona</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <a href="tel:+393463470232" className="hover:text-white transition-colors focus:outline-none">
                  346-3470232
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-amber shrink-0" aria-hidden="true" />
                <a href="mailto:info@ilariafruchi.it" className="hover:text-white transition-colors focus:outline-none">
                  info@ilariafruchi.it
                </a>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-stone-800 pt-6 mt-6 text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <span>© {new Date().getFullYear()} Ilaria Fruchi. Tutti i diritti riservati.</span>
              <span className="text-stone-300 border-l-2 border-amber-500 pl-3">
                Ilaria Fruchi | Consulente Finanziario abilitato all'offerta fuori sede | Attiva nelle province di Piacenza e Cremona | Sede principale: via G. Manfredi 105, Piacenza (PC) | P.IVA 01923650335 | Albo OCF: Delibera n. 2895 | RUI n. E000808810
              </span>
              <span>
                Design & Sviluppo:{' '}
                <a 
                  href="https://presenzadigitale.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-stone-400 focus:outline-none transition-colors"
                >
                  Presenza Digitale
                </a>
              </span>
            </div>
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
