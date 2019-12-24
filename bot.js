const { Client, Collection } = require("discord.js");
const { token } = require("./data/config.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.BOT_TOKEN)
