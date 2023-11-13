const jwt = require('jsonwebtoken');

const KEY = "ajsdijiashdsau"

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization

    if(!header) {
        res.json ({
            message: "tidak ada izin"
        })
        return
    }


    const token = header.split(" ")[1]

    if(!token){
        res.json({
            message:"kalau tidak ada token tidak boleh masuk"
        })
        return
    }

    const payload = jwt.verify(token, KEY)

    req.payload = payload

    next()

}

module.exports = verifyToken