const Discord = require('discord.js')

module.exports = {
	name: 'punch',
	aliases:['Punch'],
	description: 'punch <@user>!',
    args:true,
    category:'emotes',
	guildOnly:true,
	cooldown: 0,
	execute(client,message, args) {     
        const emoteMSG = new Discord.MessageEmbed()    
  
        gifs = [
            'https://media3.giphy.com/media/DViGV8rfVjw6Q/giphy.gif?cid=ecf05e478kt9z1sqq4witijhvt3o7q6e9otx5ach2eecv2d2&rid=giphy.gif',
            'https://media1.giphy.com/media/dDR1TIXAWcVoNaYcbj/giphy.gif?cid=ecf05e47pal6chs45uwbajla166m23c0hcmczkcmkjk17nf3&rid=giphy.gif',
            'https://media0.giphy.com/media/SzC42gUrhHopW/giphy.gif?cid=ecf05e47pal6chs45uwbajla166m23c0hcmczkcmkjk17nf3&rid=giphy.gif',
            'https://media1.giphy.com/media/pLnxbpVosgjE4/giphy.gif?cid=ecf05e47yy5zdyv9mrorcknzz4om71s4l0ka5480jzcvsnco&rid=giphy.gif',
            'https://media4.giphy.com/media/BOm1dvdWh3vRS/giphy.gif?cid=ecf05e47efa697cc3472ce0b5c8cf0968917acb745ea13de&rid=giphy.gif',
            'https://media3.giphy.com/media/iWEIxgPiAq58c/giphy.gif?cid=ecf05e47zo1mrkxvwz1brvytyz2vzrs6gtiotqt0zqu7fy3r&rid=giphy.gif',
            'https://media0.giphy.com/media/vc8pALX6OPveo/giphy.gif?cid=ecf05e474a9c23e8ac2c05afd7361ae91ce582dada09737e&rid=giphy.gif',
        ]
        user = message.member.nickname ? message.member.nickname : message.member.user.username
        if(!message.mentions.members.first()) return message.channel.send("You need to mention someone,baka!")
        const embed = emoteMSG
            .setTitle(user + " lands a punch on " + message.mentions.members.first().user.username)
            .setColor(0x00AE86)
            .setImage(gifs[Math.floor(Math.random() * gifs.length)])
            message.channel.send({embed})
	},
}