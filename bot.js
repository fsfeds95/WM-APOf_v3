const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const axios = require('axios');
const sharp = require('sharp');
const { telegramToken, tmdbKey } = require('./config');

const bot = new TelegramBot(telegramToken, { polling: true });
const app = express();

bot.start((ctx) => ctx.reply('¡Hola! Puedes buscar películas ingresando el título en español, el título original o el ID de la película.'));

// Comando para buscar por título
bot.onText(/\/buscar (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];
  // Aquí iría la lógica para buscar la película por título y enviar la información
});

// Comando para buscar por ID de película
bot.onText(/\/id (\d+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const movieId = match[1];
  // Aquí iría la lógica para buscar la película por ID y enviar la información
});

// Función para buscar información de películas (esqueleto)
async function searchMovie(query) {
  // Aquí iría la lógica para realizar la petición a la API de TheMovieDB
}

// Express server listening
const PORT = process.env.PORT || 8225;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});