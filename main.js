const Discord = require('discord.js');
const client = new Discord.Client();


//ONLINE CODE ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("ready", function () {
  console.log("Mon BOT est connecté");
})

client.login("NzY2NTU4Mzg0ODMyMzgwOTQ5.X4lHIA.XAxgFavi94I77Dr4XWfUrliDybc")




//PING TEST ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.")
  }
})




//HELLO USER ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
  if (message.content === "!hello") {
    message.reply('hello')
  }
})




//RANDOM QUOTES ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
  if (message.content === "!quote") {
    message.channel.send(Quotes())
  }
})


function Quotes() {
  let rand = Math.floor(Math.random() * 4);
  switch (rand) {
    case 1:
      return "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you."

    case 2:
      return "Every day is a new beginning. Take a deep breath, smile and start again."

    case 3:
      return "Sometimes, all it takes is a good friend to remind you of all the things you like about your life."

    default:
      return "Remember, when you forgive, you heal. And when you let go, you grow."
  }
}





//8 BALL ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢



client.on("message", message => {
  if (message.content === "!8ball" + "") {
    message.channel.send("What's your question ?");
  }
})

client.on("message", message => {
  if (message.content.includes('!8ball') &&
    message.content.includes('?')) {
    message.channel.send(Ball());

  }
})


function Ball() {

  let rand = Math.floor(Math.random() * 5);
  switch (rand) {
    case 1:
      return "No."

    case 2:
      return "Yes."

    case 3:
      return "Let see later"

    case 4:
      return "Try again."

    default:
      return "Maybe."
  }
}





