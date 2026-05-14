# User Management Dashboard

A membership-style dashboard that displays a list of users in a professional, responsive layout. This app focuses on component composition and layout design.

## Features
- **Member Directory**: A grid of user profile cards with avatars, names, and contact emails.
- **Navigation & Footer**: Includes global `Navbar` and `Footer` components for a complete app feel.
- **Responsive Layout**: Designed to work seamlessly across mobile, tablet, and desktop screens.
- **Consistent Styling**: Built with Tailwind CSS for a cohesive design system.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4

## Project Structure
- `src/App.jsx`: Orchestrates the overall layout (Navbar, UsersList, Footer).
- `src/components/Navbar.jsx`: Global navigation header.
- `src/components/UsersList.jsx`: Contains the user data array and maps it to `User` components.
- `src/components/User.jsx`: Individual user profile card component.
- `src/components/Footer.jsx`: Global footer section.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
