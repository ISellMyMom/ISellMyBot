const g_channel_id = '659688758542860308'; // This should be a String and the channel ID of the giveaways channel
const g_message_id = ''; // This should be a String and the message ID of the givaway message
const winner_amount = ''; // This shiuld be a Number and it represents how many winners you wish to choose

module.exports = { 
    config: {
        name: "giveaway",
        description: "Chestii moca.",
        usage: "numar",
        category: "moderation",
        accessableby: "Moderator"
    },
    run: async (bot, message, args) => {
        
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Nu ai permisiunea sa folosesti aceasta comanda.");
    const g_channel_id = ''; // This should be a String and the channel ID of the giveaways channel
    const g_message_id = ''; // This should be a String and the message ID of the givaway message
    const winner_amount = ''; // This shiuld be a Number and it represents how many winners you wish to choose

    let c = message.guild.channels.find(c => c.name === 'giveaways');
    let m = await c.fetchMessage(MESSAGE_ID);
    let reactions = m.reactions;
    let reaction = reactions.first(); // This reaction would normally be the reaction a user would use to enter the giveawahy
    let users = reaction.users.map(u => u.toString());
    return message.channel.send(`**${users.random()}** has won the giveaway!`); // this uses the Array.prototpe.random method below
  
    const c = message.guild.channels.get(g_channel_id);
    const m = await c.fetchMessage(g_message_id);
    const reactions = m.reactions;
    const reaction = reactions.first(); // This reaction would normally be the reaction a user would use to enter the giveaway
    const users = reaction.users.map(u => u.toString());
    if (winner_amount == 1) {
    	return c.send(`**${users.random()}** has won the giveaway!`); // this uses the Array.prototpe.random method below
    } else {
    	let winners;
    	const selected = randomAmount(users, winner_amount); // this uses the Array.prototype.randomAmount method below

    	if (winner_amount === 2) winners = selected.join(' and ');
    	else winners = selected.join(', ');

    	return c.send(`**${winners}** have won the giveaway!`);
    }
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.randomAmount = function (array, length) => {
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(array.random());
	}

	return arr;
};
    
  }
}
