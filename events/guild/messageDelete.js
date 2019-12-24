const { log_channel } = require("../../data/config.json");
module.exports = async (bot, message) => {
	bot.channels.find('name', log_channel).send("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` trimis de ``" + message.author.tag + "`` a fost sters.");
}
