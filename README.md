# User Metric App for Strato-Cloud
Note: This app was created in a macOS environment.

Prerequisites:
- [Go](https://go.dev/doc/install)
- [Node](https://nodejs.org/en/download)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (installed alongside Node)


# Set up (Using Makefile)
## Run Makefile 
If you want to skip the manual setup after cloning the repo, run this:
```
cd user-metrics-app
make all
```


Want to start the server without reinstalling dependencies? Run this:
`make server`

# Design Notes and Tradeoffs. 
## Backend
- Built with Go, using [chi](https://github.com/go-chi/chi) for routing.
- User data is read from a static `users.json` file for each request.
- Included CORS handling by allowing all connections using this [middleware](https://github.com/go-chi/cors).
- User data is routed to the `/api/users` endpoint.
- Calculated days since password change and days since last access dynamically in `loader.go`.
  ### Tradeoffs
    - No error handling.
    - No authentication for GET requests.
    -  CORS allows `http://*`, all addresses are allowed instead of explicitly chosen ones. 
## Frontend 
- Built with React, using [tailwindcss](https://tailwindcss.com/) to do styling and [Vite](https://vite.dev/guide/) to speed up development.
- Conditional highlighting.
- Custom data fetching, abstract API calls.
- Stateful filtering.
  ### Tradeoffs
  - No data validation.
  - Rows are re-rendered on every filter change.  
