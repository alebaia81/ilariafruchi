import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  interface FaqItem {
    q: string;
    a: React.ReactNode;
  }

  const faqs: FaqItem[] = [
    {
      q: "Di cosa si occupa un consulente finanziario?",
      a: "Un consulente finanziario si dedica alla pianificazione patrimoniale globale, aiutandoti a proteggere e far crescere i tuoi risparmi. Attraverso un metodo strutturato, costruisco strategie su misura per le famiglie e le imprese di Piacenza, Cremona e di tutto il territorio nazionale, guidandole con chiarezza verso i loro obiettivi di vita."
    },
    {
      q: "Come funziona il primo incontro conoscitivo?",
      a: "E’ un colloquio preliminare e senza impegno che possiamo svolgere di persona oppure online. Si tratta di una sessione dedicata esclusivamente all’ascolto: valuteremo insieme la tua situazione di partenza e i tuoi progetti futuri, così da comprendere le tue reali necessità finanziarie e verificare se il mio metodo sia la soluzione più adatta a te."
    },
    {
      q: "Non ho grandi capitali, posso richiedere una consulenza lo stesso?",
      a: "Assolutamente sì. La pianificazione finanziaria non è riservata solo a chi ha grandi patrimoni, ma a chiunque desideri gestire i propri risparmi. Prima si inizia, meglio è. Creare un piano di accumulo e proteggere i propri cari è un passo fondamentale a prescindere dalla cifra di partenza."
    },
    {
      q: "I miei investimenti saranno vincolati? Cosa succede se cambio idea?",
      a: (
        <>
          Le strategie che sviluppiamo insieme si basano su <strong className="font-bold text-text-primary">un orizzonte temporale chiaro e condiviso</strong>, definito in partenza in base ai tuoi obiettivi specifici (come la pensione, l’acquisto di una casa o la tutela familiare). Questo piano è però dinamico e flessibile: in caso di necessità improvvise o cambi di programma, avrai sempre la piena libertà di modificare i tuoi obiettivi o disinvestire le tue somme in qualsiasi momento.
        </>
      )
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
                  className="w-full flex justify-between items-center py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-bordeaux rounded-sm group text-left cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-[#1A1816] group-hover:text-brand-bordeaux transition-colors pr-6">
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
                  <div className="text-base text-stone-600 leading-relaxed pb-6 pt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
