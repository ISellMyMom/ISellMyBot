const firstMessage = require('./first-message')

module.exports = (client) => {
  const channelId = '776603712742359060'
  firstMessage(client, channelId, 'Test', []);
}
