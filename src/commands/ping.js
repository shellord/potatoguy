module.exports = {
	name: 'ping',
	aliases:['Ping'],
	description: 'Ping!',
	args:false,
	category:'utils',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
		message.channel.send(`Ping : **${client.ws.ping}ms** ${client.emotes.success}`)
	},
}