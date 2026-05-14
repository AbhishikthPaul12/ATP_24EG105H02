# Week 3 – MongoDB Queries & Product REST API

## Overview

This folder contains two exercises focused on backend development with MongoDB and Express.js. The work covers writing raw MongoDB shell queries for an employee collection and building a full Product REST API with schema validation, CRUD operations, middleware integration, and error handling.


## Folder Structure

```
week 3/
├── MongoDB queries Ques 1.txt      # Raw MongoDB shell queries
├── Product REST API Ques 2/        # Express.js REST API project
│   ├── API/
│   │   └── productAPI.js           # Product route handlers (CRUD)
│   ├── model/
│   │   └── productModel.js         # Mongoose product schema & model
│   ├── server.js                   # Application entry point
│   ├── req.http                    # REST Client test requests
│   ├── package.json
│   └── package-lock.json
└── README.md
```


## Exercise 1 – MongoDB Query Practice

**File:** `MongoDB queries Ques 1.txt`

Covers fundamental MongoDB shell operations on an `employees` collection with the following document structure:

```json
{
  "empId": "",
  "name": "",
  "skills": [],
  "experiences": [{ "companyName": "", "yearsOfExp": "" }]
}
```

### Queries Implemented

| # | Operation | Command Used |
|---|-----------|-------------|
| 1 | Insert 5 employee documents | `insertMany()` |
| 2 | Find employees with a specific skill (React) | `find()` |
| 3 | Add a new skill to all employees | `updateMany()` with `$push` |
| 4 | Add a new experience entry to all employees | `updateMany()` with `$push` |
| 5 | Delete the first experience from all employees | `updateMany()` with `$pop` |
| 6 | Add an address field to a specific employee | `updateOne()` with `$set` |


## Exercise 2 – Product REST API


A RESTful API built with Express.js and Mongoose that performs CRUD operations on a product resource. The API includes schema validation, token-based route protection via middleware, cookie parsing, and centralized error handling.

### Product Schema

| Field | Type | Constraints |
|-------|------|-------------|
| `productId` | Number | Required |
| `productName` | String | Required |
| `price` | Number | Required, min: 10000, max: 50000 |
| `brand` | String | Required |

> Timestamps are enabled and the version key (`__v`) is disabled.

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/product-api/products` | Create a new product |
| `GET` | `/product-api/products` | Retrieve all products |
| `GET` | `/product-api/products/:productId` | Retrieve a product by ID |
| `PUT` | `/product-api/products/:productId` | Update a product by ID |
| `DELETE` | `/product-api/products/:productId` | Delete a product by ID |

### Error Handling

The server includes a centralized error-handling middleware that catches and responds to:
- **ValidationError** – Returns `400 Bad Request` for schema validation failures.
- **CastError** – Returns `400 Bad Request` for invalid data type casting.
- **Generic Errors** – Returns `500 Internal Server Error` for unhandled exceptions.

---

## Dependencies & Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.2.1 | Web framework for building the REST API |
| `mongoose` | ^9.2.4 | MongoDB ODM for schema definition and database operations |
| `cookie-parser` | ^1.4.7 | Middleware to parse cookies from incoming requests |
| `jsonwebtoken` | ^9.0.3 | Token generation and verification for route protection |
| `bcryptjs` | ^3.0.3 | Password hashing and comparison utilities |


## Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB
- **ODM:** Mongoose
- **Module System:** ES Modules
- **API Testing:** REST Client (`.http` file)


## How to Run

### 1. Install Dependencies

```bash
cd "Product REST API Ques 2"
npm install
```

### 2. Start MongoDB

Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017`.

### 3. Start the Server

```bash
node server.js
```

The server will start on **port 4000**.

### 4. Test the API

Use the provided `req.http` file with the REST Client VS Code extension, or use tools like Postman.


## Learning Outcomes

- Built a complete REST API with full CRUD operations using Express.js and Mongoose.
- Practiced MongoDB shell queries including `insertMany`, `find`, `updateMany`, `updateOne`, and array operators (`$push`, `$pop`, `$set`).
- Implemented Mongoose schema validation with custom error messages and value constraints.
- Designed centralized error-handling middleware for consistent API error responses.
- Understood route protection patterns using token verification middleware.
- Gained hands-on experience with ES Module syntax in a Node.js backend project.


## Author

Abhishikth Paul Ganta