// index.js

const TelegramBot = require('node-telegram-bot-api');

// Pegando o token da variável de ambiente no Railway
const token = process.env.BOT_TOKEN;

// Criando o bot com polling ativo
const bot = new TelegramBot(token, { polling: true });

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🤖 Bot Aviator ativo!');
});

// Comentário só para forçar redeploy no Railway
