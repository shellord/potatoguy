const Discord = require('discord.js')
const { meme } = require('memejs')

module.exports = {
	name: 'mimi',
	aliases:['Mimi'],
	description: 'view random reddit anime meme!',
	args:false,
    guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        meme('animememe', function(err, data) {
          if (err) return console.error(err)
          const emoteMSG = new Discord.MessageEmbed()    
          const embed = emoteMSG
          .setTitle(data.title)
          .setColor(0x00AE86)
          .setFooter("subreddit: r/"+data.subreddit, "http://i.imgur.com/w1vhFSR.png")
          .setImage(data.url)
          message.channel.send({embed})
        })

	},
}