import { useId } from 'react';

export const ContactForm = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  return (
    <section id="contact" aria-labelledby="form-title" className="bg-stone-100 py-16 px-4 border-t border-stone-200">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2 id="form-title" className="text-2xl font-bold text-text-primary mb-2 text-left">
          Richiedi un'Analisi Patrimoniale
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Inserisci i tuoi dati per concordare un primo appuntamento conoscitivo o un'analisi di persona a Piacenza.
        </p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor={nameId} className="block text-sm font-bold text-text-primary mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id={nameId}
              required
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={emailId} className="block text-sm font-bold text-text-primary mb-1">
              Indirizzo Email
            </label>
            <input
              type="email"
              id={emailId}
              required
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={messageId} className="block text-sm font-bold text-text-primary mb-1">
              Come posso aiutarti? (Opzionale)
            </label>
            <textarea
              id={messageId}
              rows={4}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gold-amber text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none"
          >
            Invia Richiesta di Contatto
          </button>
          
          <p className="text-[11px] text-stone-500 leading-tight mt-4">
            Inviando il modulo confermi il trattamento dei dati personali a norma di legge per finalità legate esclusivamente alla richiesta di contatto professionale.
          </p>
        </form>
      </div>
    </section>
  );
};
