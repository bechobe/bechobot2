const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 var prefix = config.prefix;

 client.on("message", (message) => {
  if (message.content.startsWith("!s5m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 5 MINUTOS. Suban a la sala SOLO-COUNTDOWN!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s4m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 4 MINUTOS. Suban a la sala SOLO-COUNTDOWN!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s3m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 3 MINUTOS. Suban a la sala SOLO-COUNTDOWN!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s2m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 2 MINUTOS. Suban a la sala SOLO-COUNTDOWN!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s1m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 1 MINUTO. Suban a la sala SOLO-COUNTDOWN!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s20s")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 20 SEGUNDOS. Suban a la sala SOLO-COUNTDOWN!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s10s")) {
    let modrole = message.guild.roles.find("name", "Organizadores")
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida comienza en 10 SEGUNDOS. Suban a la sala SOLO-COUNTDOWN!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!live")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **Live all/ todas las lobbys se juegan!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!rmk")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **Remake todos!, hay demasiadas lobbys!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!start")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here () **ATENCION TODOS EL CONTEO DEL BOT YA VA A COMENZAR!, VAYAN AL CANAL DE VOZ SOLO-COUNTDOWN!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!livrmk")) {
     let modrole = message.guild.roles.find("name", "Organizadores" );
      if(message.member.roles.has(modrole.id)) {
         message.channel.send(`@here **LOBBYS QUE SE JUEGAN:** ${message.content.split(" ").splice(1).join(",")} ,  **EL RESTO REMAKE!**`);
     }
  }
});

client.on('message', message => {
  var sender = message.member;
  var prefix = '>'
  if (message.content.startsWith("!mid")) {
  if (message.channel.id === '513157741657849877') {
    if(message.content.length != 8) {
      message.delete()
      message.member.send('Solamente se puede escribir el codigo de tu lobby, si quieres decir algo por favor usa el chat scrims, gracias!')
    }
  }
  }
});

client.on('message', message => {
  var sender = message.member;
  var prefix = '>'
  if (message.channel.id === '513157741657849877') {
    if(message.content.length != 8) {
      message.delete()
      message.member.send('Solamente se puede escribir el codigo de tu lobby, si quieres decir algo por favor usa el chat scrims, gracias!')
    }
  }
});


client.login(config.token);   