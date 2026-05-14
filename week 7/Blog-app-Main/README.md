# MERN Stack Blog Application

This folder contains a full-stack web application designed for creating, reading, updating, and deleting blog articles with a multi-role user system.

## Overview

The project is structured into two main components:
1. **Backend**: A Node.js/Express server with MongoDB integration.
2. **Frontend**: A modern React/Vite application for the user interface.


## Architecture

### Backend (Node.js & Express)
- **Role-Based Access Control**: Admin, Author, and User roles.
- **RESTful API**: Clean and scalable endpoints for all CRUD operations.
- **Database**: MongoDB using Mongoose for schema modeling.
- **Security**: JWT-based authentication and Bcrypt password hashing.

### Frontend (React & Vite)
- **Responsive Design**: Built with Tailwind CSS.
- **State Management**: Efficient data flow using Zustand.
- **Dynamic Routing**: Seamless navigation with React Router.
- **Toast Notifications**: Interactive feedback for user actions.


## Package Highlights

### Backend Dependencies
- `express`, `mongoose`, `jsonwebtoken`, `bcryptjs`, `cloudinary`, `multer`.

### Frontend Dependencies
- `react`, `react-router`, `zustand`, `axios`, `tailwindcss`, `react-toastify`.


## Folder Structure

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


## Getting Started

### Prerequisites
- Node.js installed.
- MongoDB instance (local or Atlas).

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Blog-app-Main
   ```

2. **Setup Backend**:
   ```bash
   cd Blog-App
   npm install
   # Configure .env file
   npm start
   ```

3. **Setup Frontend**:
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```


## Author

**Abhishikth Paul Ganta**
