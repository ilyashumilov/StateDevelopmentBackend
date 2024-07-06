import logging
from fastapi import FastAPI, Request
import telebot
from config import settings
from texts import rools_text

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

bot = telebot.TeleBot(settings.TELEGRAM_BOT_TOKEN)

@app.post("/webhook")
async def telegram_webhook(request: Request):
    json_data = await request.json()
    update = telebot.types.Update.de_json(json_data)
    bot.process_new_updates([update])
    return {"status": "ok"}

@bot.message_handler(commands=['start'])
def welcome(message):
    photo_path = 'statics/welcome_image.jpeg'
    with open(photo_path, 'rb') as photo:
        logger.error('asldfhalksdnflknlasdflm;mas;ldfm;lmas;ldfm')
        markup = telebot.types.InlineKeyboardMarkup()
        markup.add(
            telebot.types.InlineKeyboardButton(
                text='Дорожная карта', url='https://t.me/UnitedVibesBot/vibe'
            )
        )
        markup.add(
            telebot.types.InlineKeyboardButton(
                text='Как играть', url='https://t.me/UnitedVibesBot/vibe'
            )
        )
        markup.add(
            telebot.types.InlineKeyboardButton(
                text='Присоединиться к сообществу', url='https://t.me/UnitedVibesBot/vibe'
            )
        )
        markup.add(
            telebot.types.InlineKeyboardButton(
                text='Начать!', url='http://194.87.147.84:3000'
            )
        )
        bot.send_photo(message.chat.id, photo, reply_markup=markup)

@bot.callback_query_handler(func=lambda call: True)
def button_click(call):
    bot.answer_callback_query(call.id)
    bot.send_message(call.message.chat.id, "Welcome message here!")

bot.remove_webhook()
