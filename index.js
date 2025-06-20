require('dotenv').config();
const scraper = require('./scraper');
const patterns = require('./patterns');
const telegram = require('./telegram');

let lastProcessed = [];

async function main() {
  const history = await scraper();
  const newEntries = history.filter(v => !lastProcessed.includes(v));

  if (newEntries.length) {
    lastProcessed = history.slice(0, 10);
    const pattern = patterns.detect(history);

    if (pattern) {
      const message = telegram.formatMessage(pattern, history.slice(0,5));
      await telegram.sendMessage(message);
      console.log('Alerta enviado:', pattern);
    }
  }
}

setInterval(main, 5000);
main(); 
