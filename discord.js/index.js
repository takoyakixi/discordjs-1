const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log('ready');
})

client.on('message', message => {
  if(message.author.bot) return;
  if(message.content === '!ping'){
    message.channel.send('pong');
  }
  if(message.content === '!pong'){
    message.channel.send('ping');
  }
})

client.login(process.env.TOKEN);