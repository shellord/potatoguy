module.exports = {
    name: 'dare',
    aliases: ['Dare'],
    description: 'Asks a random Truth or Dare, Dare Question!',
    args: false,
    category: 'fun',
    guildOnly: true,
    cooldown: 2,
    execute(client, message, args) {
        random_member = client.users.cache.filter(user => !user.bot).random().toString()

        questions = [
            "Text the first person of your WhatsApp or insta (whatever line group says)",
            "Call " + random_member + " and say (whatever line server people say)",
            "Choose Kill/Marry/Kiss/Slap to the three name people give you.",
            "Do whatever " + random_member + " says for whole hour.",
            "Don’t say a word until you’re next turn.",
            "Record yourself saying Omae wa mou shindeiru and sent audio here.",
            "Leave the server for a day!",
            "Text a friend and say, you're in love with her/him and sent screenshot here",
            "Tell your school or class group you're crazy and sent screenshot here",
            "Sent the last picture in your camera roll",
            "Sent screenshot of your search history",
            "Simp a person in this server others mention in a message"
        ]

        message.channel.send(questions[Math.floor(Math.random() * questions.length)])
    },
}