const testimonials = [
  {
    text: "Trovare un consulente finanziario di cui potersi fidare ciecamente non è facile, ma con Ilaria Fruchi ho trovato la persona perfetta. Ilaria unisce una competenza finanziaria straordinaria a una grandissima capacità di ascolto e nel consigliare gli investimenti adeguati al portafoglio. Spiega concetti finanziari complessi in modo semplice, rendendomi sempre partecipe e consapevole di ogni scelta d'investimento. È sempre presente e attenta alla protezione del mio patrimonio. Affidare a lei la gestione dei miei risparmi è stata la scelta migliore che potessi fare.",
    author: "Andrea M."
  },
  {
    text: "Desidero condividere la grande professionalità e l'impegno che presenta Ilaria nello svolgere il proprio lavoro. Sin dal primo giorno ha dimostrato grande competenza professionale, direi anche morale, e assoluta affidabilità. Anche sul piano umano dotata di una spiccata capacità di ascolto.",
    author: "Deny B."
  },
  {
    text: "Conoscendo già Ilaria Fruchi per la sua professionalità e competenza ho deciso di seguirla in questo suo nuovo percorso lavorativo e devo dire ad ora con ottimi riscontri. Persona chiara e trasparente nell'illustrare proposte e piani finanziari che ispira fiducia.",
    author: "Alberto B."
  },
  {
    text: "Mi sono affidata ad Ilaria per la gestione del mio patrimonio: una persona affidabile, attenta e professionale. Mi ha seguita passo dopo passo nelle migliori scelte e sono molto soddisfatta del suo lavoro. Consiglio di affidarsi a lei in quanto totalmente presente e disponibile, anche nelle cose più complesse.",
    author: "Federica D."
  },
  {
    text: "Seria, attenta e disponibile ad ascoltare qualsiasi necessità del cliente, indirizzandolo alla miglior gestione patrimoniale secondo le proprie necessità.",
    author: "Marta B. & Jonathan C."
  }
];

export const TrustTestimonials = () => {
  return (
    <section aria-labelledby="testimonials-title" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 id="testimonials-title" className="text-3xl font-bold text-text-primary text-center mb-10">
        La Fiducia dei Miei Clienti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border-2 border-brand-bordeaux shadow-sm text-left">
            <p className="text-text-secondary text-sm leading-relaxed mb-4">"{t.text}"</p>
            <span className="text-xs font-bold text-brand-bordeaux block">{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
