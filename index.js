const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  if(message.content == 'Uki') {
    message.channel.sendMessage('What may I help you with?');
  }
});

bot.login('NDE4OTEwMzQ5MDQ4MjgzMTQ2.DXocMw.VnaID5t5wjf90jDhdW1VZO1i82I');
