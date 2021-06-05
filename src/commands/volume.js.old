module.exports = {
	name: 'volume',
	aliases:['Volume'],
	description: 'Set the volume of the player!',
	args:true,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No songs currently playing ${client.emotes.error}`)
    
        if (!args[0]) return message.channel.send(`Please enter a number ${client.emotes.error}`)
    
        if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`Please enter a valid number (between 1 and 100) ${client.emotes.error}`)
    
        if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`Please enter a valid number ${client.emotes.error}`)
    
        client.player.setVolume(message, parseInt(args.join(" ")))
    
        message.channel.send(`Volume set to **${args.join(" ")}%** ${client.emotes.success}`)
	},
}