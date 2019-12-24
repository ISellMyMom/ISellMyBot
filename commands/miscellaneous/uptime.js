module.exports = {
    config: {
        name: "uptime",
        description: "Displays the bots current uptime!",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ut"]
    },
    run: async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} zile, ${hrs.padStart(2, '0')} ore, ${min.padStart(2, '0')} minute, ${sec.padStart(2, '0')} secunde, `
    }

    message.channel.send(`Am fost online timp de: ${duration(bot.uptime)}`)

    }
}
