const { channel } = require("../../data/config.json");
module.exports = async (bot, message) => {
        if(message.content.includes("clear")) return;
	if(message.channel.name ==  channel.newbie) return;

	bot.channels.find('name', channel.log).send("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` trimis de ``" + message.author.tag + "`` a fost sters.");
}
