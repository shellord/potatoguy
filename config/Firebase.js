var firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAzpyRPvo6e_SXbY_r6vAQ61vGRs-VtOoc",
    authDomain: "potatoguy-discordbot.firebaseapp.com",
    projectId: "potatoguy-discordbot",
    storageBucket: "potatoguy-discordbot.appspot.com",
    messagingSenderId: "359086185312",
    appId: "1:359086185312:web:bf64c202a1217694449c05",
    measurementId: "G-C3Z2D579QS"
}

exports.Firebase = firebase.initializeApp(firebaseConfig)

