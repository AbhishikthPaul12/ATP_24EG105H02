# MERN Multi-Role Blog Application

A robust, full-stack Blog Application built with the **MERN** stack, featuring **Role-Based Access Control (RBAC)** for Users, Authors, and Admins. This project demonstrates secure authentication, state management, and seamless frontend-backend integration.

## Features

### ** Secure Authentication**
- **JWT-based Auth:** Uses JSON Web Tokens stored in secure, HTTP-only cookies.
- **Role-Based Access:** Protected routes and specific dashboards for three distinct roles:
  - **User:** Browse articles, read content, and interact via comments.
  - **Author:** Write, edit, delete, and manage personal articles.
  - **Admin:** System overview with the ability to manage user and author accounts.

### ** Content Management**
- **Article Lifecycle:** Full CRUD operations for authors.
- **Interactive Comments:** Users can engage with authors by leaving feedback.
- **Dynamic UI:** Real-time updates and notifications using `react-hot-toast`.

### ** Modern Frontend**
- **Vite:** High-performance build tool for a smooth development experience.
- **Zustand:** Lightweight and efficient state management.
- **Tailwind CSS v4:** Utility-first styling for a sleek, responsive design.

## Tech Stack

 **Frontend** - React, Vite, Zustand, Tailwind CSS v4, React Hook Form, Axios |
 **Backend** - Node.js, Express.js (v5), JWT, Bcrypt.js, Multer |
 **Database** - MongoDB with Mongoose ODM |
 **Utilities** - Cloudinary (Image handling), React-Hot-Toast, React Router v7 |


## Project Structure


├── Blog-App/ (Backend)
│   ├── APIs/        # Logic for User, Author, Admin, and Auth routes
│   ├── models/      # Mongoose schemas for Users and Articles
│   ├── middlewares/ # Token verification & Auth logic
│   └── server.js    # Express server entry point
└── Frontend/ (Frontend)
    ├── src/
    │   ├── components/ # Role-specific pages & shared components
    │   ├── store/      # Zustand store for global state
    │   └── App.jsx     # Route configuration (React Router v7)


## Installation & Setup

### **1. Clone the Repository**

git clone <your-repo-url>
cd week-7/Blog-app-Main


### **2. Backend Setup**
1. Navigate to the backend directory: `cd Blog-App`
2. Install dependencies: `npm install`
3. Create a `.env` file and add:
  
   DB_URL=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET_KEY=your_secret_key
   CLOUD_NAME=your_cloudinary_name
   API_KEY=your_cloudinary_key
   API_SECRET=your_cloudinary_secret
   
4. Start the server: `npm run dev` (or `node server.js`)

### **3. Frontend Setup**
1. Navigate to the frontend directory: `cd ../Frontend`
2. Install dependencies: `npm install`
3. Start the Vite development server: `npm run dev`
4. Access the app at: `http://localhost:5173`


## Learning Outcomes
- Implemented **Role-Based Access Control** in a full-stack environment.
- Mastered **JWT Authentication** flow with secure cookie storage.
- Utilized **Zustand** for scalable and cleaner state management.
- Designed a scalable API architecture with **Express.js**.
- Integrated **Cloudinary** for professional-grade image management.


## Author
**Abhishikth Paul Ganta**
