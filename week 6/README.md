# Week 6 – MERN Employee Management & React State Management

## Overview

This folder contains two projects covering full-stack MERN development and React state management using Context API. The exercises focus on building a complete Employee Management System with CRUD operations and implementing synchronized counter state across multiple components.


## Folder Structure

```
week 6/
├── week 6-Ques1/
│   └── Employee-App/           → Full-stack MERN Employee Management System
│       ├── Employee-Backend/   → Express.js + MongoDB REST API
│       └── employee-frontend/  → React + Vite frontend with Zustand
│
└── week 6-Ques2/
    └── CounterStateManagementSyncQues2/
        └── react-app-6/        → Counter State Synchronization using Context API
```


## Ques 1 – Employee Management System (MERN Stack)

A full-stack web application for managing employee records with complete CRUD functionality.

### Features

- Add new employee records with validation
- View list of all employees
- View individual employee details
- Edit/update employee information
- Delete employee records
- Client-side routing with React Router
- Global state management with Zustand
- Form handling with React Hook Form
- Duplicate email detection (HTTP 409)
- Error handling for validation, cast, and server errors

### Tech Stack

| Layer    | Technologies                                        |
| -------- | --------------------------------------------------- |
| Frontend | React 19, Vite, Zustand, React Router, React Hook Form, Tailwind CSS, Axios |
| Backend  | Node.js, Express.js 5, Mongoose, dotenv, CORS       |
| Database | MongoDB                                             |

### Employee Schema

| Field         | Type   | Validation                  |
| ------------- | ------ | --------------------------- |
| `name`        | String | Required                    |
| `email`       | String | Required, Unique            |
| `mobile`      | Number | Required                    |
| `designation` | String | Required                    |
| `companyName` | String | Required                    |
| `createdAt`   | Date   | Auto-generated (timestamps) |
| `updatedAt`   | Date   | Auto-generated (timestamps) |

### Backend API Routes

Base Route: `/employee-api`

| Method | Endpoint                 | Description             | Status Code |
| ------ | ------------------------ | ----------------------- | ----------- |
| POST   | `/employees`             | Create a new employee   | 201         |
| GET    | `/employees`             | Retrieve all employees  | 200         |
| PUT    | `/employees/:employeeId` | Update employee details | 200         |
| DELETE | `/employees/:employeeId` | Delete an employee      | 200 / 404   |

### Error Responses

| Error Type      | Status | Description                       |
| --------------- | ------ | --------------------------------- |
| ValidationError | 400    | Missing or invalid field values   |
| CastError       | 400    | Invalid ID format                 |
| Duplicate Key   | 409    | Email already exists (code 11000) |
| Server Error    | 500    | Internal server error             |

### Frontend Components

| Component          | Description                                       |
| ------------------ | ------------------------------------------------- |
| `Home.jsx`         | Landing page of the application                   |
| `Header.jsx`       | Navigation bar with routing links                 |
| `CreateEmp.jsx`    | Form to add a new employee (React Hook Form)      |
| `EditEmployee.jsx` | Form to update existing employee details          |
| `Employee.jsx`     | Displays individual employee information          |
| `ListOfEmps.jsx`   | Shows all employees in a list/card view           |
| `RootLayout.jsx`   | Layout wrapper with `<Outlet />` for child routes |

### Frontend Routes

| Path          | Component    | Description            |
| ------------- | ------------ | ---------------------- |
| `/`           | `Home`       | Landing page           |
| `/create-emp` | `CreateEmp`  | Add new employee form  |
| `/list`       | `ListOfEmps` | View all employees     |
| `/employee`   | `Employee`   | View single employee   |
| `/edit-emp`   | `EditEmployee`| Edit employee details |

### Packages (Ques 1)

**Backend Dependencies**

