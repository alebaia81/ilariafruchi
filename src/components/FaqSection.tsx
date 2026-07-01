import React from 'react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "Qual è la differenza tra un consulente finanziario e il classico impiegato di banca?",
      a: "A differenza del tradizionale impiegato bancario spesso vincolato alle direttive commerciali della propria filiale, io opero con indipendenza strategica. Il mio obiettivo non è vendere un prodotto standardizzato, ma selezionare sul mercato gli strumenti migliori per tutelare e far crescere il tuo patrimonio nel tempo."
    },
    {
      q: "Come funziona il primo incontro conoscitivo e quanto costa?",
      a: "Il primo colloquio è sempre gratuito, strettamente confidenziale e non comporta alcun vincolo commerciale. È un incontro informale dedicato esclusivamente ad ascoltare le tue esigenze, inquadrare la tua situazione di partenza e mappare i tuoi reali obiettivi di vita e di investimento."
    },
    {
      q: "I miei soldi rimangono al sicuro?",
      a: "Sì. In quanto Consulente Finanziario abilitato all'offerta fuori sede, la mia attività è strettamente regolamentata e vigilata dall'Albo OCF. Il consulente non tocca mai direttamente il tuo denaro e non può effettuare prelievi: i capitali rimangono depositati in totale sicurezza sul tuo conto corrente e dossier titoli presso l'istituto bancario di riferimento (Fideuram), che opera come ente custode esclusivo dei tuoi investimenti."
    },
    {
      q: "Non ho grandi capitali, posso richiedere una consulenza lo stesso?",
      a: "Certamente. La pianificazione finanziaria non è un'esclusiva per grandi patrimoni, anzi, è fondamentale iniziare presto. Attraverso strumenti accessibili come i Piani di Accumulo del Capitale (PAC), è possibile investire progressivamente i propri risparmi, trasformando anche piccole somme in una solida base per il futuro."
    }
  ];

  return (
    <div className="bg-[#FCFAF7] border-t border-stone-200 w-full">
      <section aria-labelledby="faq-title" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-2xl font-extrabold text-[#1A1816] mb-8 text-left">
          Domande Frequenti (FAQ)
        </h2>
        
        <div className="space-y-8 text-left">
          {faqs.map((faq, index) => (
            <article key={index} className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-[#1A1816] leading-snug">
                {faq.q}
              </h3>
              <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
