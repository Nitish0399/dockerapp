# Dockerapp

This project is created to explore docker and docker-compose.

Node.js (server) and React.js (web) images are created and dockerized into a multi-container application.

## Installation

Clone the project

```bash
  git clone git@github.com:Nitish0399/dockerapp.git
  cd dockerapp
```

Build the application

```bash
  docker-compose build
```

Run the application

```bash
  docker-compose up
```

Stopping the application

```bash
  docker-compose down
```

To run individual services in containers

```bash
  cd web
  docker run -p 3000:3000 web
```

```bash
  cd server
  docker run -p 5000:5000 server
```
