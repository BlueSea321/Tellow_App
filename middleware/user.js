const jwt = require('jsonwebtoken')
const {
    TOKEN_SECRET
} = require('../config')

const user = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET)
        if (decoded.role === 'user') {
            req.user = decoded
            return next()
        } else {
            return res.send("Not allowed")
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
}

module.exports = user