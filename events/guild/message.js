//const { prefixes } = require("../../data/config.json");
module.exports = async (bot, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;



    const prefixes = ['? ', '?', `<@!?${client.user.id}> `, 'sir '];
    let prefix = false;
    for(const thisPrefix of prefixes) {
        if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if(!prefix) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
}
