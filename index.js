const Discord = require('discord.js');
const botsettings = require('./botsettings.json')

const bot = new Discord.client({disableEveryone: true})

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online`)
	bot.user.setActivity("", {type: "PLAYING"});
})

client.on('message', message =>{
	const put emoji name = client.emojis.get(emoji => emoji.id === "put emoji id")
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.substring(prefix.length).split(" ")
	const command = args[0].toLowerCase()
	
	if(command === 'ping'){
			message.channel.send(`pong! ${emoji name}`);
		}
	})
