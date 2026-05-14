# Counter State Management & Synchronization

## Overview

A React application that demonstrates **state synchronization** across multiple sibling components using the **Context API**. Four independent counter components share and modify a single counter value, showcasing how changes in one component are instantly reflected in all others.

## Features

- Shared counter state managed via React Context API
- Four independent counter components (`EditCounter1` – `EditCounter4`)
- Increment and decrement operations from any component
- Real-time synchronization — all components display the same counter value
- Clean separation of state logic using a dedicated Context Provider

## Project Structure

```
react-app-6/
├── src/
│   ├── App.jsx                          → Root component, renders all 4 counters
│   ├── main.jsx                         → Entry point, wraps App in ContextProvider
│   ├── components/
│   │   ├── EditCounter1.jsx             → Counter component 1
│   │   ├── EditCounter2.jsx             → Counter component 2
│   │   ├── EditCounter3.jsx             → Counter component 3
│   │   └── EditCounter4.jsx             → Counter component 4
│   └── contexts/
│       └── ContextProvider.jsx          → Shared counter context & state logic
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. **`ContextProvider.jsx`** creates a React Context with:
   - A `counter` state initialized to `0`
   - `incrementCount` function to increase the counter by 1
   - `decrementCount` function to decrease the counter by 1

2. **`main.jsx`** wraps the `<App />` component inside `<ContextProvider>`, making the shared state available to all children.

3. Each **`EditCounter`** component uses `useContext` to access the shared counter value and modification functions. Clicking `+` or `−` in any component updates the counter globally.

## Tech Stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| React 19     | UI framework                     |
| Vite         | Build tool and dev server        |
| Tailwind CSS | Utility-first styling            |
| Context API  | Shared state across components   |

## How to Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Key Concepts Demonstrated

- `createContext` and `useContext` hooks
- Provider pattern for state distribution
- Lifting state up via context instead of prop drilling
- Sibling component state synchronization
- Functional component architecture

## Author

Abhishikth Paul Ganta
