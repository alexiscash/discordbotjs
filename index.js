require('dotenv').config();

const fs = require('fs');

const prefix = '.';

const { Client, Intents, Collection, Message } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.commands = new Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require('./commands/' + file);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(client.user.tag + ' bot is mf ready');
});

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (err) {
    console.log(error);
    msg.reply('there was an error executing that command');
  }
});

client.login(process.env.DISCORD_TOKEN);
