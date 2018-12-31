const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const userID1 = '<@518522790471794719>'
const userID2 = '<@473821316689035266>'
const userID3 = '<@4608164XXX93150209>'
const userID4 = '<@4608164XXX93150209>'
const userID5 = '<@4608164XXX93150209>'
const userID6 = '<@4608164XXX93150209>'
const userID7 = '<@4608164XXX93150209>'
const userID8 = '<@4608164XXX93150209>'


client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage 1`)
   client.user.setActivity(`ta mère sur pornhub`,{type:"WATCHING"})
    })
    client2.on("ready", () => {
        console.log(`${client2.user.tag} prêt pour le carnage 2`)
        client2.user.setActivity("Deadly Gang", {type: 'STREAMING'})
    })
    client3.on("ready", () => {
        console.log(`${client3.user.tag} prêt pour le carnage 3`)
        client3.user.setActivity('Punished "Venom Snake" Diamond Dogs', {type: 'STREAMING'})
    })
    client4.on("ready", () => {
        console.log(`${client4.user.tag} prêt pour le carnage 4`)
        client4.user.setActivity("Des mangas", {type: 'WATCHING'})
    })
    client5.on("ready", () => {
        console.log(`${client5.user.tag} prêt pour le carnage 5`)
        client5.user.setActivity("Ta mère en slipe", {type: 'WATCHING'})
    })
    client6.on("ready", () => {
        console.log(`${client6.user.tag} prêt pour le carnage 6`)
        client6.user.setActivity("Enculé des licornes", {type: 'PLAYING'})
    })
    client7.on("ready", () => {
        console.log(`${client7.user.tag} prêt pour le carnage 7`)
        client7.user.setActivity("Yakuza le roi", {type: 'PLAYING'})
    })
    client8.on("ready", () => {
        console.log(`${client8.user.tag} prêt pour le carnage 8`)
        client8.user.setActivity("$", {type: 'PLAYING'})
    })
client.on("message", message => {
    if(!message.author === 518522790471794719)
    {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé ! 🍆")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire. 👧")
    .addField("EL?Blc", "M'en bat les couilles frère. 🍆")
    .addField("EL?RIPepil", "au-revoir les épiléptiques.")
    .addField("EL?Mi-Grand", "Sale mi-grand vas.")
    .addField("EL?RIPmusulmans", "Tous les musulmans en sueurs ! 😓")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
        if(message.author.id == '518522790471794719')
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
}})
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
client2.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé ! 🍆")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire. 👧")
    .addField("EL?Blc", "M'en bat les couilles frère. 🍆")
    .addField("EL?RIPepil", "au-revoir les épiléptiques.")
    .addField("EL?Mi-Grand", "Sale mi-grand vas.")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}

      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
        if(message.author.id == '518522790471794719')
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
client3.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé ! 🍆")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire. 👧")
    .addField("EL?Blc", "M'en bat les couilles frère. 🍆")
    .addField("EL?RIPepil", "au-revoir les épiléptiques.")
    .addField("EL?Mi-Grand", "Sale mi-grand vas.")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
        if(message.author.id == '518522790471794719')
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
client4.on("message", message => {
    if(!message.author === 360444325592825857)
    {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil", "au-revoir les épiléptiques")
    .addField("EL?Mi-Grand", "Sale mi-grand vas")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
}})
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
client5.on("message", message => {
    if(!message.author === 480047144724856852)
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil", "au-revoir les épiléptiques")
    .addField("EL?Mi-Grand", "Sale mi-grand vas")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
client6.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil", "au-revoir les épiléptiques")
    .addField("EL?Mi-Grand", "Sale mi-grand vas")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
//7
client7.on("message", message => {
    if(!message.author === 500331760492740628)
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil", "au-revoir les épiléptiques")
    .addField("EL?Mi-Grand", "Sale mi-grand vas")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
//8
client8.on("message", message => {
    if(!message.author === 528602522626162689)
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?InfoH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil", "au-revoir les épiléptiques")
    .addField("EL?Mi-Grand", "Sale mi-grand vas")
    message.channel.send(FunH)
}
if(message.content.includes("EL?InfoH")){
    message.delete();
    var InfoH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie Info ℹ️")
    .setColor("#FF57BF")
    .addField("Info ℹ️", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?info [USER]", "Vous envoyez des informations sur vous ou sur la personne mentionné.")
    .addField("EL?serverinfo", "Vous envoyez des informations sur le serveur où vous écrivez.")
    message.channel.send(InfoH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        if(message.author.id)
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
client.login("TOKEN")
client2.login("TOKEN2")
client3.login("TOKEN3")
client4.login("TOKEN4")
client5.login("TOKEN5")
client7.login("TOKEN7")
client8.login("TOKEN8")
