const express = require('express');
const route = express.Router();
const todoRoutes = require('./todo-route');
const authRoutes = require('./auth-route');

route.get('/', (req, res) => {
  res.json({
    message: 'selamat datang',
  });
});

route.use('/todos', todoRoutes);
route.use('/auth', authRoutes);

module.exports = route;
