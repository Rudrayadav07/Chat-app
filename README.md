# Chat App

## Overview

This repository contains a full-stack real-time chat application with separate client and server implementations:
- `Chat/client`: React-based front-end UI
- `Chat/server`: Node.js/Express backend with MongoDB models

## Features

- User authentication (signup/login)
- One-to-one and group conversations
- Real-time message exchange
- Message history persistence
- Mobile-responsive UI

## Tech Stack

- Frontend: React, Tailwind CSS (optional), React Router
- Backend: Node.js, Express, MongoDB/Mongoose
- API: REST endpoints under `/api`

## Project Structure

- `Chat/client`: front-end app
  - `src/components`: reusable UI components
  - `src/modules`: feature modules (Dashboard, Form, etc.)
- `Chat/server`: backend app
  - `db/connection.js`: MongoDB connection setup
  - `models`: Mongoose schema definitions
  - `routes`: API routes for users/messages/conversations

## Setup and Run

### Prerequisites

- Node.js 16+ (or supported LTS)
- MongoDB instance (local or Atlas)

### Client

```bash
cd Chat/client
npm install
npm start
```

### Server

```bash
cd Chat/server
npm install
# copy .env.example to .env and set MONGO_URI and PORT
npm start
```

## Environment Variables

Typical `.env` values:

```env
MONGO_URI=mongodb://localhost:27017/chat-app
PORT=5000
JWT_SECRET=your_jwt_secret
```

## Notes

- Make sure server is running before using client.
- Update CORS settings in server as needed for your client origin.

## License

MIT
