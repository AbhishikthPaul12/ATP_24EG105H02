# Blog Application Frontend

A modern, responsive frontend built with **React** and **Vite**, focusing on seamless user experience and efficient state management.

## Features

- **Dynamic UI**: Built with React 19 for high performance.
- **State Management**: Powered by **Zustand** for lightweight and scalable state handling.
- **Routing**: Client-side routing using **React Router**.
- **Form Handling**: Efficient form management with **React Hook Form**.
- **Styling**: Modern design implemented using **Tailwind CSS**.
- **Notifications**: Real-time feedback using **React Hot Toast** and **React Toastify**.

## Tech Stack & Dependencies

### Core Technologies
- **Library**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios

### Full Package List
| Package | Version | Description |
| :--- | :--- | :--- |
| `react` | `^19.2.4` | Core UI library |
| `react-dom` | `^19.2.4` | React DOM bindings |
| `react-router` | `^7.13.2` | Declarative routing |
| `zustand` | `^5.0.12` | State management |
| `axios` | `^1.14.0` | Promise-based HTTP client |
| `tailwindcss` | `^4.2.2` | Utility-first CSS framework |
| `react-hook-form` | `^7.72.0` | Flexible form validation |
| `react-hot-toast` | `^2.6.0` | React notifications |
| `react-toastify` | `^11.0.5` | Easy-to-use toast notifications |

## Project Structure

- **`src/`**: Contains the source code.
  - **`components/`**: Reusable UI components.
  - **`pages/`**: Main application views.
  - **`store/`**: Zustand state stores.
  - **`hooks/`**: Custom React hooks.
  - **`assets/`**: Images, fonts, and global styles.
- **`public/`**: Static assets.
- **`index.html`**: The entry point for the browser.

## Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Key Concepts
- **Declarative Programming**: Focus on what the UI should look like, not how to manipulate the DOM.
- **Virtual DOM**: High-performance updates by comparing state changes before applying to the real DOM.
- **Component-Based Architecture**: Modular and reusable UI blocks.
