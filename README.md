# A scalable MERN stack application implementing authentication, role-based access control (RBAC), and CRUD operations with a clean modular architecture.

---

## 🚀 Project Overview
 
It demonstrates:
- Secure user authentication using JWT
- Role-based access control (User vs Admin)
- CRUD operations on tasks
- Admin-level user management
- API versioning
- Modular and scalable backend architecture
- Basic React frontend for interaction

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcrypt (Password hashing)
- Role-based middleware

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

---

## 📂 Project Structure

```
backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── config/
│ ├── utils/
│ ├── app.js
│ └── server.js
└── .env

frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── services/
│ └── App.jsx
```

---

# 🔐 Authentication & Authorization

### Authentication
- Passwords are hashed using bcrypt.
- JWT is generated on login.
- Protected routes require valid Bearer token.

### Role-Based Access Control (RBAC)

There are two roles:
- `user`
- `admin`

#### User Permissions:
- Register & Login
- Create tasks
- View their own tasks
- Update/Delete their own tasks

#### Admin Permissions:
- View all users
- Delete users
- Delete any task
- Access Admin Dashboard

Role is embedded inside JWT and verified on each request.

---

# 📌 API Versioning

All APIs are versioned under:
```
/api/v1/
```
Example:
```
/api/v1/auth/login
/api/v1/tasks
/api/v1/admin/users
```

---

# 📖 API Endpoints

## 🔐 Auth

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/v1/auth/register | Register new user |
| POST | /api/v1/auth/login | Login & get JWT |

---

## 📌 Tasks (Protected)

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/v1/tasks | User/Admin |
| GET | /api/v1/tasks | User/Admin |
| PUT | /api/v1/tasks/:id | Owner/Admin |
| DELETE | /api/v1/tasks/:id | Admin |

---

## 👑 Admin (Admin Only)

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /api/v1/admin/users | View all users |
| DELETE | /api/v1/admin/users/:id | Delete user |

---

# 📬 API Documentation

The complete API collection is exported using **Postman**.

To test APIs:

1. Import the Postman collection file included in `/docs`
2. Start backend server
3. Login to generate JWT
4. Add JWT as Bearer token in protected requests

---

# ⚙️ Setup Instructions

## 1️⃣ Backend Setup

```
cd backend
npm install
```
Create .env file:
```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```
Start backend:
```
npm run dev
```
2️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs on:
```
http://localhost:5173
```
🔒 Security Practices Implemented

Password hashing using bcrypt

JWT authentication with expiry

Protected middleware

Role-based authorization middleware

Sensitive fields (password) excluded from responses

Admin role not publicly selectable during registration

📈 Scalability & Future Improvements

The project follows a modular architecture for scalability:

Controllers, routes, and middleware separated

Reusable role-based middleware

API versioning for backward compatibility

Future improvements:

Redis caching for frequent queries

Rate limiting (express-rate-limit)

Centralized logging (Winston)

Docker containerization

Microservice separation (Auth Service)

CI/CD integration

Deployment with load balancing

🧪 Testing Strategy

Manual API testing via Postman

Role-based access validation

JWT validation and protected route testing

Admin privilege validation

