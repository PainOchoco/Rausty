const Discord = require("discord.js");
const os = require("os");
const arch = os.arch();
const c = require("../config.json");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL();
  let totalSeconds = bot.uptime / 1000;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  let helpmember = new Discord.MessageEmbed()
    .setTitle("Infos Bot 💾")
    .setColor(c.color)
    .addField("🤖 Bot", bot.user.username + "\nmade for Raustone", true)
    .addField("🥖 Dev", "<@!348165644623020032>", true)
    .addField("🔬 Node", `${process.version}`, true)
    .addField("📚 Library", "discord.js", true)
    .addField("💻 Operating System", `${os.platform} ${arch}`, true)
    .addField(
      "📊 System Stats",
      `• Memory  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB \n• Uptime ${uptime}`,
      true
    )
    .setThumbnail(bicon)
    .setFooter(bot.user.username + " • " + message.content, bicon)
    .setTimestamp();
  message.channel.send(helpmember);
};
exports.help = {
  name: "bot",
  aliases: ["stat", "stats"],
  dsc: "Afficher les informations du bot",
  stx: "info",
};
