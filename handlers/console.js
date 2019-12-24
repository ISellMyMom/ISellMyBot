module.exports = (bot) => {
	let prompt = process.openStdin()
	prompt.addListener("data", res => {
		let x = res.toString().trim().split(/ +/g)
        bot.channels.get("658800594856968241").send(x.join(" "));
    });
}