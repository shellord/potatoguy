const { Firebase } = require('../../config/Firebase')
db = Firebase.firestore()

module.exports = {
    name: 'truth',
    aliases: ['Truth'],
    description: 'Asks a random Truth or Dare Truth Question!\n Add a new questin by using `!truth add <question>`\n use `>name` to mention a random user from server in question',
    args: false,
    category: 'fun',
    guildOnly: true,
    cooldown: 3,
    execute(client, message, args) {

        let random_member = client.users.cache.filter(user => !user.bot).random().toString()
        let questionsList = []
        let has_initQuestions = false
        const initQuestions = () => {
            db.collection("truth-or-dare-questions")
            .where("type","==","truth")
            .get()
            .then((snapshot) => {
                const questions = snapshot.docs.map((doc) => ({
                    question: doc.question,
                    ...doc.data(),
                }));
                questionsList = questions
            })   
            has_initQuestions= true
        }

        if(!has_initQuestions){
            initQuestions()
        }
        
        default_questions = [
            "What’s the last lie you told?",
            "Name someone you’ve pretended to like but actually couldn’t stand.",
            "What’s the meanest thing you’ve ever said to someone else?",
            "Who are you most jealous of?",
            "Who do you think the most smartest person in this server?",
            "How many selfies do you take a day?",
            "Tell us something you want us to know.",
            "Pick three people from the group that you would stuck in island with them.",
            "Name someone from the group that you would marry",
            "Pick two people from the group that you think they would be great couple.",
            "Name someone from the group that you would spend your money on.",
            "What did you think about >name when you first interacted ?",
            "If >name dies, will you miss him/her ?",
            "If you were here right now, what would you want to do with >name",
            "Did you ever get jealous from someone in the group..and why?",
            "If it was the end of the world and someone had to sacrifice, would you do it for the group ?",
            "Name someone on the group who said something to you that made you hurt?",
            "What is the first thing you notice in a person when he /she is coming towards you? ",
            "Which of the server member would you tell him/her about your secrets ?",
            "From the people in this server, who do you most want to make out with?",
            "From the people in this server, who do you most care about?",
            "If you woke up and find out that >name is your husband/wife what would you do?",
            "Who would you save >name if they are in danger ?",
            "Have you ever considered cheating on a partner?",
            "Have you ever seen a dead body?",
            "Have you ever had a crush on anyone in this server?",
            "Do you still have feelings for any of your exes?",
            "If you switched genders for a day, what would you do?",
            "When’s the last time you made someone else cry?",
            "What’s your phone number?",
            "Who was your first love?",
            "Are you scared of getting old?",
            "What’s the last movie that made you cry?",
            "Who was your first?",
            "What’s the last song that made you cry?",
            "What’s the last YouTube video you watched?",
            "How long was your longest relationship?",
            "Have you ever done any crime?",
            "What word do you hate the most?",
            "Do you have any hidden talents? What are they?",
            "When’s the last time you got caught in a lie?",
            "What do you think happens when you die?",
            "Have you ever snuck out of the house at night?",
            "Is there an ex with whom you’d consider reconciling?",
            "Who’s the last person who called you?",
            "Would you ever get plastic surgery?",
            "What’s a skill you wish you had?",
            "When and where was your first kiss? Who was it with?",
            "What’s your best pickup line?",
            "What’s your sleaziest pickup line?",
            "What is your deepest darkest fear?",
            "Who is the sexiest person here?",
            "What is your biggest regret?",
            "Who is your crush?",
            "Have you ever cheated or been cheated on?",
            "What is the biggest thing you’ve gotten away with?",
            "What is the most childish thing you still do?",
            "What is the silliest thing you have an emotional attachment to?"
        ]
        

        if (args[0] == 'add'){
            if (message.content.split('add')[1]==''){
                return message.channel.send(client.emotes.error + " Hey Baka!, you need to enter a question to add!")
            }

            author = message.author.username
            guildID = message.channel.guild.id
            question = message.content.split('add')[1].trim()
            type = "truth"

            db.collection("truth-or-dare-questions").add({
                author: author,
                guildID: guildID,
                question: question,
                type: type
            })
            .then(function (docRef) {
                message.channel.send(client.emotes.success + " New Truth Question: `" + message.content.split('add')[1] + "` has been added to question list!")
                db.collection("truth-or-dare-questions")
                        .where("type","==","truth")
                        .get()
                        .then((snapshot) => {
                            const questions = snapshot.docs.map((doc) => ({
                                question: doc.question,
                                ...doc.data(),
                            }));
                            questionsList = questions
                        })   

            })
            .catch(function (error) {
                message.channel.send(client.emotes.error + " Error adding question!")
            })

            return
        }

        function sendQuestion(questions){

            questionList = questions.map(data => data.question)
            questionList = [...questionList,...default_questions]
            random_question = questionList[Math.floor(Math.random() * questionList.length)].replace(">name", random_member)
            message.channel.send({
                embed: {
                    color: 'YELLOW',
                    description: random_question,
                },
            });
        }
        sendQuestion(questionsList)
      
    },
}
