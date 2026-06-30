import { useState, useId } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const BookingCalendar: React.FC = () => {
  const selectServiceId = useId();

  // Orari disponibili per la call
  const timeSlots = ["09:00", "10:00", "11:00", "14:30", "15:30", "16:30", "17:30"];

  // Le 6 macro-categorie di servizio concordate
  const services = [
    "Dipendenti (TFR e Fondi)",
    "Giovani e Accumulo (PAC)",
    "Gestione Risorse (Mezza età)",
    "Pensionati e Decumulo",
    "Grandi Patrimoni",
  ];

  // Stato locale del form
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  // Genera i prossimi 12 giorni lavorativi (esclusi sabato e domenica)
  const getAvailableDays = (): Date[] => {
    const days: Date[] = [];
    const current = new Date();
    // Inizia dal giorno successivo a oggi
    current.setDate(current.getDate() + 1);

    while (days.length < 12) {
      const dayOfWeek = current.getDay(); // 0 = Dom, 6 = Sab
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const availableDays = getAvailableDays();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    // Evita lo shift UTC aggiungendo T12:00:00
    const dateObj = new Date(selectedDate + 'T12:00:00');
    const formattedDate = dateObj.toLocaleDateString('it-IT', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });

    const message =
      `Ciao Ilaria, vorrei prenotare una call conoscitiva.\n\n` +
      `*Ambito:* ${selectedService}\n` +
      `*Giorno richiesto:* ${formattedDate}\n` +
      `*Orario:* ${selectedTime}`;

    const whatsappUrl = `https://wa.me/390523123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="prenota-call"
      aria-labelledby="booking-title"
      className="py-16 px-4 max-w-4xl mx-auto border-t border-stone-200"
    >
      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-sm text-left">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <CalendarIcon className="w-7 h-7 text-gold-amber shrink-0" aria-hidden="true" />
          <h2 id="booking-title" className="text-2xl font-extrabold text-text-primary">
            Fissa una Call Conoscitiva
          </h2>
        </div>
        <p className="text-sm text-text-secondary mb-8 leading-relaxed max-w-2xl">
          Seleziona l'area di tuo interesse, scegli il giorno e l'orario più comodi.
          Il sistema ti reindirizzerà su WhatsApp per confermare lo slot con Ilaria.
        </p>

        <form onSubmit={handleBookingSubmit} className="space-y-6" noValidate>

          {/* Step 1 — Servizio */}
          <div>
            <label
              htmlFor={selectServiceId}
              className="block text-sm font-bold text-text-primary mb-2"
            >
              Di cosa hai bisogno?
            </label>
            <select
              id={selectServiceId}
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 bg-bg-primary border border-stone-300 rounded-xl focus:outline-none focus-visible:border-gold-amber text-sm font-medium text-text-primary"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2 — Giorno */}
          <fieldset>
            <legend className="text-sm font-bold text-text-primary mb-2">
              Seleziona il giorno
            </legend>
            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2"
              role="group"
              aria-label="Giorni disponibili"
            >
              {availableDays.map((date) => {
                const dateString = date.toISOString().split('T')[0];
                const isSelected = selectedDate === dateString;
                const dayName = date.toLocaleDateString('it-IT', { weekday: 'short' });
                const dayNum = date.toLocaleDateString('it-IT', { day: 'numeric' });
                const monthName = date.toLocaleDateString('it-IT', { month: 'short' });
                const ariaLabel = date.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });

                return (
                  <button
                    key={dateString}
                    type="button"
                    onClick={() => {
                      setSelectedDate(dateString);
                      setSelectedTime("");
                    }}
                    aria-pressed={isSelected}
                    aria-label={ariaLabel}
                    className={`p-3 rounded-xl border text-center transition-colors focus:outline-none ${
                      isSelected
                        ? 'bg-[#344E41] text-white border-[#344E41]'
                        : 'bg-bg-primary border-stone-200 text-text-primary hover:border-stone-400'
                    }`}
                  >
                    <span className="block text-xs uppercase font-medium opacity-75">{dayName}</span>
                    <span className="block text-lg font-bold">{dayNum}</span>
                    <span className="block text-xs opacity-60">{monthName}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 3 — Orario (visibile solo dopo aver selezionato il giorno) */}
          {selectedDate && (
            <fieldset>
              <legend className="text-sm font-bold text-text-primary mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Seleziona l'orario</span>
              </legend>
              <div
                className="grid grid-cols-4 sm:grid-cols-7 gap-2"
                role="group"
                aria-label="Orari disponibili"
              >
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      aria-pressed={isSelected}
                      aria-label={`Orario ${time}`}
                      className={`p-2.5 text-xs font-bold rounded-lg border text-center transition-colors focus:outline-none ${
                        isSelected
                          ? 'bg-gold-amber text-white border-gold-amber'
                          : 'bg-white border-stone-200 text-text-secondary hover:border-stone-400'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {/* Step 4 — CTA WhatsApp */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              aria-disabled={!selectedDate || !selectedTime}
              className={`w-full font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm min-h-[48px] focus:outline-none ${
                selectedDate && selectedTime
                  ? 'bg-[#25D366] text-[#1A1816] cursor-pointer hover:brightness-95'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Conferma e Invia su WhatsApp</span>
            </button>
            {(!selectedDate || !selectedTime) && (
              <p className="text-xs text-text-secondary text-center mt-2" aria-live="polite">
                {!selectedDate
                  ? 'Seleziona un giorno per continuare'
                  : 'Seleziona un orario per continuare'}
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
};
