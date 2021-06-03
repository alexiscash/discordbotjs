const { Client, Intents } = requires('discord.js');
const client = Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(client.user.name + ' bot is mf ready');
});

client.on('message', (msg) => {
  console.log(msg.content);
});

client.login('token');
