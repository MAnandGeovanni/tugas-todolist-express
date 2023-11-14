const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

route.post('/login', (req, res) => {
  let data = req.body

  const user = User.find(item => item.email == data.email)

  if (!user){
    res.json({
      message:"belum punya akun?"
    })
    return
  }
  if (bcrypt.compareSync(data.password, user.password)){
    const token = jwt.sign({email: data.email}, "ajsdijiashdsau")
   res.json ({
     message: "kamu sudah masuk",
     token
   })
   return
  }

  res.json({
    message:"password anda salah"
  })

});
route.post('/regis', (req, res) => {
  let data = req.body;

  let saltRounds = 10
  let hashPassword = bcrypt.hashSync(data.password, saltRounds)

  data.password = hashPassword
  User.push(data)

  res.json({
    message: "berhasil buat akun"
  })
});

module.exports = route;
