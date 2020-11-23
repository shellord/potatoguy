const { meme } = require('memejs')

module.exports = {
	name: 'meme',
	aliases:['Meme'],
	description: 'view random reddit meme!',
	args:false,
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {
        meme(function(err, data) {
            if (err) return console.error(err)
            const embed = client.embed
            .setTitle(data.title)
            .setColor(0x00AE86)
            .setFooter("subreddit: r/"+data.subreddit, "http://i.imgur.com/w1vhFSR.png")
            .setImage(data.url)
            message.channel.send({embed})
          })

	},
}