const { dice }= require("../../data/definedMessages.json");

module.exports = {
    config: {
        name: "dice",
        description: "Dai cu zaru' 6-5, n-ai nevoie de servici.",
        usage: "",
        category: "miscellaneous",
        accessableby: "Membru",
        aliases: ["barbut", "zar"]
    },
    run: async (bot, message, args) => {
		var xdice = dice[Math.floor(Math.random() * dice.length)];
		message.channel.reply("a aruncat: " + xdice);
    }
}
