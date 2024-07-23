const { command, isPrivate, serialize } = require("../../lib/");
const { loadMessage } = require("../database/StoreDb");

command(
  {
    pattern: "quoted",
    fromMe: isPrivate,
    desc: "quoted message",
  },
  async (message, match) => {
    if (!message.reply_message && !match) {
      return await message.reply("*Reply to a message or provide ID*");
    }

    let key = match || (message.reply_message && message.reply_message.key.id);
    if (!key) {
      return await message.reply("*No valid key found*");
    }

    let msg = await loadMessage(key);
    console.log("Key: '"+key+"'\n\n"+msg);

    if (msg) {
      const relayOptions = { messageId: msg.message.key.id };
      return await message.client.relayMessage(message.jid, msg, relayOptions);
    }

    if (!msg) {
      return await message.reply(
        "_Message not found, maybe bot might not be running at that time_"
      );
    }

    msg = serialize(
      JSON.parse(JSON.stringify(msg.message)),
      message.client
    );

    if (!msg.quoted || !msg.quoted.message) {
      return await message.reply("No quoted message found");
    }

    await message.forward(message.jid, msg.quoted.message);
  }
);