import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        
        {/* Link di Ritorno */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#A14400] hover:underline mb-8 focus:outline-none focus-visible:outline-3 focus-visible:outline-[#A14400]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Torna alla Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-[#A14400]" aria-hidden="true" />
          <h1 className="text-3xl font-extrabold text-[#1A1816]">Informativa Privacy & Cookie Policy</h1>
        </div>

        <p className="text-xs text-stone-500 mb-8">Ultimo aggiornamento: Giugno 2026</p>

        <div className="space-y-8 text-[#3D3935] text-sm leading-relaxed">
          
          {/* Sezione 1: Titolare */}
          <section aria-labelledby="legal-titolare">
            <h2 id="legal-titolare" className="text-lg font-bold text-[#1A1816] mb-2">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è <strong>Ilaria Fruchi</strong>, Consulente Finanziario abilitato all'offerta fuori sede di Fideuram, P.IVA [INSERIRE_PARTITA_IVA], iscritta all'Albo OCF al n. [INSERIRE_NUMERO_OCF]. Per qualsiasi richiesta relativa alla protezione dei dati, è possibile inviare una comunicazione formale ai recapiti istituzionali presenti nel footer del sito.
            </p>
          </section>

          {/* Sezione 2: Tipologia Dati */}
          <section aria-labelledby="legal-dati">
            <h2 id="legal-dati" className="text-lg font-bold text-[#1A1816] mb-2">2. Tipologia di Dati Trattati e Modalità</h2>
            <p>
              Questo sito web raccoglie esclusivamente i dati identificativi inseriti spontaneamente dall'utente all'interno del modulo di contatto (Nome, Indirizzo Email ed eventuale Messaggio).
            </p>
            <p className="mt-2">
              L'invio del modulo non comporta il salvataggio dei dati in un database locale o server di terze parti: il sistema genera un reindirizzamento sicuro che converte il testo in un messaggio inviato direttamente sul canale ufficiale WhatsApp della titolare.
            </p>
          </section>

          {/* Sezione 3: Finalità */}
          <section aria-labelledby="legal-finalita">
            <h2 id="legal-finalita" className="text-lg font-bold text-[#1A1816] mb-2">3. Finalità del Trattamento e Base Giuridica</h2>
            <p>
              I dati personali vengono trattati unicamente per rispondere alle richieste informative o di consulenza patrimoniale inoltrate dall'utente. La base giuridica del trattamento è costituita dal consenso esplicito dell'interessato, espresso tramite la selezione della checkbox obbligatoria presente nel modulo prima dell'invio.
            </p>
            <p className="mt-2">
              <strong>Interazione con piattaforme di messaggistica (WhatsApp):</strong> Il sito utilizza reindirizzamenti diretti a WhatsApp per l'invio di richieste e la prenotazione di call. I dati di contatto trasmessi dall'utente (numero di telefono, nome) vengono trattati esclusivamente per riscontrare la specifica richiesta informativa o di consulenza. È esclusa qualsiasi finalità di tracciamento, profilazione o WhatsApp Marketing automatizzato senza ulteriore consenso esplicito.
            </p>
          </section>

          {/* Sezione 4: Conservazione e Luogo */}
          <section aria-labelledby="legal-conservazione">
            <h2 id="legal-conservazione" className="text-lg font-bold text-[#1A1816] mb-2">4. Luogo di Trattamento e Conservazione</h2>
            <p>
              <strong>Fornitore di Hosting e Luogo del Trattamento:</strong> Il presente sito web è ospitato in modalità statica sulle infrastrutture cloud sicure di Vercel Inc., configurate nella region europea di Francoforte, Germania (eu-central-1 / fra1). Vercel Inc. opera in qualità di Responsabile Esterno del Trattamento (Data Processor). Nessun dato personale viene trasferito o memorizzato al di fuori dello Spazio Economico Europeo (SEE).
            </p>
            <p className="mt-2">
              Le informazioni inviate tramite messaggio verranno conservate nei terminali della titolare per il tempo strettamente necessario a evadere la richiesta conoscitiva e per i successivi obblighi di legge istituzionali.
            </p>
          </section>

          {/* Sezione 5: Diritti dell'utente */}
          <section aria-labelledby="legal-diritti">
            <h2 id="legal-diritti" className="text-lg font-bold text-[#1A1816] mb-2">5. Diritti dell'Interessato (GDPR)</h2>
            <p>
              In conformità con il Regolamento UE 2016/679, l'utente può esercitare in qualsiasi momento il diritto di accesso ai propri dati, la rettifica, la cancellazione ("diritto all'oblio") o la limitazione del trattamento inviando una richiesta diretta alla titolare. È inoltre salvaguardato il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali.
            </p>
          </section>

          {/* Sezione 6: Cookie Policy */}
          <section aria-labelledby="legal-cookie">
            <h2 id="legal-cookie" className="text-lg font-bold text-[#1A1816] mb-2">6. Cookie Policy</h2>
            <p>
              Questo sito applica una politica di tracciamento minimale. Non vengono utilizzati cookie di profilazione statistica, di marketing o di terze parti (es. Google Analytics o Pixel pubblicitari).
            </p>
            <p className="mt-2">
              Vengono rilasciati esclusivamente <strong>cookie tecnici essenziali di prima parte</strong>, strettamente necessari a garantire la navigazione sicura, la reattività dell'interfaccia React e il corretto funzionamento del routing della Single Page Application. Trattandosi di componenti essenziali all'erogazione del servizio, non richiedono un banner di consenso preventivo ai sensi della normativa vigente.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
