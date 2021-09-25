const model = require('../models/categorie.js')

const GET = async (req, res) => {
	// if(lang){
	// 	let categories = await fetchAll(`SELECT * FROM categories
	// 	NATURAL JOIN languages WHERE categories.lang_id=languages.language_id`)
	// 	let query = categories.filter(f => f.lang_name==lang)
	// 	res.json({
	// 	  status:200,
	// 	  data:query
	// 	})
	res.json(await model.getCategorie())
}

const POST = async (req, res, next) => {
	try {
		let table = await model.insertCategorie(req.body)
		if(table) {
			res.json({
				status: 201,
				message: "The new categorie has been added!",
				data: table
			})
		} else throw new Error("There is an error!")
	} catch(error) {
		return next(error)
	}
}

const PUT = async (req, res, next) => {
	try {
		let order = await model.putCategorie(req.body)
		if(order) {
			res.json({
				status: 201,
				message: "The categorie is changed!",
				data: order
			})
		} else throw new Error("There is an error!")
	} catch(error) {
		return next(error)
	}
}

const DELETE = async (req, res, next) => {
	try {
		let table = await model.deleteCategorie(req.body)
		if(table) {
			res.json({
				status: 201,
				message: "The categorie is deleted!",
				data: table
			})
		} else throw new Error("There is an error!")
	} catch(error) {
		return next(error)
	}
}

module.exports = {
	GET,
	POST,
	DELETE,
	PUT
}