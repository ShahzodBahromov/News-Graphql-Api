const model = require('../models/news.js')

const GET = async (req, res) => {
	res.json(await model.getNews())
}

const POST = async (req, res, next) => {
	try {
		let steak = await model.insertNews(req.body)
		if(steak) {
			res.json({
				status: 201,
				message: "The new news has been added!",
				data: steak
			})
		} else throw new Error("There is an error")
	} catch(error) {
		return next(error)
	}
}

const PUT = async (req, res, next) => {
	try {
		let steak = await model.updateNews(req.body)
		if(steak) {
			res.json({
				status: 201,
				message: "The new news has been updated!",
				data: steak
			})
		} else throw new Error("There is an error")
	} catch(error) {
		return next(error)
	}
}

const DELETE = async (req, res, next) => {
	try {
		let steak = await model.deleteNews(req.body)
		if(steak) {
			res.json({
				status: 200,
				message: "The news has been deleted!",
				data: steak
			})
		} else throw new Error("There is an error")
	} catch(error) {
		return next(error)
	}
}


module.exports = {
	GET,
	POST,
	PUT,
	DELETE
}