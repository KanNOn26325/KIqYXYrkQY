// 代码生成时间: 2025-09-19 04:51:44
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// An in-memory store to simulate a database
let todos = [];

// Helper function to generate unique IDs
function generateId() {
  return Math.floor(Math.random() * 1000000).toString();
}

// GET /todos - Retrieve all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// GET /todos/:id - Retrieve a single todo by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({
    error: 'Todo not found'
  });
  res.status(200).json(todo);
});

// POST /todos - Create a new todo
app.post('/todos', (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({
    error: 'Title is required'
  });

  const newTodo = {
    id: generateId(),
    title,
    completed
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update an existing todo
app.put('/todos/:id', (req, res) => {
  let todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({
    error: 'Todo not found'
  });
  Object.assign(todo, req.body);
  res.status(200).json(todo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({
    error: 'Todo not found'
  });
  todos.splice(index, 1);
  res.status(204).end();
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
