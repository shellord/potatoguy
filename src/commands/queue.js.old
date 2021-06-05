module.exports = {
	name: 'queue',
	aliases:['Queue',"q","Q"],
	description: 'View the music queue!',
	args:false,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
		
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`);

        const queue = client.player.getQueue(message);
    
        if (!queue) return message.channel.send(`No songs currently playing ${client.emotes.error}`);
    
        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    
	},
}