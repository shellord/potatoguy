module.exports = {
    name: 'dare',
    aliases: ['Dare'],
    description: 'Asks a random Truth or Dare, Dare Question!\n Add a new questin by using `!dare add <question>`\n use `>name` to mention a random user from server in question',
    args: false,
    category: 'fun',
    guildOnly: true,
    cooldown: 3,
    execute(client, message, args) {
        random_member = client.users.cache.filter(user => !user.bot).random().toString()

        default_questions = [
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

        if (args[0] == 'add') {
            if (message.content.split('add')[1] == '') {
                return message.channel.send(client.emotes.error + " Hey Baka!, you need to enter a question to add!")
            }

            author = message.author.username
            guildID = message.channel.guild.id
            question = message.content.split('add')[1].trim()
            type = "dare"

            db.collection("truth-or-dare-questions").add({
                author: author,
                guildID: guildID,
                question: question,
                type: type
            })
                .then(function (docRef) {
                    message.channel.send(client.emotes.success + " New Truth Question: `" + message.content.split('add')[1] + "` has been added to question list!")

                })
                .catch(function (error) {
                    message.channel.send(client.emotes.error + " Error adding question!")
                })

            return
        }

        function sendQuestion(questions) {

            questionList = questions.map(data => data.question)
            questionList = [...questionList, ...default_questions]
            random_question = questionList[Math.floor(Math.random() * questionList.length)].replace(">name", random_member)
            message.channel.send()
            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    description: random_question,
                },
            });
        }

        db.collection("truth-or-dare-questions")
            .where("type", "==", "dare")
            .get()
            .then((snapshot) => {
                const questions = snapshot.docs.map((doc) => ({
                    question: doc.question,
                    ...doc.data(),
                }));
                sendQuestion(questions)
            })
    },
}