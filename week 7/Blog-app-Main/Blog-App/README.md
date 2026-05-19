# Blog Application Backend

The backend of the Blog Application is built using **Node.js**, **Express.js**, and **MongoDB/Mongoose**. It provides a robust RESTful API for managing users, articles, and roles.

## Database Models

### UserModel
Represents all registered user profiles on the platform (USER, AUTHOR, and ADMIN).
- Includes fields for names, email, password (hashed), role, profile image, and active status.

### ArticleModel
Represents articles created by Authors, including a sub-document array for comments.
- **Comment Schema**: Contains user reference and comment text.
- **Article Schema**: Contains author reference, title, category, content, comments array, and visibility state toggle.

## JWT Authentication
Validates JWT stored inside the browser cookie token. It decodes user details and validates their role against the authorized access roles.
- **Cookie lookup**: Retrieves the token from cookies.
- **Unauthorized fallback**: Returns 401 if not authenticated.
- **Forbidden role mismatch**: Returns 403 if unauthorized.

## API Endpoints Summary

### 1. Common Authentication APIs (`/auth`)
- **POST `/auth/users`**: Registers a USER or AUTHOR. Encrypts password using Bcryptjs.
- **POST `/auth/login`**: Authenticates credentials, signs JWT, and saves to an HTTP-only secure cookie.
- **GET `/auth/logout`**: Clears the token cookie.
- **GET `/auth/check-auth`**: Returns the decoded JWT payload of the active session.
- **PUT `/auth/password`**: Updates user password after matching current password.

### 2. User APIs (`/user-api`)
- **GET `/user-api/articles`**: Fetches paginated list of active articles.
- **GET `/user-api/articles/:id`**: Fetches detail of a single active article.
- **POST `/user-api/articles/:id/comments`**: Appends a new comment sub-document to the article.
- **DELETE `/user-api/articles/:articleId/comments/:commentId`**: Deletes a specific comment from the article's list (Owner Only).

### 3. Author APIs (`/author-api`)
- **POST `/author-api/articles`**: Publishes a new article.
- **GET `/author-api/articles`**: Returns all articles written by the logged-in author.
- **PUT `/author-api/articles/:id`**: Edits the specified article.
- **PATCH `/author-api/articles/:id`**: Toggles article visibility status (soft-delete).

### 4. Admin APIs (`/admin-api`)
- **GET `/admin-api/users`**: Fetches all registered accounts (excluding passwords).
- **PATCH `/admin-api/users/:id/status`**: Blocks or unblocks a specific user.
- **GET `/admin-api/articles`**: Fetches a paginated system-wide view of all articles.

## Tech Stack & Dependencies
- **Node.js**, **Express.js**, **MongoDB**, **Mongoose**
- **JWT** & **BcryptJS** for Authentication/Security
- **Cloudinary** & **Multer** for media uploads
- **Cors**, **Dotenv**, **Cookie-Parser**

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
