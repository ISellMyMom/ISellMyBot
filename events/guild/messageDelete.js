const { log_channel } = require("../../data/config.json");
module.exports = async (bot, message) => {
	bot.channels.get(658975642695499786).send("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` trimis de ``" + message.author.tag + "`` a fost sters.");
}
