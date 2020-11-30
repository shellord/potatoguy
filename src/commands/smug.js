const Discord = require('discord.js')

module.exports = {
	name: 'smug',
	aliases:['Smug'],
	description: 'smug reaction',
    args:false,
    usage:'',
    category:'emotes',
	guildOnly:true,
	cooldown: 0, 
	execute(client,message, args) {   
        const emoteMSG = new Discord.MessageEmbed()    
        gifs = [
           "http://i.imgur.com/zUwqrhM.png",
			"http://i.imgur.com/TYqPh89.jpg",
			"http://i.imgur.com/xyOSaCt.png",
			"http://i.imgur.com/gyw0ifl.png",
			"http://i.imgur.com/kk0xvtx.png",
			"http://i.imgur.com/UIuyUne.jpg",
			"http://i.imgur.com/9zgIjY1.jpg",
			"http://i.imgur.com/Ku1ONAD.jpg",
			"http://i.imgur.com/7lB5bRT.jpg",
			"http://i.imgur.com/BoVHipF.jpg",
			"http://i.imgur.com/vN48mwz.png",
			"http://i.imgur.com/fGI4zLe.jpg",
			"http://i.imgur.com/Gc4gmwQ.jpg",
			"http://i.imgur.com/JMrmKt7.jpg",
			"http://i.imgur.com/a7sbJz2.jpg",
			"http://i.imgur.com/NebmjhR.png",
			"http://i.imgur.com/5ccbrFI.png",
			"http://i.imgur.com/XJL4Vmo.jpg",
			"http://i.imgur.com/eg0q1ez.png",
			"http://i.imgur.com/JJFxxmA.jpg",
			"http://i.imgur.com/2cTDF3b.jpg",
			"http://i.imgur.com/Xc0Duqv.png",
			"http://i.imgur.com/YgMdPkd.jpg",
			"http://i.imgur.com/BvAv6an.jpg",
			"http://i.imgur.com/KRLP5JT.jpg",
			"http://i.imgur.com/yXcsCK3.jpg",
			"http://i.imgur.com/QXG56kG.png",
			"http://i.imgur.com/OFBz1YJ.png",
			"http://i.imgur.com/9ulVckY.png",
			"http://i.imgur.com/VLXeSJK.png",
			"http://i.imgur.com/baiMBP6.png"
        ]
        user = message.member.nickname ? message.member.nickname : message.member.user.username
        const embed = emoteMSG
            .setTitle(user + " smugs ")
            .setColor(0x00AE86)
            .setImage(gifs[Math.floor(Math.random() * gifs.length)])
            message.channel.send({embed})
	},
}
