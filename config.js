const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254788281042";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254788281042,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_52_03_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0lvUW9rWnNZcTlXQTAzSE9ocG9pRkMvYVdyemtBZGUrYndGa0hYeEVsRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlgrQ29ndkVtMmxPbWhFOWJPRWxFc2Y3dFN0a08vMkJmK1lGRHZOSHUvRTQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0VTYkFUQVBGa3krSDVlMGJKcWEvMUVkcHpiRFdhZkw5M1VmcGpja1NsZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZWenZyL2RBWStSWWh4K05MaWYzMHowekZtTHR0SDV0OG1oNVBKell6Q2c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0Q2MXlZYTRXRmNlQ0dHSWxGTHFYNFJ1eEhKQlpFcTlRbS9PZkpvTU9IMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInN0bjh4TUFkV3pDVUNSUnRCcW9ZNXRRZmNkL1dmQ1BQcmNPKzVUeUkyblk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrSjhEY09FOGFCSm9iRnBjYnVyL3NTS1UycVhhZXF5dGZncy8xUWFFcjFZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTW5URXBPT1hZZDlOWTg1dU9Fd1lzMEwyellNZER0RUxxUFUwdEN4emdVbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJIWFdxdURBdmoxMTcxWGlJZGRGMnFrV1pMb1NoVVAvOEd5cVRCRFpqaC9uNzRxNXc4QjlhdEZoOVYrR1FNTHIwM1dEUDVjVCtuallCYk42NjdjcktqUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjI1LFwiYWR2U2VjcmV0S2V5XCI6XCJpTXBqU242czBLdDhMSWxtbnp3aDQ2SDdYcksxSmVRdnpEMmFsRzQ1cURnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiblFLNnotT2dRX3FfQ1cxUFIzYVQ2UVwiLFwicGhvbmVJZFwiOlwiYjJhZTIwNGItZWMxNy00YTUwLTkzODktZTRiYmQxODg1NzE3XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJaNjZQMFFaOWRZNUE2MzVZMXNXbzE3eFVxZ3c9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ2hIMFRNNXJBdnpZZmdMd2tqZUNXRDZJbGhNPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkU0UFBMWUVXXCIsXCJtZVwiOntcImlkXCI6XCIyNTQ3ODgyODEwNDI6MjBAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjgxMzg1MDUwODYxNjMyOjIwQGxpZFwiLFwibmFtZVwiOlwiS2hlcm1zb3Ig4pqc77iPXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNeXEwcmdERU1LWnFLOEdHQXc9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ5aGxyRko1a0psTGhIbUhLQkJFbUNBOXlIWmEwYmlDT3R2UXoyb2N1bGhNPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwieU9mbE95UTNoSmNGS3NOaU9vU2thbm11N0VRckQ1NlVBTDJvckora1JOamI2MTFTLzA4d3dIdWx6eDJFWXZKelNJZ2lzQjkvN1ZzQXVrL1BNSlBFQVE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ4QXJEbzNJbG9kMk4yVzdsWDdXZmkrMGx3aGhUZ3FFc1YxdlNCeGcxa2JZb1JCU3ZTc0xwMFpZZzd4RUxGTERaMEZ2M3FYVlNDRlFNTTZTdWhTVVpnQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0Nzg4MjgxMDQyOjIwQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmNvWmF4U2VaQ1pTNFI1aHlnUVJKZ2dQY2gyV3RHNGdqcmIwTTlxSExwWVRcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA5ODM3NTExLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUlNYlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNYi5qc29uIjogIntcImtleURhdGFcIjpcIlNqQUZ1MjVNOFlEaGw0M0g1QkhYUUhPelFSczV6eUdMMW1CUjVwS3VXREk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTI0MDk1ODIwLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDddfSxcInRpbWVzdGFtcFwiOlwiMTcwOTU1OTQzMjg1MlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_aυтнer|| "ĸнerмѕor-MD",
  packname: process.env.PACK_NAME || "🔱",
  botname : process.env.BOT_NAME  || "ᴷᴴᴱᴿᴹˢᴼᴿ",
  ownername:process.env.OWNER_NAME|| "ⒾⓉ'Ⓢ ⓀⒽⒺⓇⓂⓈⓄⓇ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "1aMZ6xim3sidD2b1f5aV3Wwa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "5e983763-7757-4ada-987b-f3fb03026f7e",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "Suhail-MD",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "38bdad3597076ce9e07d3efa373c55f8",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
