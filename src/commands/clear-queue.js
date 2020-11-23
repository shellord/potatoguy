module.exports = {
	name: 'clear',
	aliases:['Clear'],
	description: 'Clear the queue!',
	args:false,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No songs currently playing ${client.emotes.error}`)
    
        client.player.clearQueue(message)
    
        message.channel.send(`The queue has just been removed ${client.emotes.success}`)	
    },
}