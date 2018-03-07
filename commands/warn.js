const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("COuldn't find them yo!");
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("THEY ARE BETTER THAN YOU!");
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
  if(err) console.log(err);
})

let warnEmbed = new Discord.RichEmbed()
.setDescription("Warns")
.setAuthor(message.author.username)
.setColor("#FC6400")
.addField("Warned User", `<@${wUser.id}>`)
.addField("Warned In", message.channel)
.addField("Number of Warnings", warns[wUser.id].warns)
.addField("Reason", reason);

let warnchannel = message.guild.channels.find(`name`, "incidents");
if(!warnchannel) return message.reply("Couldn't find the channel you were looking for??");

warnchannel.send(warnEmbed);

if(warns[wUser.id].warns == 2) {
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole) return message.reply("You should create that role bruh.");

  let mutetime = "10s";
  (wUser.addRole(muterole.id));
  message.channel.send(`<@${wUser.id}> has temporarily been muted`);

  setTimeout(function(){
    wUser.removeRole(muterole.id)
    mexsage.channel.reply(`<@${wUser.id}> have been unmuted.`)
  }, ms(mutetime))
}
if(warns[wUser.id].warns == 3) {
  message.guild.member(wUser).ban(reason);
  message.reply(`<@${wUser.id}> has been banned.`)
}

}

module.exports.help = {
  name: "warn"
}
