const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM2ODQ1NzgzNDEzODE3MzU1.Dbte1g.n8klczqLjyL_89aRzTCdgSuE-sU'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDM2ODQ1NzgzNDEzODE3MzU1.Dbte1g.n8klczqLjyL_89aRzTCdgSuE-sU');

client.on('message', message => {
  if (message.content === '.avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
if (message.content.toLowerCase().startsWith('.ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send("` Nu ai acces la aceasta comanda! :negative_squared_cross_mark:  `");
  if(!member) return message.channel.send("** Ai uitat sa mentionezi tradatorul! :negative_squared_cross_mark: **");
  if(!member.kickable)  return message.channel.send("`Aceasta persoana nu poate fi executata! :negative_squared_cross_mark: `");
  if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru ce ii dai ban lui " + member.tag + " ! :negative_squared_cross_mark: `");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost executat de **${message.author.tag}** Motivul: ${reason} `);
}
})

client.on('message', message => {
if (message.content === '.serverinfo') {
    Promise.all([
        message.react('ðŸ˜Ž'),
        message.react('ðŸ¤‘'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Nume Server", message.guild.name)
        .addField("ID Server", message.guild.id)
        .addField("Nivel Securitate", message.guild.verificationLevel)
        .addField("Fondator", message.guild.owner)
        .addField("Data Fondarii server-ului", message.guild.createdAt)
        .addField("Membrii+Boti", message.guild.memberCount)
        .addField("Canale", message.guild.channels.size)
        .addField("eu-central", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

client.on('message', message => {
   if(message.content.startsWith('.mass')) {
   if(message.author.id === "437327175973208075" ||
message.author.id === "437327175973208075"){
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(" ")
const argsresult = args.join(" ")
      let reason = args.join(" ")
   if(!args[1]) {  }
   if(args[1]) {
message.channel.guild.members.forEach(member => {{
member.send(reason)
message.delete() }})}}} });

client.on('message', message => {
if (message.content.toLowerCase().startsWith('.kick')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.reply("**Scuze, dar nu ai acces la aceasta comanda.!**");
  if(!member) return message.reply("**Mai ai ceva! Mentionul lui..**");
  if(!member.kickable)  return message.reply("**Aceasta persoana nu poate fi data afara de pe server!**");
  if(!reason) return message.reply("**Ai uitat sa pui motivul pentru care ii dai Kick lui " + member.tag + " !**");
  member.kick(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Kick din cauza unei erori : ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost dat afara de **${message.author.tag}** Motivul: ${reason}`);
}
})

client.on('ready', () => {
  client.user.setGame('Imperial - Army | .help', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', msg => {
  if (msg.content === '.help') {
    msg.channel.send('***Comenzi :tools: ***  \n\ ** :pick: .ban \n\ ```.ban [@user] [motiv] pentru a bana pe cineva``` \n\ :pick: -avatar \n\ ```-avatar pentru vizionara avatarului``` \n\ :pick: .kick \n\ ```.kick [@user] [motiv] pentru a dat kick cuiva``` \n\ :pick: .serverinfo \n\ ```pentru a vedea informatile server-ului``` ** ');
  }
});

