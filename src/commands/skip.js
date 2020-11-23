module.exports = {
	name: 'skip',
	aliases:['Skip'],
	description: 'skip currently playing song!',
	args:false,
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No songs currently playing ${client.emotes.error}`)
    
        client.player.skip(message)
    
        message.channel.send(`The current music has just been **skipped** ${client.emotes.success}`)
	},
}