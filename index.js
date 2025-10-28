import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8360980250:AAHsOvqAZSLVY8XZgqNIXZgKzJLlmEs5bMM"

//bot yaratildi//
const bot = new TelegramBot(TOKEN, {polling:true})

bot.on("message", function (msg) {
    bot.sendMessage(msg.chat.id, "Hello")
    console.log("Salom");  
})