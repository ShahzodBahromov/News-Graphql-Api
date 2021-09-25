const Jwt = require ("../../lib/jwt.js");
const { default: jwt } = require("../lib/jwt.js");
const model = require ("./model.js");

const REGISTER = async (req, res) => {
    try {
        if (await model.registerUser(req.body)) {
            res.json({
                status: 200,
                message: 'user has been registered',
                token: Jwt.sign( req.body.email)
            })
        } else {
            res.json({
                status: 404,
                message: 'somethinks went wrong !'
            })
        }
    } catch (error) {
        throw error
    }
}

const LOGIN = async (req, res) => {
    try {
        if (await model.loginUser(req.body)) {
            const test = VERIFY(req.headers.token, 'test')
            if (test.password === req.body.password) {
                res.json({
                    status: 200,
                    message: 'user has been logined',
                    token: Jwt.sign( req.body.email)
                })
            }
            
        } else {
            res.json({
                status: 404,
                message: 'somethinks went wrong !'
            })
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    REGISTER,
    LOGIN
}