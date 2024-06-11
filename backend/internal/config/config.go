package config

import (
	"backend/pkg/helpers"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	MODE  string
	PORT  string
	TOKEN string
}

func MustLoadConfig() *Config {
	const op = "internal.config.MustLoadConfig"
	if err := godotenv.Load(".env"); err != nil {
		panic(helpers.LogSprintF(op, err))
	}
	return &Config{
		MODE:  os.Getenv("MODE"),
		PORT:  os.Getenv("PORT"),
		TOKEN: os.Getenv("TG_TOKEN"),
	}
}
