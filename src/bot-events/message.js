module.exports = (client,message) => {

    if(message.author.bot) return

    function hook(channel, title, message, color, avatar) { // This function uses quite a few options. The last 2 are optional.
        // Reassign default parameters - If any are blank.
        if (!channel) return console.log('Channel not specified.')
        if (!title) return console.log('Title not specified.')
        if (!message) return console.log('Message not specified.')
        if (!color) color = 'd9a744'; // This is an optional variable. Therefore the default HEX color will be whatever you post there. Mine will be d9a744
        if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png' // This is also an optional variable, you can change the default to any icon.

        
        // We want to remove spaces from color & url, since they might have it on the sides.
        color = color.replace(/\s/g, '')
        avatar = avatar.replace(/\s/g, '')
    
        // This is the start of creating the webhook
        channel.fetchWebhooks() // This gets the webhooks in the channel
            .then(webhook => {
                // Fetches the webhook we will use for each hook
                let foundHook = false
                webhook.map(hook =>{
                    let found
                    hook.name == 'PotatoGuy' ? foundHook=hook:null
                })
     
                if (!foundHook) {
                    channel.createWebhook('PotatoGuy', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                        .then(webhook => {
                            // Finally send the webhook
                            webhook.send('message', {
                                "username": title,
                                "avatarURL": avatar,
                            })
                                .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                                    console.log(error)
                                    return channel.send('**Something went wrong when sending the webhook. Please check console.**')
                                })
                        })
                } else { // That webhook was only for if it couldn't find the original webhook
                    foundHook.send(message, { // This means you can just copy and paste the webhook & catch part.
                        "username": title,
                        "avatarURL": avatar,
                    })
                        .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                            console.log(error)
                            return channel.send('**Something went wrong when sending the webhook. Please check console.**')
                        })
                    }
    
            })
    
    }


    var emojiId
    var userMessage
    var isAnimated = 0
    

        var EMOJI = message.content.substring(message.content.indexOf(':')+1,message.content.lastIndexOf(':'))

        if(EMOJI) message.delete()

        message.guild.emojis.cache.map(emoji=>
            {
                if(emoji.name==EMOJI){
                   emojiId=emoji.id
                   if(emoji.animated) isAnimated=1
                   return
                }
            }
        )
        if(!emojiId) return
        user = message.member.nickname ? message.member.nickname : message.member.user.username

        isAnimated ? 
        userMessage = message.content.replace(':'+EMOJI+':',"<a:"+EMOJI+":"+emojiId+">"):
        userMessage = message.content.replace(':'+EMOJI+':',"<:"+EMOJI+":"+emojiId+">")
        hook(message.channel, user, userMessage, null,message.author.displayAvatarURL()) 
        
        

}