# User Metric App for Strato-Cloud
Note: This app was created in a macOS environment.
## Set up 
Prerequisites:
- [Go](https://go.dev/doc/install)
- [Node](https://nodejs.org/en/download)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (installed alongside Node)
### Backend
#### 1. Install dependencies.
After cloning the repo, you can run:
```
cd user-metrics-app
cd backend 
go mod tidy
```
This will install all necessary dependencies.
#### 2. Start the server.
You need to be in the correct folder to start the server, which is located in `/backend/cmd/api`. \
To get there, you can use the `cd` (change directory) command as shown previously. <br/>

Once you're in the correct folder, run: \
`go run *.go` (This will run all 3 necessary files at once) <br/>

You should see something like this in the command line: `Server is started at :3030 `.
### Frontend 
First, navigate to the `frontend` directory (same place as the `backend` directory.
Then:
### 1. Install dependencies
Run: `npm install`. This will install the necessary packages to display the table.
### 2. Start the frontend
Run: `npm run dev`. The React app will then start on `http://localhost:5173`. This is the default port for Vite, a template I used when developing the frontend.

## Design 
