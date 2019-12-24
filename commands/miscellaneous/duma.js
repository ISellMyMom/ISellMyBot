const duma = require("../../data/dume.json");

module.exports = {
    config: {
        name: "duma",
        description: "Iti dau o duma.",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["dume"]
    },
    run: async (bot, message, args) => {
		var dau_duma = duma.dume[Math.floor(Math.random() * duma.dume.length)];
		message.channel.send(dau_duma);
    }
}