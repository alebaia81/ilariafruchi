import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterInstitutional = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-6 border-t border-stone-800 text-left">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Griglia principale a 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna 1: Bio / Disclaimer */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ilaria Fruchi</h3>
            <p className="text-stone-400 text-sm max-w-sm mb-6">
              Consulenza finanziaria e patrimoniale personalizzata, focalizzata sulla tutela del capitale e sulla realizzazione dei tuoi obiettivi di vita.
            </p>
            <p className="text-xs text-stone-300 leading-relaxed max-w-xl border-l-2 border-brand-bordeaux pl-3">
              Sito personale di Ilaria Fruchi, Consulente Finanziario abilitato all’offerta fuori sede. Questa comunicazione è realizzata a titolo personale dal singolo professionista. Per informazioni specifiche su prodotti, servizi e performance si rimanda ai canali ufficiali della Società Mandante (<a href="https://www.fideuram.it/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Fideuram</a>).
            </p>
          </div>

          {/* Colonna 2: Dove Opero (Local Landing Links) */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Dove Opero</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link
                  to="/dove-sono/consulente-finanziario-piacenza"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors focus:outline-none block py-1"
                >
                  Consulente Finanziario Piacenza
                </Link>
              </li>
              <li>
                <Link
                  to="/dove-sono/consulente-finanziario-cremona"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors focus:outline-none block py-1"
                >
                  Consulente Finanziario Cremona
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Contatti */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contatti & Sedi</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-bold text-stone-300">Sede Legale:</div>
                  <div>via Ugo Pelò 9, 29010 Castelvetro Piacentino (PC)</div>
                  <div className="font-bold text-stone-300 mt-2">Ufficio:</div>
                  <div>via G. Manfredi 105, 29121 Piacenza (PC)</div>
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
                <a href="mailto:ifruchi@fideuram.it" className="hover:text-white transition-colors focus:outline-none">
                  ifruchi@fideuram.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferiore (Copyright e Privacy Policy) a tutta larghezza */}
        <div className="border-t border-stone-800 pt-6 text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} Ilaria Fruchi. Tutti i diritti riservati.</span>
            <span className="text-stone-300 border-l-2 border-brand-bordeaux pl-3">
              Ilaria Fruchi | Consulente Finanziario abilitato all'offerta fuori sede | Attiva nelle province di Piacenza e Cremona | Sede legale: via Ugo Pelò 9, 29010 Castelvetro Piacentino (PC) | Ufficio: via G. Manfredi 105, 29121 Piacenza (PC) | P.IVA 01923650335 | Albo OCF: Delibera n. 2895 | RUI n. E000808810
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
    </footer>
  );
};
