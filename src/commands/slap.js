const Discord = require('discord.js')

module.exports = {
	name: 'slap',
	aliases:['Slap'],
    description: 'slap someone',
    usage:'<@user>',
    category:'emotes',
	args:true,
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {     
        const emoteMSG = new Discord.MessageEmbed()    
  
        gifs = [
            'https://media3.giphy.com/media/gSIz6gGLhguOY/giphy.gif?cid=ecf05e47ai4yzqt76bjez10oqt763kzqvptp08gayszk7hlr&rid=giphy.gif',
            'https://media2.giphy.com/media/3XlEk2RxPS1m8/giphy.gif?cid=ecf05e47a7c8fc22591828a2c243b23e4439de2ebc25b0c7&rid=giphy.gif',
            'https://media1.giphy.com/media/vxvNnIYFcYqEE/giphy.gif?cid=ecf05e47a7c8fc22591828a2c243b23e4439de2ebc25b0c7&rid=giphy.gif',
            'https://media3.giphy.com/media/mEtSQlxqBtWWA/giphy.gif?cid=ecf05e47ai4yzqt76bjez10oqt763kzqvptp08gayszk7hlr&rid=giphy.gif',
            'https://media3.giphy.com/media/uG3lKkAuh53wc/giphy.gif?cid=ecf05e47ai4yzqt76bjez10oqt763kzqvptp08gayszk7hlr&rid=giphy.gif',
            'https://media4.giphy.com/media/12LjisUEAp8bx6/giphy.gif?cid=ecf05e4726eb48fc3ed08cf7ffcab55283fa6d9ad149e8ef&rid=giphy.gif',
            'https://media2.giphy.com/media/P1EomtpqQW34c/giphy.gif?cid=ecf05e477758aebd73889669d93c92a0b221fdbe44d9831f&rid=giphy.gif',
            'https://media2.giphy.com/media/6NEtPmPHmA8Gk/giphy.gif?cid=ecf05e4777534cab20a8893eeb2b08aa2e5f341e082e8814&rid=giphy.gif',
            'https://media4.giphy.com/media/lX03hULhgCYQ8/giphy.gif?cid=ecf05e47f1f95d19ead39832ad8bbb2d6fb8386638cbf72d&rid=giphy.gif'
        ]
        user = message.member.nickname ? message.member.nickname : message.member.user.username
        if(!message.mentions.members.first()) return message.channel.send("You need to mention someone,baka!")
        const embed = emoteMSG
            .setTitle(user + " slaps the shit out of " + message.mentions.members.first().user.username)
            .setColor(0x00AE86)
            .setImage(gifs[Math.floor(Math.random() * gifs.length)])
            message.channel.send({embed})
	},
}