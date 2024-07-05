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
    markup = telebot.types.InlineKeyboardMarkup()
    markup.add(
        telebot.types.InlineKeyboardButton(
            text='Начать!', url='https://t.me/UnitedVibesBot/vibe'
        )
    )
    bot.send_message(message.chat.id, 'Правила игры: {}'.format(rools_text), reply_markup=markup)

@bot.callback_query_handler(func=lambda call: True)
def button_click(call):
    bot.answer_callback_query(call.id)
    bot.send_message(call.message.chat.id, "Welcome message here!")

bot.remove_webhook()
