module.exports = async (bot, message) => {
  console.log(`
  ██████╗  █████╗ ██╗   ██╗███████╗████████╗██╗   ██╗
  ██╔══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝╚██╗ ██╔╝
  ██████╔╝███████║██║   ██║███████╗   ██║    ╚████╔╝ 
  ██╔══██╗██╔══██║██║   ██║╚════██║   ██║     ╚██╔╝  
  ██║  ██║██║  ██║╚██████╔╝███████║   ██║      ██║   
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝      ╚═╝  
  `);
  // Activities
  bot.user.setActivity(`reboot 🔄`, { type: "Playing" });
  bot.user.setActivity(`by PainOchoco`, { type: "Watching" });
};
