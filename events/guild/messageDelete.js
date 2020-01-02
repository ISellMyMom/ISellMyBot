const { channel } = require("../../data/config.json");
const { RichEmbed } = require("discord.js");
const { cream } = require("../../data/colours.json");
module.exports = async (bot, message) => {
        if(message.content.includes("clear", "report")) return;
	if(message.channel.name ==  channel.newbie) return;
        let sEmbed = new RichEmbed()
            .setColor(cream)
            .setTitle("#" + message.channel.name + " | " + message.author.tag)
            .addField("Mesaj:" , message.content)
            //.setDescription("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` a fost șters de ``" + message.author.tag + "``");

	bot.channels.find(x => x.name === channel.messageslog).send(sEmbed);//("Mesajul ``" + message.content + "`` din ``#" + message.channel.name + "`` trimis de ``" + message.author.tag + "`` a fost sters.");
}
