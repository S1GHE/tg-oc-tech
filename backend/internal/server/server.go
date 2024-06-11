package server

import (
	"backend/internal/bot"
	"backend/internal/config"
	handlers "backend/internal/server/handler"
	"context"
	"fmt"
	"github.com/sirupsen/logrus"
	"net/http"
	"time"
)

type Server struct {
	server *http.Server
	config *config.Config
	log    *logrus.Logger
	bot    *bot.Bot
}

func New(cfg *config.Config, log *logrus.Logger, bot *bot.Bot) *Server {
	return &Server{
		bot:    bot,
		config: cfg,
		log:    log,
	}
}

func (s *Server) Run() error {
	handler := handlers.NewHandler(s.log, s.config, s.bot)

	s.server = &http.Server{
		Addr:           fmt.Sprintf(":%s", s.config.PORT),
		Handler:        handler.New(),
		MaxHeaderBytes: 1 << 20,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
	}

	return s.server.ListenAndServe()
}

func (s *Server) ShutDown(ctx context.Context) error {
	return s.server.Shutdown(ctx)
}
