const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't find that user, YO.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id));
  (rMember.addRole(gRole.id));

  try{
    rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }
  catch(e){
    message.channel.send(`Congrats to <@${rMemeber.id}>, they have been given the rile ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
