//          <- Packages ->
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({
  disableEveryone: true,
  partials: ["MESSAGE", "REACTION"],
});

//          <- Commands Handler ->
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) return console.log("[!!!] Commandes introuvables");
  console.log(`[OK!] [COMMANDS] ${jsfile.length} commandes ont été chargés !`);
  jsfile.forEach((f) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.help.name, pull);
    pull.help.aliases.forEach((alias) => {
      bot.aliases.set(alias, pull.help.name);
    });
  });
});

//          <- Events Handler ->
fs.readdir("./events/", (err, eventFiles) => {
  if (err) console.error(err);
  console.log(`[OK!] [EVENTS] ${eventFiles.length} events ont été chargés !`);
  eventFiles.forEach((file) => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

// //          <- Raw Packets ->
// bot.on("raw", (packet) => {
//   if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(packet.t))
//     return;
//   const channel = bot.channels.cache.get(packet.d.channel_id);
//   if (channel.messages.has(packet.d.message_id)) return;
//   channel.fetchMessage(packet.d.message_id).then((message) => {
//     const emoji = packet.d.emoji.id
//       ? `${packet.d.emoji.name}:${packet.d.emoji.id}`
//       : packet.d.emoji.name;
//     const reaction = message.reactions.cache.get(emoji);
//     if (reaction)
//       reaction.users.set(
//         packet.d.user_id,
//         bot.users.cache.get(packet.d.user_id)
//       );
//     if (packet.t === "MESSAGE_REACTION_ADD") {
//       bot.emit(
//         "messageReactionAdd",
//         reaction,
//         bot.users.cache.get(packet.d.user_id)
//       );
//     }
//     if (packet.t === "MESSAGE_REACTION_REMOVE") {
//       bot.emit(
//         "messageReactionRemove",
//         reaction,
//         bot.users.cache.get(packet.d.user_id)
//       );
//     }
//   });
// });

//          <- Error & Login ->
bot.on("error", console.error);
bot.login(config.token);
