import { useState, useId, useEffect, useRef } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const subServices = [
  { name: "Analisi Portafoglio (Gratuita)", path: "/analisi-portafoglio" },
  { name: "Pianificazione Previdenziale & TFR", path: "/servizi/dipendenti" },
  { name: "Piani di Accumulo e Costruzione Capitale (PAC)", path: "/servizi/giovani" },
  { name: "Ottimizzazione e Gestione Risorse", path: "/servizi/mezza-eta" },
  { name: "Gestione del Decumulo e Integrazione", path: "/servizi/pensionati" },
  { name: "Passaggio Generazionale & Grandi Patrimoni", path: "/servizi/grandi-patrimoni" },
  { name: "Servizi di Pianificazione per le Aziende", path: "/#contact" },
];

export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesButtonId = useId();
  const servicesMenuId = useId();
  const mobileMenuId = useId();

  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Chiudi tutto al cambio di rotta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Chiudi il menu mobile con Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header role="banner" className="bg-white border-b border-stone-200 h-16 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="font-extrabold text-lg text-text-primary tracking-tight hover:opacity-80 transition-opacity focus:outline-none"
        >
          ILARIA FRUCHI
        </Link>

        {/* ── NAVIGAZIONE DESKTOP (nascosta su mobile) ── */}
        <nav
          role="navigation"
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-6 relative"
        >
          {/* Dropdown Servizi Desktop */}
          <div className="relative">
            <button
              id={servicesButtonId}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 font-bold text-stone-600 hover:text-text-primary focus:outline-none py-2"
            >
              <span>Servizi</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {isServicesOpen && (
              <ul
                id={servicesMenuId}
                role="menu"
                aria-labelledby={servicesButtonId}
                className="absolute left-0 mt-2 w-72 bg-white border border-stone-200 rounded-xl shadow-xl py-2 text-left"
              >
                {subServices.map((service) => (
                  <li role="none" key={service.path}>
                    <button
                      role="menuitem"
                      onClick={() => {
                        handleNavigate(service.path);
                        setIsServicesOpen(false);
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

          <button
            onClick={() => handleNavigate('/analisi-portafoglio')}
            className="inline-flex items-center gap-1.5 bg-stone-900 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-stone-700 transition-colors focus:outline-none"
          >
            Analisi portafoglio
          </button>

          <a
            href="tel:+390523123456"
            className="inline-flex items-center gap-2 border-2 border-gold-amber text-gold-amber text-sm font-bold py-2 px-4 rounded-lg hover:bg-gold-amber hover:text-white transition-colors focus:outline-none"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Chiama ora
          </a>
        </nav>

        {/* ── PULSANTE HAMBURGER (visibile solo su mobile) ── */}
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={isMobileMenuOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-stone-100 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen
            ? <X className="w-6 h-6" aria-hidden="true" />
            : <Menu className="w-6 h-6" aria-hidden="true" />
          }
        </button>
      </div>

      {/* ── PANNELLO MENU MOBILE ── */}
      <div
        id={mobileMenuId}
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        hidden={!isMobileMenuOpen}
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto border-t border-stone-200 transition-opacity duration-200 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Navigazione mobile" className="flex flex-col px-4 py-6 gap-1">

          {/* Accordion Servizi Mobile */}
          <button
            type="button"
            aria-expanded={isMobileServicesOpen}
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className="flex items-center justify-between w-full py-3 px-2 font-bold text-text-primary text-base rounded-lg hover:bg-stone-50 transition-colors focus:outline-none"
          >
            <span>Servizi</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {isMobileServicesOpen && (
            <ul className="flex flex-col pl-4 border-l-2 border-stone-200 ml-2 mb-2 gap-0.5">
              {subServices.map((service) => (
                <li key={service.path}>
                  <button
                    onClick={() => handleNavigate(service.path)}
                    className="w-full text-left py-2.5 px-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus:outline-none rounded-md"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Analisi Portafoglio */}
          <button
            onClick={() => handleNavigate('/analisi-portafoglio')}
            className="w-full mt-4 bg-stone-900 text-white text-sm font-bold py-3 px-4 rounded-xl hover:bg-stone-700 transition-colors focus:outline-none min-h-[48px]"
          >
            Analisi portafoglio
          </button>

          {/* CTA Chiama */}
          <a
            href="tel:+390523123456"
            className="mt-2 flex items-center justify-center gap-2 border-2 border-gold-amber text-gold-amber text-sm font-bold py-3 px-4 rounded-xl hover:bg-gold-amber hover:text-white transition-colors focus:outline-none min-h-[48px]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Chiama ora
          </a>

        </nav>
      </div>
    </header>
  );
};
