module.exports = async (bot, reaction, user) => {
  if (user == bot.user || user.bot) return;

  const rChannel = reaction.message.guild.channels.cache.get(
    "721371713836810311"
  );

  if (reaction.message.channel.id === rChannel.id) {
    let applyRole = async () => {
      let emojiName = reaction.emoji.name;
      let rInformatique = reaction.message.guild.roles.cache.get(
        "721371633335533579"
      );
      let rMakers = reaction.message.guild.roles.cache.get(
        "721371725471940720"
      );
      let rLinuxMaster = reaction.message.guild.roles.cache.get(
        "721393335406952491"
      );
      let rGithubMaster = reaction.message.guild.roles.cache.get(
        "661982682825097247"
      );
      let rPingCobalt = reaction.message.guild.roles.cache.get(
        "713127202342043760"
      );

      let member = reaction.message.guild.members.cache.find(
        (member) => member.id === user.id
      );
      try {
        switch (emojiName) {
          case "🖥":
            member.roles.add(rInformatique);
            break;
          case "🛠":
            member.roles.add(rMakers);
            break;
          case "🐧":
            member.roles.add(rLinuxMaster);
            break;
          case "🐙":
            member.roles.add(rGithubMaster);
            break;
          case "💡":
            member.roles.add(rPingCobalt);
            break;
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (reaction.message.partial) {
      try {
        applyRole();
      } catch (err) {
        console.log(err);
      }
    } else {
      applyRole();
    }
  }
};
