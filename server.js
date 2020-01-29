const Discord = require('discord.js');
const Client = new Discord.Client();
Client.on('ready',() =>{
  console.log('Bot is ready')
  Client.user.setActivity('Talus Developements')
})

Client.on('guildMemberAdd',member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  var embed = new Discord.RichEmbed()
.setTitle("New Member")
.setDescription(`Welcome ${member} to Talus Developments server!` )
.setColor("BLACK")
.setThumbnail(`https://cdn.discordapp.com/attachments/671755177417637888/671843265410236456/b9f882be857dca2e7438c64688dad7c2.png`)
channel.send(embed);
});
Client.on('message',message =>{
  if (message.content === '=test' )
        var string = `test1
    test2
    test3
    test4
    test5`
        var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)]
    var embed = new Discord.RichEmbed() 
  .setDescription(`${random}`)
   message.author.send(embed)
} 
) 
Client.login('NjYxOTA5Njc0MDM5NDQzNDU2.XjCbdQ.xpaOodjFXCr88qVbAqfqqR7u-dw')