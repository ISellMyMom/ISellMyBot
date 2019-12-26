const { RichEmbed } = require("discord.js")
const { redlight } = require("../../data/colours.json");
const { channel } = require("../../data/config.json");
const { error } = require("../../data/definedMessages.json");

module.exports = {
    config: {
        name: "ban",
        description: "Banează un user pentru o zi.",
        usage: "@utilizator motiv",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["b", "pika", "remove"]
    },
    run: async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(error.permission)

   let banMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
   if(!banMember) return message.channel.send("Please provide a user to ban!")

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "No reason given!"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(error.permission)

   banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
   message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

   message.channel.send(`**${banMember.user.tag}** has been banned`).then(m => m.delete(5000))

    let embed = new RichEmbed()
    .setColor(redlight)
    .setAuthor("Banlog" , bot.user.avatarURL)
    .addField("Membru:", banMember.user.username)
    .addField("Executor:", message.author.username)
    .addField("Motiv:", reason)
    .setThumbnail("http://icons.iconarchive.com/icons/graphicloads/polygon/128/sound-icon.png")

    .setFooter("Data:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === channel.banlog)
        sChannel.send(embed)
    }
}
