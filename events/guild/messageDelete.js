
module.exports = async (bot, message) => {
	bot.channels.get("646804988139536413").send("Message: ``" + message.content + "`` sent in ``#" + message.channel.name + "`` submited by ``" + message.author.tag + "`` was deleted.");
}