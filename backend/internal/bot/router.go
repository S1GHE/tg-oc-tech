package bot

import (
	"backend/pkg/helpers"
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

func (b *Bot) Router(msg *tgbotapi.Message) {
	switch msg.Text {
	case "/start":
		const op = "internal.bot.Start"
		var msg = tgbotapi.NewMessage(msg.Chat.ID, "Привет!")
		if _, err := b.Bot.Send(msg); err != nil {
			b.log.Warning(helpers.LogSprintF(op, err))
		}
	}
}
