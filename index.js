const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

// const commando = require('discord.js-commando');

const bot = new Discord.Client({disableEveryone: true});

// bot.registry.registerGroup('random', 'Random');
// bot.registry.registerDefaults();
// bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message",message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}hello`) {
    return message.channel.send("Hello!");
  }
});

bot.login(botconfig.token);
