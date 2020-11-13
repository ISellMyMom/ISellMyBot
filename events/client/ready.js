const roleClaim = require('../handlers/role-claim');
module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
     roleClaim(client);
    let statuses = [
        "porn",
        "from bunker",
        "!help",
        `over ${bot.users.size + 70} users!`,
         `https://lsua.ro/`
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)
}
