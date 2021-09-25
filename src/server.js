const express = require('express')
const server = express()
const newsRouter = require('./routes/news.js')
const userRouter = require('./routes/users.js')
const categorieRouter = require('./routes/categorie.js')

// middlewares
server.use( express.json() )

// handling routes
server.use( newsRouter )
server.use( userRouter )
server.use( categorieRouter )

server.use( (error, req, res, next) => {
	return res.status(400).json({
		status: 400,
		message: error.message
	})
} )

server.listen( process.env.PORT || 4500, () => console.log('*4500') )