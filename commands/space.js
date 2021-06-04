const axios = require('axios');

module.exports = {
  name: 'space',
  description: 'tells how many astronauts are in space rn',
  execute(message) {
    message.channel.startTyping();
    const url = 'http://api.open-notify.org/astros.json';

    axios
      .get(url)
      .then((r) => r.data)
      .then((data) => {
        if (data.message === 'success') {
          message.channel.send(
            `there are currently ${data.number} astronauts in space rn aboard the ${data.people[0].craft}`
          );
          for (const person of data.people) {
            message.channel.send(person.name);
          }
          message.channel.stopTyping();
        }
      });
  },
};
