const { error } = require("../../data/definedMessages.json");
const { channel, logserver } = require("../../data/config.json");
module.exports = {
    config: {
        name: "clear",
        description: "Șterge mesajele.",
        usage: "linii",
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["sterge", "clean"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send(error.permission)
    
    const deleteCount = parseInt(args[0], 10);
    async function clear() {       
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.channel.send("Alege un număr între 2 și 100.");
          
          message.delete();
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched).catch(error => message.reply(`Eroare: ${error}`));
    }
    clear();
    let sChannel = message.guild.channels.find(c => c.name === channel.messageslog);
    //sChannel.send("Au fost șterse ``" + deleteCount + "`` mesaje din canalul ``" + message.channel.name` + "``.");
    //sChannel.send("Au fost șterse ``" + deleteCount + " mesaje`` din canalul ``#" + message.channel.name +"``.");

   // guilds.get("id", logserver).channels.get("name", channel.messageslog).send("Au fost șterse ``" + deleteCount + " mesaje`` din canalul ``#" + message.channel.name +"``.")
let guild = client.guilds.get(logserver), // returns a Guild or undefined
  channel; 

if (guild) {
  channel = guild.channels.get(channel.messageslog);
  if (channel) setInterval(() => {channel.send("Here you can put the message and stuffs.");}, 10 * 60 * 1000);
  else console.log("There's no channel with that ID."),
} else console.log("There's no guild with that ID.");
    }
}
