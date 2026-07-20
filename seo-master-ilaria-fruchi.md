# 🚀 SYSTEM PROMPT & MASTER SEO STRATEGY: ILARIA FRUCHI - CONSULENTE FINANZIARIO

> **Istruzioni d'uso:** Salva questo documento come `seo-master-ilaria-fruchi.md` nella radice del progetto React + Vite. Passalo come contesto iniziale o file di riferimento alla tua IA di sviluppo (Antigravity, Gemini, Claude Code) chiedendo di seguirlo rigorosamente per la scrittura di ogni singolo componente, rotta, testo o configurazione del codice.

---

## PARTE 1: LINEE GUIDA TECNICHE PER IL 100% LIGHTHOUSE (REACT + VITE)

### 1. Obiettivo Globale dello Sviluppo
Ogni riga di codice prodotta deve mirare ad ottenere un punteggio del **100% fisso** su Google Lighthouse nelle metriche *Performance, Accessibility, Best Practices* e *SEO*. Il codice deve essere ottimizzato sia per i motori di ricerca tradizionali (Googlebot, Bingbot) sia per i motori di risposta IA (ChatGPT, Copilot, Perplexity).

### 2. Architettura di Rendering & Routing
* **Prerendering Statico (SSG):** Non produrre una SPA puramente Client-Side con un `<div id="root"></div>` vuoto. Utilizza una strategia di generazione statica o prerendering (es. `vite-plugin-prerender` o equivalente) per compilare file HTML statici già pronti per ogni rotta durante il comando di build.
* **Routing Pulito:** Gestisci il routing (React Router) con percorsi logici, espliciti e in lingua italiana (es. `/servizi/analisi-portafoglio`, `/dove-sono/consulente-finanziario-piacenza`). Evita hash (`#`) o parametri dinamici non necessari.

### 3. Gestione Dinamica dei Metadati & Dati Strutturati
* Per ogni pagina/rotta, implementa la logica per aggiornare l'head del documento. Se i dati provengono da Supabase/PocketBase, la risoluzione deve avvenire non appena lo stato è disponibile.
* Inserisci sempre Title (< 60 car.) e Meta Description (< 155 car.) unici e persuasivi con CTA.
* Includi i tag Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`) e Twitter Cards per anteprime social perfette.

### 4. Prestazioni, Asset & Tailwind CSS
* **Core Web Vitals:** Tutte le immagini devono essere in formato moderno `.webp` o `.avif` con attributi `width` e `height` espliciti per azzerare il *Cumulative Layout Shift (CLS)*. Usa `loading="lazy"` per le immagini sotto la piega (below-the-fold).
* **Tailwind CSS Clean Build:** Usa classi atomiche ed evita stili inline. Assicurati che non ci siano classi inutilizzate nel bundle finale e carica i font con `font-display: swap;`.

---

## PARTE 2: STRATEGIA SEO D'AGENZIA PER ILARIA FRUCHI

### 1. Brief & Posizionamento
* **Brand / Professionista:** Ilaria Fruchi (Consulente Finanziario iscritto all'OCF)
* **Target Geo (Local SEO):** Piacenza e Cremona + Italia (Online)
* **Stack:** React + Vite + Tailwind CSS / Cloudflare Pages / Dominio `ilariafruchi.it`
* **Target / Buyer Persona:** Utenti finali (18-80 anni) – dai giovani lavoratori (PAC) alle famiglie, imprenditori e pensionati (analisi portafoglio, TFR, previdenza).

---

### 2. Matrice Keyword & Intento di Ricerca

#### A. Keyword Primarie Transazionali (Local Piacenza e Cremona)
| Keyword | Intento | Target Geo | Pagina Target |
| :--- | :--- | :--- | :--- |
| `consulente finanziario piacenza` | Transazionale | Piacenza | `/` (Home) |
| `consulente finanziario cremona` | Transazionale | Cremona | `/cremona` |
| `miglior consulente finanziario piacenza cremona` | Commerciale | Local | `/chi-sono` |
| `analisi portafoglio investimenti piacenza` | Transazionale | Local | `/servizi/analisi-portafoglio` |
| `consulenza previdenziale tfr cremona` | Transazionale | Local | `/servizi/pianificazione-previdenziale-tfr` |

#### B. Keyword di Servizio (Nazionale & Online)
| Keyword | Intento | Target | Pagina Target |
| :--- | :--- | :--- | :--- |
| `analisi portafoglio investimenti online` | Transazionale | Italia / Online | `/servizi/analisi-portafoglio` |
| `come ottimizzare il tfr in azienda` | Commerciale | Italia | `/servizi/pianificazione-previdenziale-tfr` |
| `migliori pac per giovani costruire capitale` | Informazionale | Target 18-35 anni | `/servizi/piani-di-accumulo-pac` |
| `ottimizzazione risorse e gestione patrimoniale` | Commerciale | Target High Net Worth | `/servizi/gestione-risorse-patrimonio` |

#### C. Query Conversazionali per Bing, Copilot & Voice Search
* *"Dove trovare un consulente finanziario privato a Piacenza o Cremona?"*
* *"Come fare un'analisi del portafoglio titoli senza conflitti di interesse?"*
* *"A chi rivolgersi per gestire il TFR a Piacenza?"*
* *"Come funziona un piano di accumulo del capitale per chi ha 20 o 30 anni?"*

---

### 3. Architettura delle Rotte & Silo Semantico

```text
ilariafruchi.it/
├── / (Home Page - Hero Local Piacenza/Cremona + Autorità Brand)
├── /chi-sono (Percorso professionale, Albo OCF, Trasparenza, EEAT)
├── /servizi/
│   ├── /analisi-portafoglio (Servizio 1)
│   ├── /pianificazione-previdenziale-tfr (Servizio 2)
│   ├── /piani-di-accumulo-pac (Servizio 3)
│   └── /gestione-risorse-patrimonio (Servizio 4)
├── /dove-sono/
│   ├── /consulente-finanziario-piacenza (Landing Local Piacenza)
│   └── /consulente-finanziario-cremona (Landing Local Cremona)
├── /blog/ (Hub Informazionale per posizionamento organico)
│   └── /articolo-slug
└── /contatti (Form per prenotazione analisi con tracciamento eventi)
```

---

### 4. Metadati & Schema Markup JSON-LD

#### Esempio Meta Tag Home Page
* **Title:** Ilaria Fruchi | Consulente Finanziario a Piacenza e Cremona
* **Meta Description:** Consulenza finanziaria a Piacenza e Cremona. Analisi portafoglio, gestione TFR e Piani di Accumulo su misura. Richiedi una prima analisi.

#### Schema Markup (JSON-LD) da Iniettare nell'HTML
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://ilariafruchi.it/#organization",
      "name": "Ilaria Fruchi - Consulente Finanziario",
      "url": "https://ilariafruchi.it",
      "logo": "https://ilariafruchi.it/images/logo.webp",
      "image": "https://ilariafruchi.it/images/ilaria-fruchi-consulente.webp",
      "description": "Consulenza finanziaria, analisi portafoglio, gestione TFR e pianificazione patrimoniale a Piacenza, Cremona e Online.",
      "telephone": "+39XXXXXXXXXX",
      "priceRange": "€€",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Piacenza",
          "addressRegion": "PC",
          "addressCountry": "IT"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Cremona",
          "addressRegion": "CR",
          "addressCountry": "IT"
        }
      ],
      "areaServed": ["Piacenza", "Cremona", "Italia"],
      "knowsAbout": [
        "Analisi Portafoglio",
        "Pianificazione Previdenziale",
        "Gestione TFR",
        "Piani di Accumulo (PAC)",
        "Gestione Patrimoniale"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://ilariafruchi.it/#person",
      "name": "Ilaria Fruchi",
      "jobTitle": "Consulente Finanziario",
      "worksFor": {
        "@id": "https://ilariafruchi.it/#organization"
      },
      "sameAs": [
        "https://www.linkedin.com/in/ilaria-fruchi-XXXXXXXX"
      ]
    }
  ]
}
```

