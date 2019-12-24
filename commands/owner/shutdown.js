const { ownerid } = require("../../data/config.json");

module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "",
        type: "owner",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != ownerid) return message.channel.send("You're the bot the owner!")

    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}