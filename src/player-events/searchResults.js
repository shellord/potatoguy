module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Send the number of the song you want to play!' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};