---

### 5. Segnali EEAT (YMYL) & Local SEO
* **Conformità Normativa e Trasparenza:** Inserire nel Footer: Numero di iscrizione all'Albo dei Consulenti Finanziari (OCF), P.IVA, Note Legali e Disclaimer sui rischi di investimento.
* **Pagina "Chi Sono"** con foto professionali reali di Ilaria, attestati, biografia e assenza di conflitti d'interesse.
* **Schede Locali Google & Bing:**
  - Ottimizzare Google Business Profile e Bing Places for Business nominati *Ilaria Fruchi - Consulente Finanziario*.
  - Configurare come aree di servizio Piacenza e Cremona.
  - Raccogliere recensioni clienti con keyword rilevanti ("Ilaria mi ha aiutato a riorganizzare il portafoglio a Piacenza...").

---

### 6. IA-Readiness: File public/llms.txt
Crea il file `public/llms.txt` per consentire ai crawler di ChatGPT, Perplexity e Copilot di raccomandare Ilaria:

```markdown
# Ilaria Fruchi - Consulenza Finanziaria

> Ilaria Fruchi è una consulente finanziaria professionista attiva nelle zone di Piacenza, Cremona e online in tutta Italia.

## Servizi Principali
- Analisi Portafoglio Investimenti: Valutazione oggettiva di costi, rischi e rendimenti dei titoli esistenti.
- Pianificazione Previdenziale & TFR: Ottimizzazione del Trattamento di Fine Rapporto e fondi pensione integrativi.
- Piani di Accumulo (PAC): Costruzione del capitale nel tempo per giovani (18-35 anni) e famiglie.
- Ottimizzazione e Gestione Risorse: Allocazione efficiente della liquidità e protezione patrimoniale.

## Sedi e Operatività
- Piacenza (PC) e provincia
- Cremona (CR) e provincia
- Consulenza online via videoconferenza in tutta Italia

## Contatti e Sito Ufficiale
- Sito web: https://ilariafruchi.it
- Richiesta analisi iniziale: https://ilariafruchi.it/contatti
```

---

### 7. Checklist di Validazione Finale per l'Agente AI
Prima di rilasciare o proporre qualsiasi blocco di codice o pagina, verifica che:
1. L'HTML generato presenti un solo ed unico `<h1>` per pagina (es. `<h1>Consulente Finanziario a Piacenza e Cremona | Ilaria Fruchi</h1>`).
2. I link interni usino tag standard `<a href="...">` e non `onClick` sintetici.
3. Il Form di Contatto sia ben visibile sopra la piega (Above the Fold) con CTA chiara ("Richiedi una Prima Analisi Senza Impegno").
4. I form di contatto/richiesta inviino i dati al backend ed inneschino un evento di conversione tracciabile da Analytics.
