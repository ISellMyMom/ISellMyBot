const { RichEmbed } = require("discord.js")
const { red_light } = require("../../data/colours.json");

module.exports = {
    config: {
        name: "userinfo",
        description: "Pulls the userinfo of yourself or a user!",
        usage: "@utilizator",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: ["ui"]
    },
    run: async (bot, message, args) => {
    let uEmbed = new RichEmbed()
        .setColor(red_light)
        .setTitle("Informații Utilizator")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Tag:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Creat la:**", `${message.author.createdAt}`, true)
        .setFooter(`Hatz Johnule`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
}
