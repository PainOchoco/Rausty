const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === "348165644623020032") {
    let rInformatique = message.guild.roles.cache.get("721371633335533579");
    let rMakers = message.guild.roles.cache.get("721371725471940720");
    let rLinuxMaster = message.guild.roles.cache.get("721393335406952491");
    let rGithubMaster = message.guild.roles.cache.get("661982682825097247");
    let rPingCobalt = message.guild.roles.cache.get("713127202342043760");

    let roleEmbed = new Discord.MessageEmbed()
      .setColor(c.color)
      .setTitle("Rôles")
      .setDescription(
        "Choisissez vos rôles en cliquant sur les réactions ci-dessous.\n<@&" +
          rInformatique.id +
          ">\n<@&" +
          rMakers.id +
          ">\n<@&" +
          rLinuxMaster.id +
          ">\n<@&" +
          rGithubMaster.id +
          ">\n<@&" +
          rPingCobalt.id +
          ">"
      );
    message.channel.send(roleEmbed).then(async (msg) => {
      await msg.react("🖥");
      await msg.react("🛠");
      await msg.react("🐧");
      await msg.react("🐙");
      await msg.react("💡");
    });
  } else {
    message.channel.send("Seulement PainOchoco peut faire ça 😉");
  }
};

module.exports.help = {
  name: "setupRoles",
  aliases: [],
  dsc: "Envoie le message de role-reaction",
  stx: "setupRoles",
};