| Package        | Version  | Purpose                                |
| -------------- | -------- | -------------------------------------- |
| `express`      | ^5.2.1   | Web framework for REST API             |
| `mongoose`     | ^9.3.3   | MongoDB ODM for schema & queries       |
| `dotenv`       | ^17.3.1  | Load environment variables from `.env` |
| `cors`         | ^2.8.6   | Enable Cross-Origin Resource Sharing   |
| `bcryptjs`     | ^3.0.3   | Password hashing utility               |
| `jsonwebtoken` | ^9.0.3   | JWT token generation & verification    |
| `cookie-parser`| ^1.4.7   | Parse cookies from requests            |
| `nodemon`      | ^3.1.14  | Auto-restart server on file changes    |

**Frontend Dependencies**

| Package            | Version  | Purpose                               |
| ------------------ | -------- | ------------------------------------- |
| `react`            | ^19.2.4  | UI component library                  |
| `react-dom`        | ^19.2.4  | React DOM rendering                   |
| `react-router`     | ^7.13.2  | Client-side routing                   |
| `react-hook-form`  | ^7.72.0  | Performant form handling & validation |
| `zustand`          | ^5.0.12  | Lightweight global state management   |
| `axios`            | ^1.14.0  | HTTP client for API requests          |
| `tailwindcss`      | ^4.2.2   | Utility-first CSS framework           |
| `@tailwindcss/vite` | ^4.2.2  | Tailwind CSS Vite plugin              |


## Ques 2 – Counter State Management & Synchronization (Context API)

A React application demonstrating state synchronization across multiple components using the Context API.

### Features

- Shared counter state across four independent components
- Increment and decrement operations from any component
- Real-time synchronization — all components reflect the same counter value
- Clean component architecture with Context Provider pattern

### How It Works

1. **`ContextProvider.jsx`** creates a React Context with a `counter` state (initialized to `0`) and `incrementCount` / `decrementCount` functions
2. **`main.jsx`** wraps `<App />` inside `<ContextProvider>`, making shared state available to all children
3. Each **`EditCounter`** component uses `useContext` to access the shared counter — clicking `+` or `−` in any component updates the value globally

### Tech Stack

| Layer    | Technologies                       |
| -------- | ---------------------------------- |
| Frontend | React 19, Vite, Tailwind CSS       |
| State    | React Context API + `useContext` Hook |

### Component Structure

| Component              | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `ContextProvider.jsx`  | Creates shared counter context with state & functions |
| `EditCounter1.jsx`     | Counter component 1 — reads & modifies shared state  |
| `EditCounter2.jsx`     | Counter component 2 — reads & modifies shared state  |
| `EditCounter3.jsx`     | Counter component 3 — reads & modifies shared state  |
| `EditCounter4.jsx`     | Counter component 4 — reads & modifies shared state  |

### Packages (Ques 2)

| Package            | Version  | Purpose                     |
| ------------------ | -------- | --------------------------- |
| `react`            | ^19.2.4  | UI component library        |
| `react-dom`        | ^19.2.4  | React DOM rendering         |
| `tailwindcss`      | ^4.2.2   | Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.2.2  | Tailwind CSS Vite plugin    |
| `vite`             | ^8.0.1   | Build tool and dev server   |


## How to Run

### Ques 1 – Employee App

```bash
# Backend
cd "week 6-Ques1/Employee-App/Employee-Backend"
npm install
node server.js        # or: nodemon server.js

# Frontend (in a separate terminal)
cd "week 6-Ques1/Employee-App/employee-frontend"
npm install
npm run dev
```

> **Production (single server):** From `Employee-App/` root, run `npm install` then `npm start` — this installs both, builds the frontend, and serves everything from the backend on port `5000`.

### Ques 2 – Counter App

```bash
cd "week 6-Ques2/CounterStateManagementSyncQues2/react-app-6"
npm install
npm run dev
```

> Dev server starts at `http://localhost:5173`.


## Topics Covered

- MERN stack architecture (MongoDB, Express.js, React, Node.js)
- REST API design and CRUD operations
- Mongoose schema modeling and validation
- React Router for client-side navigation
- Zustand for global state management
- React Context API and `useContext` Hook
- State synchronization across sibling components
- React Hook Form for form handling
- Tailwind CSS for styling
- Vite as the build tool

## Author

Abhishikth Paul Ganta
