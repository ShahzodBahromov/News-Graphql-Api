const router = require('express').Router()
const controller = require('../controllers/news.js')

router
	  .get('/news', controller.GET)
	  .post('/news', controller.POST)
	  .put('/news', controller.PUT)
	  .delete('/news', controller.DELETE)

module.exports = router