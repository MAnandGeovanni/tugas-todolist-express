const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
// const User = require('../models/Users');

const { getAllUser, getUserById, createUser} = require('../controllers/user-controller')




route.get("/", getAllUser )
route.get("/:id", getUserById )
route.post("/", createUser )

// route.get('/', (req, res) => {
//     res.json({
//         data:User
//     })
// });
// // route.getById('/:id', (req, res) => {

// // });

module.exports = route;
