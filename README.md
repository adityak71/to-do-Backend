# Todo Backend

This project is a beginner-friendly Express + MongoDB API for managing todo items. It demonstrates how to set up routes, controllers, and a Mongoose model in a simple backend application.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Structure

```text
todo-first/
|-- config/
|   `-- database.js
|-- controllers/
|   |-- createToDo.js
|   `-- getToDo.js
|-- models/
|   `-- todo.js
|-- public/
|   |-- database.png
|   |-- getalltodos.png
|   |-- gettodobyid.png
|   `-- postman-post.png
|-- routes/
|   `-- todos.js
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- README.md
`-- package-lock.json
```

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   PORT=4000
   DATABASE_URL=mongodb://localhost:27017/todo-first
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   Or use the development script:

   ```bash
   npm run dev
   ```

The app runs on `http://localhost:4000` by default unless you set a different `PORT`.

## Application Flow

### Main server setup

The app is initialized in `index.js`:

- loads environment variables
- enables JSON parsing with `express.json()`
- mounts the router at `/api/v1`
- starts the server on the configured port
- connects to MongoDB
- exposes a health check route at `/`

### Database connection

`config/database.js` uses Mongoose to connect with the `DATABASE_URL` environment variable.

```js
mongoose.connect(process.env.DATABASE_URL)
```

If the connection fails, the app logs the error and exits.

## Model

The todos are stored in MongoDB using the schema defined in `models/todo.js`.

```js
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50
  },
  description: {
    type: String,
    required: true,
    maxLength: 50
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
```

## Routes

The routes are mounted under `/api/v1` in `routes/todos.js`.

### Create todo

```http
POST /api/v1/createtodos
```

Request body:

```json
{
  "title": "Learn Express",
  "description": "Practice building an API"
}
```

Example:

```bash
curl -X POST http://localhost:4000/api/v1/createtodos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express","description":"Practice building an API"}'
```

### Get all todos

```http
GET /api/v1/gettodos
```

Example:

```bash
curl http://localhost:4000/api/v1/gettodos
```

### Health check

```http
GET /
```

Response:

```text
Server is Running Okay
```

## Controllers

### `createToDo.js`

This controller reads `title` and `description` from `req.body`, creates a new MongoDB record, and returns the created item.

### `getToDo.js`

This controller fetches all todo entries from MongoDB and returns them in a JSON response.

## Notes

- Make sure MongoDB is running before starting the app.
- The API expects JSON request bodies on routes that create data.
- Route names are case-sensitive in code and must match the controller exports exactly.
- Keep the MongoDB connection string private. Do not share it publicly or commit real credentials to a public repository.

## Implemented Endpoints

- `POST /api/v1/createtodos`
- `GET /api/v1/gettodos`
- `GET /api/v1/gettodo/:id`
- `GET /`

## Common error to avoid

A common issue in this project is a mismatch between the exported function name and the imported name. For example:

```js
const { getToDo } = require('../controllers/getToDo');
```

must match the export in the controller file:

```js
exports.getToDo = async (req, res) => {
```

This was fixed in the project to keep the route working correctly.

## Possible Next Features

1. Add `PUT` or `PATCH` to update a todo.
2. Add `DELETE` to remove a todo.
3. Add request validation and consistent error handling.
4. Add automated tests for the controller and routes.