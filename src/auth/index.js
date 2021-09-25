const express = require ('express')
const { LOGIN, REGISTER } = require ('./main.js')

const router = express.Router()

router.post('/auth/registration', REGISTER)
router.post('/auth/login', LOGIN)

module.exports = router;