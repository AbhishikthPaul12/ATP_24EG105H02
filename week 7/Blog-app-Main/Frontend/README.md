# Blog Application Frontend

This is the React client application for the MERN Blog Application, built using Vite, styled with Tailwind CSS, and configured to communicate with the Backend API over HTTP.

## Backend Deployment Link Configuration
The backend server URL is integrated into the frontend client inside the API configuration (e.g., via Axios). Local development overrides are typically done via the `VITE_API_URL` variable in `.env`.

## Application Routing and Page Navigation
Routing is managed using `react-router-dom`. The application includes security conditions to guard different routes based on the user's role.

### 1. State Management
Centralizes the application session states using **Zustand**:
- **User State**: Authenticated user profile data or null.
- **Loading State**: Blocks route renderings during session checking.
- **Auto Session Recovery**: On component mounting, it issues a GET request to verify authentication and recovers the session automatically if valid cookies are found.

### 2. Route Guarding
A gatekeeper component intercepting page access (Protected Routes):
- Redirects unlogged users to the Login page.
- Redirects users whose roles do not match the specified allowed roles to the Home page.

### 3. API Connector
A custom Axios client instance:
- Automatically targets the backend URL from environment variables.
- Configured with `withCredentials: true` to enforce browser storage of HTTP-only JWT cookies across requests.

## Page Outlines
- **Home**: Dynamic landing page featuring clean navigation layouts.
- **Login**: Form card that captures user inputs and logs them in.
- **Register**: Handles registration for USER and AUTHOR roles.
- **Article Feed**: Displays active articles in a paginated list.
- **Article Detail**: Renders individual article content, alongside comments with submit forms and self-owned delete buttons.
- **Author Dashboard**: Console for creating new articles, editing existing posts, and toggling visibility (active/inactive).
- **Admin Dashboard**: Console for viewing system analytics stats, toggling active user status, and removing inappropriate articles.
- **Not Found**: Custom fallback page.

## Tech Stack & Dependencies
- **React 19** & **Vite**
- **Zustand** for lightweight and scalable state management
- **React Router DOM** for client-side declarative routing
- **Tailwind CSS** for modern utility-first styling
- **React Hook Form** for efficient form handling
- **Axios** for HTTP requests
- **React Hot Toast** / **React Toastify** for real-time notifications

## Setup and Execution

1. **Install npm packages**:
   ```bash
   npm install
   ```

2. **Configure environment variables** in `.env` (optional for local fallback):
   ```env
   VITE_API_URL=http://localhost:4000
   ```

3. **Run Vite development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to browse the app.
