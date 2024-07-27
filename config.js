const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254788281042";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254788281042,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_02_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0Z2RmR0Z6SnhubUJLc2hhSTRUNTNQcnN1WEZveVpnSWIwNDY5YmRnVy80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCRG5QM1NxQVREU25iSlFFazZMeVlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhNmY3NjlmLWU3OTAtNDMzMy05ZDljLWUyZTc0NTdiNjZlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE4OCxcbiAgICAgIDIwMCxcbiAgICAgIDI4LFxuICAgICAgMTM5LFxuICAgICAgNzEsXG4gICAgICAyMDUsXG4gICAgICAxMjcsXG4gICAgICAyLFxuICAgICAgMTg1LFxuICAgICAgMjMzLFxuICAgICAgMjI3LFxuICAgICAgMTA0LFxuICAgICAgNDAsXG4gICAgICA2NixcbiAgICAgIDE4MyxcbiAgICAgIDU5LFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE5NyxcbiAgICAgIDEyNyxcbiAgICAgIDE2MSxcbiAgICAgIDEzMSxcbiAgICAgIDE2NSxcbiAgICAgIDIzNCxcbiAgICAgIDQsXG4gICAgICAyMTEsXG4gICAgICAxNDMsXG4gICAgICAxNTAsXG4gICAgICAyNixcbiAgICAgIDE0MCxcbiAgICAgIDExNyxcbiAgICAgIDExNCxcbiAgICAgIDEyNyxcbiAgICAgIDIxLFxuICAgICAgODIsXG4gICAgICAxNzUsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUc5NFpBVDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4ODI4MTA0Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyODAyMTI3MjYxNDUwODg6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYlZ2TU1GRU1iR2tiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBXTitJUDRjcHZkVHN1Mm4zUjVYZ3RFMFBraHFvNm9FUUNTK0grSENzamM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzgycTJvZjNIcERUY2VpT1dOREpiRllnM2dReEZFeVhZdmdHTXU4b1o5cjFlVlpJTjJrSXNmVnFHa3BNQWtpS01nbS9idXhNYzFaSDg0YzFZUDBYRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0pjSDRBV0o2NHNDZU9KSGxzUDVkRk8xT1UwSFd1Q0RvR1hOeDJObHNLWTVLV0RMdzBiVlpMK1gzYXJpZm5jckhTdVpiODM3WmlQbkdRcksvQTVHaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg4MjgxMDQyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA0OTM1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "khermsor_28",
  ownername:process.env.OWNER_NAME|| "khermsor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
