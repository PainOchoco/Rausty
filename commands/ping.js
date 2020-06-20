const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  const msg = await message.channel.send("**Calcul en cours...**");
  let pingEmbed = new Discord.MessageEmbed()
    .setTitle("Ping 🏓")
    .setColor(c.color)
    .setDescription(
      `⏱ Latence: \`${msg.createdTimestamp - message.createdTimestamp}\`ms\n
      📡 API : \`${Math.round(bot.ws.ping)}\`ms`
    )
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL()
    )
    .setTimestamp();
  msg.edit(pingEmbed);
};

module.exports.help = {
  name: "ping",
  aliases: ["ms"],
  dsc:
    "Envoi le temps de délai de l'API Discord et de la latence de la connexion du bot.",
  stx: "ping",
};
