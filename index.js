const TelegramBot = require('node-telegram-bot-api');

// Pega o token da variável de ambiente no Railway
const token = process.env.BOT_TOKEN;

// Cria o bot com polling (escutando comandos)
const bot = new TelegramBot(token, { polling: true });

// Responde ao comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🤖 Bot Aviator ativo!');
});
