import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Di cosa si occupa un consulente finanziario?",
      a: "Un consulente finanziario si dedica alla pianificazione patrimoniale globale, aiutandoti a proteggere e far crescere i tuoi risparmi. Operando con indipendenza e metodo, costruisco strategie su misura per le famiglie e le imprese delle province di Piacenza e Cremona, guidandole attraverso la complessità dei mercati verso i loro reali obiettivi di vita."
    },
    {
      q: "Come funziona il primo incontro conoscitivo?",
      a: "Il primo colloquio è sempre gratuito, strettamente confidenziale e privo di vincoli commerciali o costi iniziali. È un momento informale di ascolto per inquadrare le tue esigenze e mappare i tuoi traguardi. Può avvenire in presenza (a Piacenza o Cremona) oppure comodamente in videocall da remoto, in base alle tue preferenze."
    },
    {
      q: "Non ho grandi capitali, posso richiedere una consulenza lo stesso?",
      a: "Assolutamente sì. La pianificazione finanziaria non è riservata ai grandi patrimoni: prima si inizia, meglio è. Per i risparmiatori del nostro territorio offro soluzioni accessibili e graduali, come i Piani di Accumulo del Capitale (PAC), per costruire nel tempo la tua sicurezza finanziaria passo dopo passo."
    }
  ];

  return (
    <div className="bg-[#FCFAF7] border-t border-stone-200 w-full">
      <section aria-labelledby="faq-title" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-2xl font-extrabold text-[#1A1816] mb-8 text-left">
          Domande Frequenti (FAQ)
        </h2>
        
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={index} className="border-b border-stone-300 pb-2">
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A14400] rounded-sm group text-left"
                >
                  <h3 className="text-lg font-bold text-[#1A1816] group-hover:text-[#A14400] transition-colors pr-6">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className="overflow-hidden"
                >
                  <p className="text-base text-stone-600 leading-relaxed pb-6 pt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
