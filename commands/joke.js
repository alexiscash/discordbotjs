const axios = require('axios');

module.exports = {
  name: 'joke',
  description: 'generates a funny ass joke from JokeAPI',
  execute(message) {
    message.channel.startTyping();
    const url = 'https://sv443.net/jokeapi/v2/joke/Any';
    axios
      .get(url)
      .then((r) => r.data)
      .then((data) => {
        if (data.error) {
          message.channel.send('something went wrong. please try again');
          return;
        }

        if (data.type === 'single') {
          message.channel.send(data.joke);
          return;
        }

        message.channel.send(data.setup);
        message.channel.send(data.delivery);
        message.channel.stopTyping();
      });
  },
};
