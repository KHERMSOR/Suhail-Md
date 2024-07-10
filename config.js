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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_31_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHdBMklERUhaRWpOaXh0ZS9HQ1hLWjlnb01xd3BNbythOXdpYytRSHlYQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZEJwYW9OeURUR2FCaGxheThpbWh4Z1wiLFxuICBcInBob25lSWRcIjogXCI0MjY0ZjUzMS01NzI4LTRjYTItODdkMC05ZTM1ZmYxMGI0OTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTAzLFxuICAgICAgODAsXG4gICAgICAyNDIsXG4gICAgICA0LFxuICAgICAgMTYwLFxuICAgICAgMjEzLFxuICAgICAgMjIxLFxuICAgICAgMTgwLFxuICAgICAgMjMyLFxuICAgICAgMTc0LFxuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICAyNTAsXG4gICAgICAxMjYsXG4gICAgICAyNTAsXG4gICAgICAxMixcbiAgICAgIDI1MCxcbiAgICAgIDIwNCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAzNyxcbiAgICAgIDQ4LFxuICAgICAgMjM0LFxuICAgICAgNzgsXG4gICAgICAyNDUsXG4gICAgICAxMDYsXG4gICAgICAzLFxuICAgICAgMjExLFxuICAgICAgMjA0LFxuICAgICAgMTI1LFxuICAgICAgNTcsXG4gICAgICAyMSxcbiAgICAgIDUzLFxuICAgICAgNDcsXG4gICAgICAyMzMsXG4gICAgICAxNzEsXG4gICAgICAxODMsXG4gICAgICAxMTQsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUjdZVzJLSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzg4MjgxMDQyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI4MDIxMjcyNjE0NTA4ODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YVnZNTUZFTExSc2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFdOK0lQNGNwdmRUc3UybjNSNVhndEUwUGtocW82b0VRQ1MrSCtIQ3NqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrbEM1QkxVaVJ5a2VKbisxQ0hkT0F5MDVSV2NJa3dsc3ZYTFZhdDNNYXo1T0R5d3Rkb2Y4M0ZpNWVROCtEblI4aWN6cXE4bU9oSDJxRXlWVFFqdlFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrNGVCb0Q4d3pyV3FCQWNDRStxREJyR2wzUkc2ZmFCUUNWUGdmbFMyR2l4U0U3UDhLcFNHa25IeHhRK3o1V0g2aE5PSm1pT3ZaVkI3VjFRZjkwa2VqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODgyODEwNDI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDc3ODc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "khermsor254",
  ownername:process.env.OWNER_NAME|| "khermsor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
