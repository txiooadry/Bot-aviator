const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function () {
  try {
    const resp = await axios.get('https://elephant.bet/aviator');
    const $ = cheerio.load(resp.data);
    const history = [];
    $('.history__item').each((i, el) => {
      const val = parseFloat($(el).text().replace('x', ''));
      history.push(val);
    });
    return history;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
};
