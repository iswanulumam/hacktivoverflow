/**
 * @file
 * telegram.js
 *
 * Telegram channel to send notification.
 */

// Require telegram bot api.
const TelegramBot = require('node-telegram-bot-api');

// Define channel variable.
const channel = {
  send: (token, to, data) => {
    const bot = new TelegramBot(token)
    bot.sendMessage(to, data)
  },
};

module.exports = channel;
