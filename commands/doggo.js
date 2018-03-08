const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (bot,message,args) => {

  let {body} = superagent.get(`https://random.dog.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Doggo")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "doggo"
}
