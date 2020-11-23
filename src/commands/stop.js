module.exports = {
	name: 'stop',
	aliases:['Stop'],
	description: 'Stop the player!',
	args:false,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {

        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing on this server ${client.emotes.error}`)

        client.player.setRepeatMode(message, false)
        client.player.stop(message)

        message.channel.send(`Music stopped into this server ${client.emotes.success}`)
        
	},
}