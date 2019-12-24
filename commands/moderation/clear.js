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
    
    let messagecount = parseInt(numberofmessages);
    message.channel.fetchMessages({ limit: messagecount }).then(messages => message.channel.bulkDelete(messages));

    }
}
