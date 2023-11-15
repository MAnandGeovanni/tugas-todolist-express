const express = require('express');
const route = express.Router();
const todoRoutes = require('./todo-route');
const authRoutes = require('./auth-route');
const userRoutes = require('./user-route');
const verifyToken = require('../middleware/auth');

route.get('/', (req, res) => {
  res.json({
    message: 'selamat datang',
  });
});

route.use('/auth', authRoutes);
route.use('/user', userRoutes)
route.use('/todos',  todoRoutes);
verifyToken
module.exports = route;
