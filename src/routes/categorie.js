const router = require('express').Router()
const controller = require('../controllers/categorie.js')

router
	  .get('/categorie', controller.GET)
	  .post('/categorie', controller.POST)
	  .delete('/categorie', controller.DELETE)
	  .put('/categorie', controller.PUT)

module.exports = router