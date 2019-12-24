module.exports = { 
    config: {
        name: "ping",
        description: "Arata ping-ul botulu",
        usage: "",
        category: "moderation",
        accessableby: "Moderator"
    },
    run: async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Asta-i ping-ul meu", "Ii ok? Nu ma pot uita", "Sper ca nu-i asa rau", "Coaie, n-are cum numai atat"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Latenta Bot: \`${ping}\`, Latenta API: \`${Math.round(bot.ping)}\``)
    })
  }
}
