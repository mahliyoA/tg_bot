import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8360980250:AAHsOvqAZSLVY8XZgqNIXZgKzJLlmEs5bMM"

//bot yaratildi//
const bot = new TelegramBot(TOKEN, {polling:true})

bot.on("message", function (msg){
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name

 bot.sendMessage(chatId, 'Xush kelibsiz, ${firstname)',{
    reply_markup: {
        keyboard: [
        [{ text: "Boshlash"}],
        [{ text: "Menu"}, { text: "sozlamalar"}]
        ],
        resize_keyboard:true,
    }
 })

    console.log(msg);
    
})
console.log("bot ishga tushdi");
