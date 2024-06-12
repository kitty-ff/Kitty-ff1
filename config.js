const { Sequelize } = require("sequelize");
const fs = require("fs");
require("dotenv").config();

const toBool = (x) => x === "true";

const DATABASE_URL = process.env.DATABASE_URL || "./assets/database.db";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID === undefined ? "" : process.env.SESSION_ID,
  LANG: process.env.LANG || "EN",
  AUTH_TOKEN: "",
  HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null"  || process.env.HANDLER === undefined ? "^" : process.env.HANDLER,
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH:process.env.WARN_COUNT || "master",
  WARN_COUNT:process.env.WARN_COUNT || 3,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "@user Left The Group",
  PACKNAME: process.env.PACKNAME || "𝞓𝙇𝞘𝞢𝞜",
  AUTHOR: process.env.AUTHOR || "𝞓𝙇𝙁𝞓",
  SUDO: process.env.SUDO || "0,919383400679",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "𝞓𝙇𝞘𝞢𝞜-𝞓𝙇𝙁𝞓",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "𝗔𝗨𝗥𝗢𝗥𝗔",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  SESSION_URL: process.env.SESSION_URL || "",
  DELETED_LOG_CHAT: "120363084228202932@g.us",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
  GEMINI_API: process.env.GEMINI_API === undefined ? "AIzaSyBsedR82cCBWLv09rrNT1CoA8KvsQxqt4o" :  process.env.GEMINI_API,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./assets/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};