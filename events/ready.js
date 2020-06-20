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
  bot.user.setActivity(`reboot 🔄`, { type: "PLAYING" });
  bot.user.setActivity("by PainOchoco", {
    type: "PLAYING",
  });
};
