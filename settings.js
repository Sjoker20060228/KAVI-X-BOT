const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~4UBTkL5b#KxB7BiRSO8OMwg-7mhgTKq5nxfMjrbhgs5NNjAsMpvY"
global.botname = process.env.BOTNAME || "𝔻𝕩𝔾 ℙ𝕆𝕃𝕆 "

global.ownernumber = process.env.OWNERNUMBER |0721977999| ""
global.ownername = process.env.OWNERNAME || "DxG POLO "
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://ketkshqAqjXygEF5:ketkshqAqjXygEF5@freeuri.dmkyoml.mongodb.net/polo-0721977999?retryWrites=true&w=majority&appName=freeuri"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
