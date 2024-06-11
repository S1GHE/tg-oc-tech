package handler

import (
	"backend/internal/bot"
	"backend/internal/config"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type Handler struct {
	log    *logrus.Logger
	config *config.Config
	bot    *bot.Bot
}

func NewHandler(log *logrus.Logger, config *config.Config, bot *bot.Bot) *Handler {
	return &Handler{
		bot:    bot,
		log:    log,
		config: config,
	}
}

func (h *Handler) New() *gin.Engine {

	router := gin.New()
	router.Use(cors.New(middlewareCORS()))

	api := router.Group("/api")
	{
		api.POST("/", h.SendMsg)
	}

	return router
}

func middlewareCORS() cors.Config {
	cfgCors := cors.DefaultConfig()
	cfgCors.AllowAllOrigins = true
	cfgCors.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	cfgCors.AllowHeaders = []string{"Origin", "Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization"}

	return cfgCors
}
