
module.exports = {
	name: 'pause',
	aliases:['Pause'],
	description: 'Pause the song!',
	args:false,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing on this server ${client.emotes.error}`)
    
        client.player.pause(message)
    
        message.channel.send(`Song ${client.player.getQueue(message).playing.title} **paused** ${client.emotes.success}`)
	},
}


