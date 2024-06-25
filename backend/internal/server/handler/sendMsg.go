package handler

import (
	"backend/pkg/helpers"
	"fmt"
	"github.com/gin-gonic/gin"
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"net/http"
)

func (h *Handler) SendMsg(c *gin.Context) {
	const op = "handler.sendMsg"
	var req struct {
		ChatID       int64    `json:"chatID" binding:"required"`
		Name         string   `json:"name" binding:"required"`
		NumberPeople string   `json:"numberPeople" binding:"required"`
		Phone        string   `json:"phone" binding:"required"`
		Date         string   `json:"date" binding:"required"`
		Time         string   `json:"time" binding:"required"`
		Division     string   `json:"division" binding:"required"`
		Notes        string   `json:"notes"`
		Routes       []string `json:"routes"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		h.log.Warning(helpers.LogSprintF(op, err))
		return
	}

	userIDs := []int64{1209143180, 477868775}

	for _, userID := range userIDs {
		msg := tgbotapi.NewMessage(
			userID, fmt.Sprintf(
				`
Заявка на транпорт:
				
Имя: %s
Количетсво человек: %s
Номер контактного лица: %s
Дата поездки: %s
Время поезкди: %s
Структурное подразделение: %s

Дополнительные комментарий: %s
Список маршрутов: %s
				`,
				req.Name, req.NumberPeople, req.Phone, req.Date, req.Time, req.Division, req.Notes, req.Routes),
		)

		if _, err := h.bot.Bot.Send(msg); err != nil {
			h.log.Warning(helpers.LogSprintF(op, err))
			c.JSON(http.StatusInternalServerError, gin.H{"err": err.Error()})
			return
		}
	}

	msgClient := tgbotapi.NewMessage(
		req.ChatID, "Ваша заявка успешно отправлена!",
	)

	if _, err := h.bot.Bot.Send(msgClient); err != nil {
		h.log.Warning(helpers.LogSprintF(op, err))
		c.JSON(http.StatusInternalServerError, gin.H{"err": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"msg": "ok"})
}
