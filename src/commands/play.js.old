
module.exports = {
	name: 'play',
	aliases:['Play','p','P'],
	description: 'Play an youtube song!',
	args:true,
	category:'music',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${client.emotes.error}`);
        client.player.play(message, args.join(" "))
	},
}