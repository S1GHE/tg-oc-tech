package bot

import (
	"backend/internal/config"
	"backend/pkg/helpers"
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"github.com/sirupsen/logrus"
)

type Bot struct {
	Bot    *tgbotapi.BotAPI
	log    *logrus.Logger
	config *config.Config
}

func NewBot(log *logrus.Logger, config *config.Config) *Bot {
	const op = "internal.bot.NewBot"
	bot, err := tgbotapi.NewBotAPI(config.TOKEN)
	if err != nil {
		panic(helpers.LogSprintF(op, err))
	}

	return &Bot{
		Bot:    bot,
		log:    log,
		config: config,
	}
}

func (b *Bot) StartTelegramBot() {
	const op = "internal.bot.Start"
	u := tgbotapi.NewUpdate(0)
	u.Timeout = 60

	updates := b.Bot.GetUpdatesChan(u)
	for update := range updates {
		if update.Message != nil {
			switch update.Message.Text {
			case "/start":
				var msg = tgbotapi.NewMessage(update.Message.Chat.ID, "Привет!")
				if _, err := b.Bot.Send(msg); err != nil {
					b.log.Warning(helpers.LogSprintF(op, err))
				}
			}
		}
	}
}
