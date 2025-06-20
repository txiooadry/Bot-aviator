const axios = require('axios');

const botToken = '8022858816:AAHg9bFpqxdQMbcZzMu5orQgHMMDzqt7TR0';
const chatId = 'COLE_SEU_CHAT_ID_AQUI';

exports.sendMessage = async function (text) {
  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text
    });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response?.data || error.message);
  }
};
