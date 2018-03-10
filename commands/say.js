const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Just. No.");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage)
}

module.exports.help = {
  name: "say"
}
