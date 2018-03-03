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

  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor('#15f153')
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("Created On", message.guild.joinedAt)
    .addField("Created On", message.guild.memberCount);


    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}botinfo`) {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor('#15f153')
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)

    return message.channel.send(botembed);
  }
});

bot.login(botconfig.token);
