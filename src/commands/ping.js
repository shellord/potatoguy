module.exports = {
	name: 'ping',
	aliases:['Ping'],
	description: 'Ping!',
	args:false,
	guildOnly:false,
	cooldown: 0,
	execute(message, args) {
		message.channel.send('Pong.')
	},
}