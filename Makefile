SERVER_DIR = backend/cmd/api
BACKEND_DIR = backend
FRONTEND_DIR=frontend


all: install-backend-deps install-frontend-deps 
	$(MAKE) run-backend &
	$(MAKE) run-frontend &
	wait

run-backend: 
	cd $(SERVER_DIR) && go run *.go


install-backend-deps:
	cd $(BACKEND_DIR) && go mod tidy

run-frontend:
		cd $(FRONTEND_DIR) && npm run dev

install-frontend-deps:
	cd $(FRONTEND_DIR) && npm install



.PHONY: all run-backend install-backend-deps run-frontend install-frontend-deps server
