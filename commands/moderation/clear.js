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

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Nu poți folosi aceasta comanda!")
    
    const deleteCount = parseInt(args[0], 10);
    async function clear() {       
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 1 || deleteCount > 100)
            return message.channel.send("Alege un număr între 1 și 100 and 100.");
          
          message.delete();
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched).catch(error => message.reply(`Eroare: ${error}`));
    }
    clear();


    }
}
