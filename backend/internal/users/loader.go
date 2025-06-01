package users

import (
	"encoding/json"
	"io"
	"os"
	"time"
)

func LoadUsersFromJson(path string) ([]User, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	bytes, err := io.ReadAll(file)

	if err != nil {
		return nil, err
	}

	var users []User
	err = json.Unmarshal(bytes, &users)

	if err != nil {
		return nil, err
	}
	// Calculate days since password change and login.
	for i := range users {
		daysSinceLAD, err := daysSince(users[i].LastAccessDate)
		if err == nil {
			users[i].DaysSinceLastAccess = daysSinceLAD
		}
		daysSincePC, err := daysSince(users[i].PasswordChangedDate)
		if err == nil {
			users[i].DaysSincePwdChange = daysSincePC
		}
	}
	return users, nil
}

func daysSince(dateStr string) (int, error) {
	layout := "Jan 2 2006"
	parsedDate, err := time.Parse(layout, dateStr)
	if err != nil {
		return -1, err
	}

	today := time.Now()
	difference := today.Sub(parsedDate)
	return int(difference.Hours() / 24), nil

}
