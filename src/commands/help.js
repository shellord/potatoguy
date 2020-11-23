const { prefix } = require('../../config/config.json')

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(client,message, args) {

        const data = []
        const { commands } = message.client

        if (!args.length) {

            categoryList = commands.map(command =>command.category )
            const uniq = categoryList => [...new Set(categoryList)]
            categories = uniq(categoryList)
            data.push('Here\'s a list of all my commands:')
            const embed = client.embed
            .setTitle("Help")
            .setColor(0x00AE86)
            .setFooter("Developed and Maintained by shellord#0001")           
            categories.map(category =>{
                let cmds = []
                commands.filter(command => command.category==category).map(command => {
                    cmds.push(command.name)
                })
                if(!category){
                    category='others'
                }
                embed.addFields({name:category,value:cmds})                
            })
            embed.addFields({name:'help command',value:`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`})
            return message.channel.send({embed})            // data.push('Here\'s a list of all my commands:')
            

            // data.push(commands.map(command => command.name).join(', '))
            // data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
            // return message.channel.send(data, { split: true })
            

            // return message.author.send(data, { split: true })
            // .then(() => {
            //     if (message.channel.type === 'dm') return
            //     message.reply('I\'ve sent you a DM with all my commands!')
            // })
            // .catch(error => {
            //     console.error(`Could not send help DM to ${message.author.tag}.\n`, error)
            //     message.reply('it seems like I can\'t DM you! Do you have DMs disabled?')
            // })

        }

        const name = args[0].toLowerCase()
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))

        if (!command) {
            return message.reply('that\'s not a valid command!')
        }

        data.push(`**Name:** ${command.name}`)

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`)
        if (command.description) data.push(`**Description:** ${command.description}`)
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)

        data.push(`**Cooldown:** ${command.cooldown || 2} second(s)`)
            
        message.channel.send(data, { split: true })

	},
};