const User = require ("../models/User")
const bcrypt = require('bcrypt');

module.exports = {
    getAllUser : (req, res) => {

    },
    getUserById : (req, res) => {

    },
    createUser : async (req, res) => {
        let data = req.body

        try {
            const hashPassword = bcrypt.hashSync(data.password, 10)
            data.password = hashPassword


            await User.create(data)

            res.status(201).json({
                message:"berhasil nambah user"
            })
        } catch {
            res.json({
                message:"gagal nambah user"
            })
        }
    },
}