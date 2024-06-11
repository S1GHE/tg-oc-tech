package log

import (
	"backend/pkg/helpers"
	"fmt"
	"github.com/sirupsen/logrus"
	"os"
	"path/filepath"
	"time"
)

func MustLog(mode string) *logrus.Logger {
	const op = "internal.log.MustLog"
	log := logrus.New()
	now := time.Now()
	formatData := now.Format("2006-01-02_15-04")

	file, err := os.OpenFile(
		filepath.Join(
			"logs", fmt.Sprintf("%s_logfile.log", formatData),
		), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666,
	)
	if err != nil {
		panic(helpers.LogSprintF(op, err))
	}

	log.SetOutput(file)
	switch mode {
	case "dev":
		log.SetLevel(logrus.DebugLevel)
	case "test":
		log.SetLevel(logrus.ErrorLevel)
	case "production":
		log.SetLevel(logrus.WarnLevel)
	}

	log.Info("Logger initialized and file is open")
	return log
}
