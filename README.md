# Chat Application

A modern, real-time chat application built with React and Node.js that enables users to communicate instantly with secure authentication and persistent messaging.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Socket.io Events](#socketio-events)
- [Database Schema](#database-schema)
- [Features in Detail](#features-in-detail)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure sign-up and sign-in with JWT tokens
- **Real-time Messaging**: Instant message delivery using Socket.io
- **Conversation Management**: Create and manage multiple conversations
- **User Presence**: See who is online in real-time
- **Password Security**: Passwords encrypted with bcryptjs
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Protected Routes**: Authenticated access to dashboard and chat features
- **Message Persistence**: All messages stored in MongoDB database
- **User Profiles**: Create and manage user accounts

## 🛠 Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **React Router DOM 6**: Client-side routing and navigation
- **Socket.io Client**: Real-time bi-directional communication
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features

### Backend
- **Node.js**: JavaScript runtime
- **Express 4**: Web application framework
- **MongoDB + Mongoose**: NoSQL database and ODM
- **Socket.io**: Real-time communication protocol
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcryptjs**: Password hashing and encryption
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development server with auto-reload

## 📁 Project Structure

```
ChatApp/
├── client/                          # React frontend application
│   ├── public/                      # Public assets
│   │   ├── index.html              # HTML entry point
│   │   ├── manifest.json           # PWA manifest
│   │   └── robots.txt              # SEO robots file
│   ├── src/                         # Source code
│   │   ├── components/             # Reusable components
│   │   │   ├── Button/             # Button component
│   │   │   └── Input/              # Input field component
│   │   ├── modules/                # Page modules
│   │   │   ├── Dashboard/          # Main chat dashboard
│   │   │   └── Form/               # Authentication forms
│   │   ├── assets/                 # Images and static files
│   │   ├── App.js                  # Main App component with routing
│   │   ├── App.css                 # App styles
│   │   ├── index.js                # React DOM render
│   │   ├── index.css               # Global styles
│   │   ├── App.test.js             # App tests
│   │   ├── setupTests.js           # Test configuration
│   │   └── reportWebVitals.js      # Performance metrics
│   ├── build/                       # Production build output
│   ├── package.json                # Frontend dependencies
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   └── README.md                   # Frontend-specific documentation
│
├── server/                          # Node.js backend application
│   ├── models/                     # Mongoose schemas
│   │   ├── Users.js                # User model
│   │   ├── Conversations.js        # Conversation model
│   │   └── Messages.js             # Message model
│   ├── db/                         # Database configuration
│   │   └── connection.js           # MongoDB connection setup
│   ├── app.js                      # Express app configuration
│   ├── package.json                # Backend dependencies
│   └── package-lock.json           # Locked dependency versions
│
└── README.md                        # Project documentation (this file)
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use MongoDB Atlas (cloud)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd ChatApp
```

### Step 2: Install Server Dependencies

```bash
cd server
npm install
```

### Step 3: Install Client Dependencies

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Server Configuration

1. **Environment Variables** (optional)
   
   Create a `.env` file in the `server` directory:

   ```env
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/chat_app
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

   Default values (if no .env file):
   - PORT: 8000
   - Socket.io Port: 8080
   - MongoDB: `mongodb://localhost:27017/chat_app`

2. **MongoDB Connection**
   
   Update [server/db/connection.js](server/db/connection.js) if using MongoDB Atlas:

   ```javascript
   // Replace with your MongoDB Atlas connection string
   mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/chat_app');
   ```

### Client Configuration

The client connects to the backend server. Make sure the backend is running on `http://localhost:8000` before starting the client.

Socket.io connection is configured in the client to connect to `http://localhost:8080`.

## 🎯 Running the Application

### Development Mode

**Terminal 1 - Start MongoDB (if local)**
```bash
mongod
```

**Terminal 2 - Start Backend Server**
```bash
cd server
npm run dev
```

The server will start on `http://localhost:8000` with Socket.io on port `8080`

**Terminal 3 - Start Frontend Client**
```bash
cd client
npm start
```

The client will open in your browser at `http://localhost:3000`

### Production Build

```bash
cd client
npm run build
```

This creates an optimized production build in the `build/` directory.

## 📡 API Endpoints

### User Authentication

#### Sign Up
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**: User object with JWT token

#### Sign In
- **URL**: `POST /api/auth/signin`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**: User object with JWT token

### Users

#### Get All Users
- **URL**: `GET /api/users`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Array of user objects

#### Get User by ID
- **URL**: `GET /api/users/:userId`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Single user object

### Conversations

#### Get All Conversations
- **URL**: `GET /api/conversations`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Array of conversation objects

#### Create Conversation
- **URL**: `POST /api/conversations`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "participants": ["userId1", "userId2"]
  }
  ```
- **Response**: Conversation object

### Messages

#### Get Messages for Conversation
- **URL**: `GET /api/messages/:conversationId`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Array of message objects

#### Create Message
- **URL**: `POST /api/messages`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "conversationId": "convId",
    "senderId": "userId",
    "message": "Hello!",
    "receiverId": "recipientId"
  }
  ```
- **Response**: Message object

## 🔌 Socket.io Events

### Client → Server

#### addUser
Emitted when a user logs in
```javascript
socket.emit('addUser', userId);
```

#### sendMessage
Emitted when a user sends a message
```javascript
socket.emit('sendMessage', {
  senderId: 'userId',
  receiverId: 'recipientId',
  message: 'Hello!',
  conversationId: 'convId'
});
```

### Server → Client

#### getUsers
Broadcasted to all clients with list of online users
```javascript
socket.on('getUsers', (users) => {
  // users = [{ userId, socketId }, ...]
});
```

#### getMessage
Emitted to sender and receiver when a message is sent
```javascript
socket.on('getMessage', {
  senderId: 'userId',
  receiverId: 'recipientId',
  message: 'Hello!',
  conversationId: 'convId'
});
```

#### getNotification
Emitted when someone sends a message
```javascript
socket.on('getNotification', (data) => {
  // Notification data for incoming message
});
```

## 💾 Database Schema

### Users Collection

```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (encrypted),
  createdAt: Date,
  updatedAt: Date
}
```

### Conversations Collection

```javascript
{
  _id: ObjectId,
  participants: [ObjectId],      // Array of user IDs
  lastMessage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Messages Collection

```javascript
{
  _id: ObjectId,
  conversationId: ObjectId,
  senderId: ObjectId,
  receiverId: ObjectId,
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 Features in Detail

### Authentication Flow

1. User signs up with email and password
2. Password is hashed using bcryptjs
3. User data stored in MongoDB
4. JWT token issued on successful authentication
5. Token stored in localStorage for persistent login
6. Protected routes check for valid token

### Real-time Messaging

1. User sends message via UI
2. Message emitted to server via Socket.io
3. Server stores message in MongoDB
4. Server broadcasts message to recipient
5. Both users receive notification
6. UI updates with new message

### User Presence

1. When user logs in, `addUser` event sent with userId
2. Server adds user to active users list
3. Server broadcasts updated users list to all clients
4. UI displays online status for each user
5. When user disconnects, removed from active list

## 🔐 Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Protected Routes**: Client-side route protection
- **CORS Enabled**: Controlled cross-origin requests
- **Password Validation**: Secure password requirements

## 🐛 Troubleshooting

### Server Won't Start

**Problem**: `Port 8000 already in use`
```bash
# Find and kill process on port 8000
# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :8000
kill -9 <PID>
```

**Problem**: MongoDB connection failed
- Ensure MongoDB service is running
- Check MongoDB URI in connection string
- Verify network access (if using Atlas)

### Client Won't Connect to Server

**Problem**: `CORS error`
- Ensure server is running on correct port
- Check Socket.io connection URL in client code
- Update CORS origin in server/app.js

**Problem**: `Socket.io connection refused`
- Verify Socket.io is running on port 8080
- Check firewall settings
- Ensure client connection URL is correct

### Messages Not Updating

**Problem**: Messages not appearing in real-time
- Check Socket.io connection status
- Verify `getMessage` listener is set up
- Check browser console for errors
- Ensure proper conversationId is being used

### Login Issues

**Problem**: `Invalid token` error
- Clear localStorage and sign in again
- Check token expiration settings
- Verify JWT_SECRET matches in production

### Build Errors

**Problem**: `Module not found` errors
```bash
# Clear dependencies and reinstall
rm -rf node_modules
npm install
```

**Problem**: Port 3000 already in use
```bash
export PORT=3001  # Use different port
npm start
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Socket.io Documentation](https://socket.io/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

Created for real-time chat communication.

---

## 🚀 Quick Start Summary

```bash
# 1. Clone and navigate to project
git clone <repo-url>
cd ChatApp

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Start MongoDB (if running locally)
mongod

# 5. Start backend server (in server directory)
npm run dev

# 6. Start frontend (in client directory)
npm start

# 7. Open browser and navigate to http://localhost:3000
```

You should now be able to sign up, log in, and start chatting!

---

**Last Updated**: March 2026  
**Version**: 1.0.0
