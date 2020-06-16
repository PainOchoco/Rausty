const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let infoEmbed = new Discord.MessageEmbed()
    .setTitle("Liens 📎")
    .setColor(c.color)
    .setDescription(
      "▸ [Youtube](https://www.youtube.com/channel/UCEsD1VlJSCNyHcEfRS5X22A)\n▸ [Discord](https://discord.gg/VuhcNmP)\n▸ [Mail](mailto:New.Raustone@gmail.com)"
    )
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL()
    )
    .setTimestamp();
  message.channel.send(infoEmbed);
};

module.exports.help = {
  name: "info",
  aliases: ["lien", "liens"],
  dsc: "Affiche les information",
  stx: "info",
};
