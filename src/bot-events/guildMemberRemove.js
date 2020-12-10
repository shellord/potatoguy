module.exports = (client, message) => {
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    client.user.setActivity(`${memberCount} Potatoes!`, { type: 'WATCHING' })
}

