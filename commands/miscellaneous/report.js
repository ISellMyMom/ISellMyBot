const { report_channel } = require("../../data/config.json");
module.exports = { 
    config: {
        name: "report",
        description: "Raporteaza un membru pentru ca e hacherman.",
        usage: "utilizator motiv",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: [""]
    },
    run: async (bot, message, args) => {

        message.delete()
        // mentioned or grabbed user
        let target = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!target) return message.channel.send("Utilizator invalid").then(m => m.delete(15000))

        // reasoning definition
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(`Scrie si motivul pentru care il raportezi pe **${target.user.tag}**`).then(m => m.delete(15000))

        // grab reports channel
        let sChannel = message.guild.channels.find(x => x.name === report_channel)

        // send to reports channel and add tick or cross

        message.channel.send("Multumesc ca ai raportat acest utilizator.").then(m => m.delete(15000))
        sChannel.send("``" + message.author.tag + "`` l-a raportat pe ``" + target.user.tag + "`` pentru ``" + reason + "``."`).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

  }
}
