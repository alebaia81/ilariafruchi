const testimonials = [
  {
    text: "Professionista seria e preparata. Mi ha aiutato a pianificare la transizione generazionale della mia azienda con totale serenità e chiarezza normativa.",
    author: "Imprenditore, Piacenza"
  },
  {
    text: "Grazie alla sua analisi patrimoniale abbiamo riorganizzato gli investimenti di famiglia, eliminando costi inutili e ottimizzando la parte fiscale.",
    author: "Professionista Medico, Provincia di Piacenza"
  },
  {
    text: "Trasparenza e assenza di fronzoli altisonanti. Spiega i concetti finanziari in modo semplice, mettendo sempre al sicuro i nostri obiettivi futuri.",
    author: "Nucleo Familiare, Fiorenzuola d'Arda"
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
          <div key={i} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-left">
            <p className="text-text-secondary text-sm leading-relaxed mb-4">"{t.text}"</p>
            <span className="text-xs font-bold text-gold-amber block">{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
