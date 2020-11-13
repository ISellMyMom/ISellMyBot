const agree = "✅";
const { channeles } = require("../../data/config.json");
const { welcome } = require("../../data/definedMessages.json");
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "verificare",
        description: "Verifica daca esti un robot. Beep Boop?",
        usage: "",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: [""]
    },
    run: async (bot, message, args) => {
        message.channel.send("Sistemul de verificare este in mentenanță");
        message.delete(5000);
    }
}
