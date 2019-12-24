const fact = require("../../data/facts.json");

module.exports = {
    config: {
        name: "facts",
        description: "Iti spun o curiozitate",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["fact"]
    },
    run: async (bot, message, args) => {
		var f = fact.facts[Math.floor(Math.random() * fact.facts.length)];
		message.channel.send(f);
    }
}