package main

import (
	"log"

	"github.com/aknotwell/user-metric-app/backend/internal/env"
)

func main() {
	cfg := config{
		addr: env.GetString("ADDR", ":8082"),
	}

	app := &application{
		config: cfg,
	}
	mux := app.mount()

	log.Fatal(app.run(mux))

}
