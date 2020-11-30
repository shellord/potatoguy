const Discord = require('discord.js')

module.exports = {
	name: 'avatar',
	aliases:['Avatar','av'],
	description: 'View user avatar!',
	args:false,
	category:'utils',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        const user = message.mentions.users.first() || message.author
        const avatarURL = user.displayAvatarURL({size:1024})
        
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setAuthor(user.username)
            .setImage(avatarURL)
        message.channel.send(avatarEmbed)
	},
}
