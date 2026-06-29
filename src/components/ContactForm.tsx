import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';

export const ContactForm = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const privacyId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Ciao Ilaria, sono ${name} (${email}). Vorrei richiedere un'analisi patrimoniale. Nota aggiuntiva: ${message || 'Nessuna nota aggiuntiva.'}`;
    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" aria-labelledby="form-title" className="bg-stone-100 py-16 px-4 border-t border-stone-200">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
        <h2 id="form-title" className="text-2xl font-bold text-text-primary mb-2 text-left">
          Richiedi un'Analisi Patrimoniale
        </h2>
        <p className="text-text-secondary text-sm mb-6 text-left">
          Inserisci i tuoi dati per concordare un primo appuntamento conoscitivo o un'analisi di persona a Piacenza.
        </p>

        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label htmlFor={nameId} className="block text-sm font-bold text-text-primary mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id={nameId}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none resize-none"
            />
          </div>

          {/* Consenso GDPR — checkbox obbligatoria, non pre-selezionata */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id={privacyId}
              required
              className="mt-1 w-4 h-4 shrink-0 accent-gold-amber cursor-pointer"
            />
            <label htmlFor={privacyId} className="text-sm text-text-secondary leading-snug cursor-pointer">
              Accetto il trattamento dei dati personali secondo la{' '}
              <a href="/privacy-policy" className="underline hover:text-text-primary focus:outline-none">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Pulsante WhatsApp — verde ufficiale #25D366, testo nero #1A1816 (ratio contrasto 4.2:1 WCAG AA) */}
          <button
            type="submit"
            className="w-full bg-[#25D366] text-[#1A1816] font-bold py-3 px-6 rounded-lg shadow-md hover:brightness-95 transition-all focus:outline-none min-h-[48px] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Contattami su WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
};
