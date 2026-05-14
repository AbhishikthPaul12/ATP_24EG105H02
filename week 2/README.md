# Week 2 – Intermediate JavaScript & RESTful API Development

## Overview

This folder contains a comprehensive set of exercises and projects focused on **Intermediate JavaScript (ES6+)** and **REST API development** using Express.js. The curriculum covers advanced data structures, modular programming, asynchronous execution, and backend architecture.

## Core Learning Objectives

- Master **ES6+ features** (Spread/Rest operators, Classes, Modules).
- Understand memory management through **Shallow vs. Deep copying**.
- Implement **Asynchronous logic** using JavaScript timer functions.
- Build and structure **RESTful APIs** using the Express framework.
- Practice **Object-Oriented Programming (OOP)** in JavaScript.


## Exercise Breakdown

| Module / Question | Topic | Description |
| :--- | :--- | :--- |
| **Ques 1: Array Operations** | Data Manipulation | Analyzing temperatures, processing course lists, and managing student marks using modern array methods. |
| **Ques 2: Object Operations** | Object Management | Implementing inventory systems and user profile managers with dynamic property handling. |
| **Ques 3: Modules** | Modular Programming | Building scalable Task Management and Shopping Cart systems using ES6 `import`/`export`. |
| **Ques 4: Classes** | OOP Principles | Developing a robust Book Management System utilizing ES6 Classes and constructors. |
| **Ques 5: Spread Operator** | Syntax Efficiency | Practicing array extension, object merging, and the use of Rest parameters for flexible functions. |
| **Ques 6: Copying Techniques** | Memory Management | Deep dive into Shallow Copy (references) vs. Deep Copy (value-based) to prevent state mutation. |
| **Ques 7: Timer Functions** | Async Simulation | Simulating real-world scenarios like Exam Portals and OTP Countdowns using `setTimeout` and `setInterval`. |
| **Ques 8: REST API** | Backend Development | Creating a multi-route Express server with custom middleware and dedicated APIs for Users and Products. |


## Technologies Used
- **Runtime:** Node.js
- **Framework:** Express.js
- **Standard:** ECMAScript 2015+ (ES6+)
- **Testing:** HTTP Client (via `.http` files)

## Installation & Usage

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Running JavaScript Exercises

Navigate to any exercise directory and run the script using Node:
```bash
node "filename.js"
```

### 3. Running the REST API Server

To start the product management server:
1. Navigate to the `REST API for product Ques 8` directory.
2. Install dependencies (if any): `npm install`
3. Start the server:
```bash
node server.js
```
The server will start listening on **port 3000**.


##  Key Technical Insights

- **Shallow vs. Deep Copy:** Critical for Redux-style state management where immutability is key.
- **Middleware Pattern:** Utilized in the Express server to demonstrate request/response lifecycle management.
- **Modularity:** Separation of concerns implemented in Question 3 and Question 8 to maintain clean codebases.

## Author

**Abhishikth Paul Ganta**