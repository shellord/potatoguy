const Discord = require('discord.js')
const { meme } = require('memejs')

module.exports = {
	name: 'meme',
	aliases:['Meme'],
	description: 'view random reddit meme!',
	args:false,
  guildOnly:true,
  usage:'subreddit',
	cooldown: 0,
	execute(client,message, args) {
    if(!args[0]){
        meme(function(err, data) {
            if (err) return console.error(err)
            const emoteMSG = new Discord.MessageEmbed()    
            const embed = emoteMSG
            .setTitle(data.title)
            .setColor(0x00AE86)
            .setFooter("subreddit: r/"+data.subreddit, "http://i.imgur.com/w1vhFSR.png")
            .setImage(data.url)
            message.channel.send({embed})
          })
        }
    else{
        meme(args[0], function(err, data) {
          if (err) return console.error(err)
          const emoteMSG = new Discord.MessageEmbed()    
          const embed = emoteMSG
          .setTitle(data.title)
          .setColor(0x00AE86)
          .setFooter("subreddit: r/"+data.subreddit, "http://i.imgur.com/w1vhFSR.png")
          .setImage(data.url)
          message.channel.send({embed})
        })
    }

	},
}