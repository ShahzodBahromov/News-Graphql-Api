const router = require('express').Router()
const controller = require('../controllers/users.js')

router
	  .get('/users', controller.GET)
	  .post('/users', controller.POST)
	  .delete('/users', controller.DELETE)
	  .put('/usersy', controller.PUT)

module.exports = router