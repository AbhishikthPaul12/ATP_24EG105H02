# MERN Stack Blog Application

This project is a full-stack Blog Application developed using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.
The application allows:
- Users to read articles and add comments
- Authors to create and manage blog posts
- Admins to manage users and platform activity

This project was developed to understand real-world full-stack web application development and API integration.

## Features

### Authentication
- User Registration
- User Login
- JWT Token Authentication
- Protected Routes

### User Features
- View all articles
- Read full article details
- Add comments to articles

### Author Features
- Create new articles
- Edit existing articles
- Activate or deactivate articles
- Manage personal blog posts

### Admin Features
- View all users
- Block or unblock users

## Tech Stack & Architecture

### Frontend
- React.js (v19) & Vite
- Tailwind CSS
- Zustand (State Management)
- Axios
- React Router DOM
- React Toastify / Hot Toast

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js
- Cloudinary & Multer

### Database
- MongoDB
- Mongoose

## Project Structure

```text
Blog-app-Main/
├── Blog-App/          # Node.js/Express Backend
│   ├── APIs/          # API Route Handlers
│   ├── models/        # Mongoose Schemas
│   ├── middlewares/   # Auth & Validation
│   └── server.js      # Entry Point
├── Frontend/          # React/Vite Frontend
│   ├── src/           # Component & Logic
│   ├── public/        # Static Assets
│   └── index.html     # Entry Point
└── README.md          # Project Root Documentation
```

## How the Application Works
1. Users register and login into the application
2. Authors can create and publish articles
3. Users can read articles and post comments
4. Admin can manage all users from the dashboard
5. All data is stored in the MongoDB database

## Setup Instructions

### Backend Setup
```bash
cd Blog-App
npm install
# Configure .env file
npm start
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## Learning Outcomes
- Full-stack MERN development
- REST API creation
- Frontend and backend integration
- Authentication and authorization
- CRUD operations
- MongoDB database handling
- React routing and state management

## Conclusion
This MERN Blog Application demonstrates the development of a complete full-stack web application with authentication, article management, commenting system, and role-based dashboards.

## Developed By
**Abhishikth Paul Ganta**
