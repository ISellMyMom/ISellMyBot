const { RichEmbed } = require("discord.js")
const { cyan } = require("../../data/colours.json");

module.exports = {
    config: {
        name: "serverinfo",
        description: "Afișează informațiile șervetului.",
        usage: "",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: ["si", "serverdesc"]
    },
    run: async (bot, message, args) => {
    let sEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Informații Server")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Nume:**", `${message.guild.name}`, true)
        .addField("**Deținător:**", `${message.guild.owner}`, true)
        .addField("**Membrii:**", `${message.guild.memberCount}`, true)
        .addField("**Roluri:**", `${message.guild.roles.size}`, true)
        .setFooter(`Hatz Johnule`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}
