package main

import (
	"backend/internal/bot"
	"backend/internal/config"
	"backend/internal/log"
	"backend/internal/server"
	"backend/pkg/helpers"
)

func main() {
	const op = "cmd.main"

	cfg := config.MustLoadConfig()
	logger := log.MustLog(cfg.MODE)
	tgBot := bot.NewBot(logger, cfg)
	srv := server.New(cfg, logger, tgBot)

	go tgBot.StartTelegramBot()

	if err := srv.Run(); err != nil {
		panic(helpers.LogSprintF(op, err))
	}
}
