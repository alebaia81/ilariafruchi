import { useState, useId, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Calculator } from 'lucide-react';

interface YearlyData {
  year: number;
  initial: number;
  contributions: number;
  interest: number;
  total: number;
}

export const CompoundCalculator = () => {
  // Accessible form input IDs
  const initialId = useId();
  const monthlyId = useId();
  const rateId = useId();
  const yearsId = useId();

  // Inputs states
  const [initialAmount, setInitialAmount] = useState<number>(5000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [expectedRate, setExpectedRate] = useState<number>(4);
  const [years, setYears] = useState<number>(30);
  
  const [results, setResults] = useState<{
    totalContributions: number;
    totalInterest: number;
    finalBalance: number;
    yearlyBreakdown: YearlyData[];
  } | null>(null);

  // Common calculation logic
  const calculateResults = (initial: number, monthly: number, rate: number, duration: number) => {
    const currentYear = new Date().getFullYear();
    let balance = initial;
    let totalContributed = 0;
    let totalInterestEarned = 0;
    const breakdown: YearlyData[] = [];

    const monthlyRate = (rate / 100) / 12;

    for (let y = 1; y <= duration; y++) {
      for (let m = 0; m < 12; m++) {
        balance += monthly;
        totalContributed += monthly;
        
        const interest = balance * monthlyRate;
        balance += interest;
        totalInterestEarned += interest;
      }

      breakdown.push({
        year: currentYear + y - 1,
        initial: initial,
        contributions: totalContributed,
        interest: Math.round(totalInterestEarned),
        total: Math.round(balance),
      });
    }

    setResults({
      totalContributions: totalContributed,
      totalInterest: Math.round(totalInterestEarned),
      finalBalance: Math.round(balance),
      yearlyBreakdown: breakdown,
    });
  };

  // Perform initial calculation on mount
  useEffect(() => {
    calculateResults(initialAmount, monthlyContribution, expectedRate, years);
  }, []);

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    calculateResults(initialAmount, monthlyContribution, expectedRate, years);
  };

  // SVG ring calculations
  const total = results?.finalBalance || 1;
  const pctInitial = (initialAmount / total) * 100;
  const pctContributions = ((results?.totalContributions || 0) / total) * 100;
  
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashOffsetInitial = circumference - (pctInitial / 100) * circumference;
  const strokeDashOffsetContributions = circumference - ((pctInitial + pctContributions) / 100) * circumference;

  return (
    <section id="calculator-section" aria-labelledby="calc-title" className="py-16 px-4 max-w-6xl mx-auto border-t border-stone-200">
      <div className="text-center mb-12">
        <h2 id="calc-title" className="text-3xl font-bold text-text-primary mb-4">
          Simulatore di Accumulo e Interesse Composto
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Calcola la crescita del tuo capitale nel tempo. Visualizza l'impatto dei versamenti costanti combinati con l'interesse maturato.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form di Input (Sinistra) */}
        <form onSubmit={handleCalculate} className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 text-left">
          <div>
            <label htmlFor={initialId} className="block text-sm font-bold text-text-primary mb-1">
              Importo iniziale (€)
            </label>
            <input
              id={initialId}
              type="number"
              min="0"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={monthlyId} className="block text-sm font-bold text-text-primary mb-1">
              Versamenti aggiuntivi mensili (€)
            </label>
            <input
              id={monthlyId}
              type="number"
              min="0"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={rateId} className="block text-sm font-bold text-text-primary mb-1">
              Tasso di interesse previsto (%)
            </label>
            <input
              id={rateId}
              type="number"
              min="0"
              max="20"
              step="0.1"
              value={expectedRate}
              onChange={(e) => setExpectedRate(Number(e.target.value))}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor={yearsId} className="block text-sm font-bold text-text-primary mb-1">
              Anni di accumulo
            </label>
            <input
              id={yearsId}
              type="number"
              min="1"
              max="50"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#344E41] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#2a3f34] transition-colors flex items-center justify-center gap-2 focus:outline-none min-h-[48px]"
          >
            <Calculator className="w-5 h-5" aria-hidden="true" />
            <span>Calcola</span>
          </button>
        </form>

        {/* Grafici e Risultati (Destra) */}
        <div className="lg:col-span-8 space-y-8 text-center">
          {results && (
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Grafico ad Anello SVG Nativi */}
                <div className="relative flex justify-center items-center" aria-hidden="true">
                  <svg width="200" height="200" viewBox="0 0 120 120" className="transform -rotate-90">
                    {/* Sfondo Anello (Interessi) */}
                    <circle cx="60" cy="60" r={radius} fill="transparent" stroke="#A3B19B" strokeWidth="12" />
                    {/* Segmento Versamenti */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke="#344E41"
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashOffsetContributions}
                    />
                    {/* Segmento Capitale Iniziale */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke="#F4E285"
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashOffsetInitial}
                    />
                  </svg>
                </div>

                {/* Legenda e Dati Numerici */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-[#F4E285] rounded-full shrink-0"></span>
                    <span className="text-sm text-text-secondary">Importo iniziale: <strong>€ {initialAmount.toLocaleString('it-IT')}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-[#344E41] rounded-full shrink-0"></span>
                    <span className="text-sm text-text-secondary">Totale versamenti: <strong>€ {results.totalContributions.toLocaleString('it-IT')}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-[#A3B19B] rounded-full shrink-0"></span>
                    <span className="text-sm text-text-secondary">Totale interesse maturato: <strong>€ {results.totalInterest.toLocaleString('it-IT')}</strong></span>
                  </div>
                  <div className="border-t border-stone-200 pt-4 mt-4">
                    <p className="text-xl font-bold text-text-primary">
                      Il tuo investimento ti produrrà: <span className="text-[#344E41] block text-3xl font-extrabold mt-1">€ {results.finalBalance.toLocaleString('it-IT')}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Barre HTML semantiche per il grafico annuale (Conformi WCAG 2.2 AA) */}
              {results.yearlyBreakdown.length > 0 && (
                <div className="mt-8 border-t border-stone-100 pt-8 text-left">
                  <h3 className="text-lg font-bold text-text-primary mb-4">
                    Crescita Annuale Dettagliata
                  </h3>
                  <div className="max-h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                    {results.yearlyBreakdown.map((item) => {
                      const maxTotal = results.yearlyBreakdown[results.yearlyBreakdown.length - 1].total;
                      const barPercent = (item.total / maxTotal) * 100;
                      
                      const pInit = (item.initial / item.total) * 100;
                      const pContr = (item.contributions / item.total) * 100;
                      const pInt = (item.interest / item.total) * 100;

                      return (
                        <div 
                          key={item.year} 
                          className="flex items-center gap-4 text-xs text-left"
                          aria-label={`Anno ${item.year}: totale accumulato € ${item.total.toLocaleString('it-IT')}, di cui capitale iniziale € ${item.initial.toLocaleString('it-IT')}, versamenti € ${item.contributions.toLocaleString('it-IT')}, interessi € ${item.interest.toLocaleString('it-IT')}`}
                        >
                          <span className="w-12 font-bold text-text-secondary shrink-0">{item.year}</span>
                          <div className="flex-1 h-6 bg-stone-100 rounded-md overflow-hidden flex" style={{ width: `${barPercent}%`, minWidth: '4px' }}>
                            <div 
                              style={{ width: `${pInit}%` }} 
                              className="bg-[#F4E285] h-full" 
                              title={`Capitale Iniziale: € ${item.initial.toLocaleString('it-IT')}`}
                            />
                            <div 
                              style={{ width: `${pContr}%` }} 
                              className="bg-[#344E41] h-full" 
                              title={`Totale Versato: € ${item.contributions.toLocaleString('it-IT')}`}
                            />
                            <div 
                              style={{ width: `${pInt}%` }} 
                              className="bg-[#A3B19B] h-full" 
                              title={`Interessi Maturati: € ${item.interest.toLocaleString('it-IT')}`}
                            />
                          </div>
                          <span className="w-20 text-right font-bold text-text-primary shrink-0">
                            € {item.total.toLocaleString('it-IT')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Nota di Chiusura ed Evidenziazione del Valore */}
              <div className="mt-8 p-4 bg-stone-50 rounded-xl border border-stone-100 text-left">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Questo simulatore dimostra matematicamente la potenza dell'accumulo costante abbinato all'interesse composto sul lungo termine. Per valutare una strategia d'investimento personalizzata in base alla tua reale situazione fiscale e patrimoniale, prenota un incontro conoscitivo tramite il modulo di contatto sottostante.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
