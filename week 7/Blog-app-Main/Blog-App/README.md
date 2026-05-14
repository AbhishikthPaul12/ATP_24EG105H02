# Blog Application Backend

The backend of the Blog Application is built using **Node.js** and **Express.js**, providing a robust RESTful API for managing users, articles, and roles.

## Features & Roles

### 1. Author
- **Registration & Login**: Secure authentication.
- **Article Management**: Create, view, edit, and delete personal articles.

### 2. User
- **Registration & Login**: Access to the platform.
- **Engagement**: View articles and write comments.

### 3. Admin
- **System Control**: Login, view all articles.
- **User Management**: Block or activate user accounts.


## Tech Stack & Dependencies

### Core Technologies
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB (via Mongoose v9.3.0)
- **Authentication**: JSON Web Token (JWT) & BcryptJS

### Full Package List
| Package | Version | Description |
| :--- | :--- | :--- |
| `bcryptjs` | `^3.0.3` | Password hashing and security |
| `cloudinary` | `^2.9.0` | Image and video management |
| `cookie-parser` | `^1.4.7` | Parse HTTP request cookies |
| `cors` | `^2.8.6` | Enable Cross-Origin Resource Sharing |
| `dotenv` | `^17.3.1` | Environment variable management |
| `express` | `^5.2.1` | Web framework for Node.js |
| `jsonwebtoken` | `^9.0.3` | Secure token-based authentication |
| `mongoose` | `^9.3.0` | MongoDB object modeling |
| `multer` | `^2.1.1` | Middleware for handling `multipart/form-data` |
| `nodemon` | `^3.1.14` | Development tool for auto-restarting server |


## Project Structure

- **`server.js`**: Entry point of the application.
- **`APIs/`**: Contains route handlers and business logic.
- **`models/`**: Mongoose schemas and database models (User, Article).
- **`middlewares/`**: Custom middleware for authentication and validation.
- **`config/`**: Configuration files (Database connection, etc.).
- **`requestTestFiles/`**: API testing scripts or documentation.


## Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the root with the following keys:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

3. **Start the Server**:
   ```bash
   npm start # or nodemon server.js
   ```


##  Development Principles
- **DRY (Do Not Repeat Yourself)**: Modular code structure.
- **Brainstorming First**: Requirements decided before implementation to avoid confusion.
- **Layered Security**: Security implemented at multiple levels (JWT, Bcrypt, Middleware).
- **Asynchronous Integrity**: Careful handling of async operations to prevent race conditions.
