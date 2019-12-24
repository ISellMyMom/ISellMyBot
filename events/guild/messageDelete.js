const { log_channel } = require("./data/config.json");
module.exports = async (bot, message) => {
	bot.channels.get(log_channel).send("Message: ``" + message.content + "`` sent in ``#" + message.channel.name + "`` submited by ``" + message.author.tag + "`` was deleted.");
}
