import { useState, useId } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const subServices = [
  { name: "Analisi Portafoglio (Gratuita)", path: "/analisi-portafoglio" },
  { name: "Dipendenti", path: "/servizi/dipendenti" },
  { name: "Giovani e accumulo", path: "/servizi/giovani" },
  { name: "Gestione delle risorse – Mezza età", path: "/servizi/mezza-eta" },
  { name: "Pensionati e fase di decumulo", path: "/servizi/pensionati" },
  { name: "Grandi Patrimoni", path: "/servizi/grandi-patrimoni" },
  { name: "Servizi per le Aziende", path: "/servizi/aziende" },
  { name: "Collaborazioni tra professionisti", path: "/servizi/collaborazioni" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonId = useId();
  const menuId = useId();
  const navigate = useNavigate();

  return (
    <header role="banner" className="bg-white border-b border-stone-200 h-16 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">
        <Link
          to="/"
          className="font-extrabold text-lg text-text-primary tracking-tight hover:opacity-80 transition-opacity focus:outline-none"
        >
          ILARIA FRUCHI
        </Link>

        <nav role="navigation" className="flex items-center gap-6 relative">
          {/* Pulsante Menu Servizi con logica ARIA */}
          <div className="relative">
            <button
              id={menuButtonId}
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 font-bold text-stone-600 hover:text-text-primary focus:outline-none py-2"
            >
              <span>Servizi</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {/* Menu a Tendina Dropdown */}
            {isOpen && (
              <ul
                id={menuId}
                role="menu"
                aria-labelledby={menuButtonId}
                className="absolute left-0 mt-2 w-72 bg-white border border-stone-200 rounded-xl shadow-xl py-2 text-left"
              >
                {subServices.map((service, index) => (
                  <li role="none" key={index}>
                    <button
                      role="menuitem"
                      onClick={() => {
                        navigate(service.path);
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-left block px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-stone-50 hover:text-text-primary transition-colors focus:outline-none"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="/#calculator-section" className="font-bold text-stone-600 hover:text-text-primary">Simulatore di interessi</a>
          <button
            onClick={() => {
              navigate('/analisi-portafoglio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-1.5 bg-stone-900 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-stone-700 transition-colors focus:outline-none"
          >
            Analisi portafoglio
          </button>
          <a
            href="tel:+390523123456"
            className="hidden lg:inline-flex items-center gap-2 border-2 border-gold-amber text-gold-amber text-sm font-bold py-2 px-4 rounded-lg hover:bg-gold-amber hover:text-white transition-colors focus:outline-none"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Chiama ora
          </a>
        </nav>
      </div>
    </header>
  );
};
