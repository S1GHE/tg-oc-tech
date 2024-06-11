package helpers

import "fmt"

func LogSprintF(op string, err error) string {
	return fmt.Sprintf("module: %s | %s", op, err)
}
