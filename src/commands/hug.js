const Discord = require('discord.js')

module.exports = {
	name: 'hug',
	aliases:['Hug'],
	description: 'hug someone',
    args:true,
    usage:'<@user>',
    category:'emotes',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {   
        const emoteMSG = new Discord.MessageEmbed()    
        gifs = [
            'https://media0.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif?cid=ecf05e47kfhonuz8n6zsdu5mw0578r43u6dymipxcifj07uv&rid=giphy.gif',
            'https://media0.giphy.com/media/EvYHHSntaIl5m/giphy.gif?cid=ecf05e47kfhonuz8n6zsdu5mw0578r43u6dymipxcifj07uv&rid=giphy.gif',
            'https://media3.giphy.com/media/l46Ct8dnc7vaiz7k4/giphy.gif?cid=ecf05e4730883670d4891c27a961f61bfcc9fcd688577b60&rid=giphy.gif',
            'https://media3.giphy.com/media/wNGBCVlhthrvG/giphy.gif?cid=ecf05e47afcad8c0a06fe14bfb5c6024c6da1f485f6b965f&rid=giphy.gif',
            'https://media2.giphy.com/media/42YlR8u9gV5Cw/giphy.gif?cid=ecf05e47kfhonuz8n6zsdu5mw0578r43u6dymipxcifj07uv&rid=giphy.gif',
            'https://media0.giphy.com/media/roVZxEfHaVCWA/giphy.gif?cid=ecf05e477a68849cdec3822e1521f0ec5c4796afa3e23a18&rid=giphy.gif',
            'https://media2.giphy.com/media/2Hu0PKkZTtyaA/giphy.gif?cid=ecf05e4720a9efde1165be980974b264492fa59ddc34b884&rid=giphy.gif',
            'https://media3.giphy.com/media/AkWQptokjE5ZS/giphy.gif?cid=ecf05e47a48866ef60872cb21cd5ca1ce1b0e0bbc3747dcf&rid=giphy.gif'
        ]
        user = message.member.nickname ? message.member.nickname : message.member.user.username
        if(!message.mentions.members.first()) return message.channel.send("You need to mention someone,baka!")
        const embed = emoteMSG
            .setTitle(user + " hugs " + message.mentions.members.first().user.username)
            .setColor(0x00AE86)
            .setImage(gifs[Math.floor(Math.random() * gifs.length)])
            message.channel.send({embed})
	},
}