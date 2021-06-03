module.exports = {
  name: 'say',
  description: 'says whatever you say',
  execute(message, args) {
    message.channel.send(args);
  },
};
