🔐 Fullstack Authentication App

A full-stack authentication system built using React, Node.js, Express, and MongoDB with secure JWT-based authentication and password hashing.

This project demonstrates real-world backend authentication practices used in production systems.

🚀 Features

User Registration (Signup)

User Login

Password Hashing using bcrypt

JWT Authentication

Protected Routes

RESTful API

Clean Project Structure

Frontend + Backend Separation

🛠️ Tech Stack
Frontend

React

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Tokens)

bcryptjs

📁 Project Structure
fullstack-auth-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   └── Dashboard.js
    │   ├── App.js
    │   └── index.js
    └── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/fullstack-auth-app.git
cd fullstack-auth-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🔒 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/dashboard	Protected route
🔐 Authentication Flow

User registers with email & password

Password is hashed before storing in database

On login, server generates a JWT token

Token is sent to client

Protected routes require valid JWT in headers

📌 Why This Project Is Important

Demonstrates real backend security

Uses industry-standard authentication

Shows understanding of protected APIs

Clean code and scalable structure

Recruiter-friendly project

🚀 Future Improvements

Refresh Tokens

Role-Based Access Control

Input Validation

Email Verification

Password Reset

UI Styling

Deployment (Render / Netlify)

👨‍💻 Author

Shreyansh Gupta
Full-Stack Developer
GitHub: https://github.com/ShreyanshGupta-WebDeveloper

⭐ Support

If you like this project, please ⭐ the repository.

If you want, next I can:

Improve this README to advanced level

Add screenshot
