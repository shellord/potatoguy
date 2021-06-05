module.exports = {
	name: 'loop',
	aliases:['Loop'],
	description: 'Loop the queue!',
    args:false,
    category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing on this server ${client.emotes.error}`)
    
        const repeatMode = client.player.getQueue(message).repeatMode;
    
        if (repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`Repeat mode **disabled** ${client.emotes.success}`)
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`Repeat mode **enabled** ${client.emotes.success}`)
        }
	},
}
