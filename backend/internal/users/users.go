package users

type User struct {
	Name                string `json:"name"`
	CreateDate          string `json:"create_date"`
	PasswordChangedDate string `json:"password_changed_date"`
	DaysSincePwdChange  int    `json:"days_since_pwd_change"`
	LastAccessDate      string `json:"last_access_date"`
	DaysSinceLastAccess int    `json:"days_since_last_access"`
	MFAEnabled          bool   `json:"mfa_enabled"`
}
