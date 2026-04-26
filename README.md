# ASSETRA Website

Sito web istituzionale per ASSETRA, specializzata in soluzioni di arredo contract e interior design.

## Caratteristiche
- **Dual Theme**: Modalità Light e Dark (Aggressive/Roman style).
- **Multilingua**: Supporto Italiano e Inglese.
- **Responsive**: Ottimizzato per mobile, tablet e desktop.
- **GDPR Ready**: Banner cookie e consensi privacy integrati.
- **Tech Stack**: HTML, CSS (Tailwind), JavaScript, Vite.

## Requisiti
- [Node.js](https://nodejs.org/) (versione 18 o superiore consigliata)
- npm (incluso con Node.js)

## Come avviare il progetto in locale

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Visualizza il sito:**
   Apri il browser all'indirizzo che apparirà nel terminale (solitamente `http://localhost:5173`).

## Comandi disponibili
- `npm run dev`: Avvia il server locale con hot-reload.
- `npm run build`: Genera la versione ottimizzata per la pubblicazione nella cartella `dist`.
- `npm run preview`: Avvia un'anteprima locale della build di produzione.
- `npx playwright test`: Esegue i test di regressione visiva (richiede l'installazione di Playwright).

## Struttura del Progetto
- `index.html`: Struttura principale del sito.
- `src/main.js`: Logica per il cambio tema, lingua e animazioni.
- `src/translations.js`: Mappatura dei testi in IT/EN.
- `src/style.css`: Stili personalizzati e configurazione Tailwind.
