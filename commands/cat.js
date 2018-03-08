const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (bot,message,args) => {

  let {body} = superagent.get(`https://random.cat/meow.json`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Cat")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
