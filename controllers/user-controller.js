const User = require ("../models/User")

module.exports = {
    getAllUser : (req, res) => {

    },
    getUserById : (req, res) => {

    },
    createUser : async (req, res) => {
        let data = req.body

        try {
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