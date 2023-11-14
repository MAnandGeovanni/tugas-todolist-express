const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    host :'localhost',
    dialect:"mysql",
    username:"root",
    password:"root",
    database:"sequelize_mudah"
})

module.exports = sequelize