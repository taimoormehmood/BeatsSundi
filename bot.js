const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzE5NzA0MzM5NzI3NTE1NzIx.Xt7UkQ.H5pHFhbtHZeMfXCbM8VIxsmUsK0);//BOT_TOKEN is the Client Secret
