module.exports = {
	name: 'np',
	aliases:['Np'],
	description: 'Now playing song!',
	args:false,
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`)

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing on this server ${client.emotes.error}`)
    
        const track =  client.player.nowPlaying(message)
    
        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                // footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                    { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        })
	},
}