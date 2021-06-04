module.exports = {
  name: 'ready',
  description: 'lets you know if the bot is ready to go',
  execute(message) {
    message.channel.send('ya boi is ready');
  },
};
