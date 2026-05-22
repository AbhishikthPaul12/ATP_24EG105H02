# Employee Management System — Frontend

React single-page application for the **Employee Management System**. It provides a UI to create, list, view, edit, and delete employee records by talking to the Express backend API (see `../Employee-Backend`).

Built with **Vite**, **React 19**, **React Router**, **Tailwind CSS v4**, **React Hook Form**, **Axios**, and **Zustand**.


## Features

- Landing page with quick navigation to add or view employees
- Create employee form with client-side validation (React Hook Form)
- List all employees with view, edit, and delete actions
- View individual employee details
- Edit existing employee records
- Client-side routing with nested layout (`RootLayout` + `Outlet`)
- API proxy in development (`/employee-api` → `http://localhost:5000`)
- Tailwind CSS utility styling
- Zustand store example for global state practice (`CounterStore.js`)


## Folder Structure

```
employee-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── dist/                          → Production build output (generated)
├── src/
│   ├── App.jsx                    → Router configuration
│   ├── main.jsx                   → Application entry point
│   ├── index.css                  → Tailwind CSS import
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── RootLayout.jsx         → Layout with header and <Outlet />
│   │   ├── Header.jsx             → Navigation bar
│   │   ├── Home.jsx               → Landing page
│   │   ├── CreateEmp.jsx          → Add employee form
│   │   ├── ListOfEmps.jsx         → Employee list (GET / DELETE)
│   │   ├── Employee.jsx           → Single employee details view
│   │   └── EditEmployee.jsx       → Edit employee form (PUT)
│   └── store/
│       └── CounterStore.js        → Zustand global store (demo / practice)
├── index.html
├── vite.config.js                 → Vite + React + Tailwind + API proxy
├── eslint.config.js
├── package.json
├── .gitignore
└── README.md
```


## Routes

| Path          | Component        | Description                    |
| ------------- | ---------------- | ------------------------------ |
| `/`           | `Home`           | Landing page                   |
| `/create-emp` | `CreateEmp`      | Add a new employee             |
| `/list`       | `ListOfEmps`     | View all employees             |
| `/employee`   | `Employee`       | View one employee (via state)  |
| `/edit-emp`   | `EditEmployee`   | Edit an employee (via state)   |

All routes are nested under `RootLayout`, which renders `Header` and the active child route.


## Components

| Component        | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| `RootLayout.jsx` | Shared layout with gradient background and `<Outlet />` for child routes   |
| `Header.jsx`     | Top navigation using `NavLink` (Home, Create Employee, List Of Employees)   |
| `Home.jsx`       | Welcome screen with buttons to create or list employees                     |
| `CreateEmp.jsx`  | POST form to add an employee (`fetch` + React Hook Form)                    |
| `ListOfEmps.jsx` | Fetches all employees; supports view, edit navigation, and delete (`axios`) |
| `Employee.jsx`   | Displays employee fields passed through router `location.state`             |
| `EditEmployee.jsx` | Pre-fills and submits updates via PUT (`axios` + React Hook Form)       |


## API Integration

During development, Vite proxies requests from `/employee-api` to the backend at `http://localhost:5000`.

| Method | Endpoint                              | Used in          |
| ------ | ------------------------------------- | ---------------- |
| POST   | `/employee-api/employees`             | `CreateEmp.jsx`  |
| GET    | `/employee-api/employees`             | `ListOfEmps.jsx` |
| PUT    | `/employee-api/employees/:employeeId` | `EditEmployee.jsx` |
| DELETE | `/employee-api/employees/:employeeId` | `ListOfEmps.jsx` |

Start the backend (`Employee-Backend` on port `5000`) before using the frontend in dev mode.


## Packages

### Dependencies

| Package            | Version  | Purpose                                      |
| ------------------ | -------- | -------------------------------------------- |
| `react`            | ^19.2.4  | UI component library                         |
| `react-dom`        | ^19.2.4  | React DOM rendering                          |
| `react-router`     | ^7.13.2  | Client-side routing (`createBrowserRouter`)  |
| `react-hook-form`  | ^7.72.0  | Form state and validation                    |
| `axios`            | ^1.14.0  | HTTP client for GET, PUT, DELETE requests    |
| `zustand`          | ^5.0.12  | Lightweight global state (`CounterStore.js`) |
| `tailwindcss`      | ^4.2.2   | Utility-first CSS framework                  |
| `@tailwindcss/vite`| ^4.2.2   | Tailwind CSS Vite plugin                     |

### Dev Dependencies

| Package                       | Version  | Purpose                          |
| ----------------------------- | -------- | -------------------------------- |
| `vite`                        | ^6.0.3   | Dev server and production build  |
| `@vitejs/plugin-react`        | ^4.3.0   | React Fast Refresh for Vite      |
| `eslint`                      | ^9.39.4  | Linting                          |
| `@eslint/js`                  | ^9.39.4  | ESLint recommended JS rules      |
| `eslint-plugin-react-hooks`   | ^7.0.1   | Rules for React Hooks            |
| `eslint-plugin-react-refresh` | ^0.5.2   | Vite React Refresh lint rules    |
| `globals`                     | ^17.4.0  | Browser global definitions       |
| `@types/react`                | ^19.2.14 | React type definitions (IDE)     |
| `@types/react-dom`            | ^19.2.3  | React DOM type definitions (IDE) |


## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start Vite dev server (port `5173`)  |


## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- Backend running from `../Employee-Backend` with MongoDB configured (`.env` with `MONGODB_URL`)

### Development

```bash
cd employee-frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). API calls to `/employee-api/*` are proxied to `http://localhost:5000`.

### Production Build

```bash
npm run build
npm run preview
```

The built files in `dist/` can also be served by the backend (see the root `Employee-App` README for single-server deployment).


## Configuration

- **`vite.config.js`** — React plugin, Tailwind plugin, and dev proxy for `/employee-api`
- **`eslint.config.js`** — Flat ESLint config for `.js` / `.jsx` files; ignores `dist/`
- **`src/index.css`** — `@import "tailwindcss";` for Tailwind v4


## Related

- Backend API and MongoDB schema: `../Employee-Backend`
- Full-stack overview and deployment: `../README.md`


## Author

Abhishikth Paul Ganta
