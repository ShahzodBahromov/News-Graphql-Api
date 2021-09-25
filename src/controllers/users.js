const model = require('../models/users.js')
const { registerValidation } = require('../lib/validation.js')

const GET = async (req, res) => {
	res.json(await model.getUser())
}

const POST = async (req, res, next) => {
	try {
		let validated = await registerValidation.validated(req.body)
		if(!validated.error){
			let user = await model.insertUser(validated.value)
			if(user) {
				res.json({
					status: 201,
					message: "The new user has been added!",
					data: user
				})
			} else {
				res.json({
					status: 401,
					message: validated.error.details[0].message
				})
			}
		}
	} catch(error) {
		return next(error)
	}
}

const DELETE = async (req, res, next) => {
	try {
		let user = await model.deleteUser(req.body)
		if(user) {
			res.json({
				status: 201,
				message: "The user is deleted!",
				data: user
			})
		} else throw new Error("There is an error!")
	} catch(error) {
		return next(error)
	}
}

const PUT = async (req, res, next) => {
	try {
		let user = await model.putUser(req.body)
		if(user) {
			res.json({
				status: 201,
				message: "The user is changed!",
				data: user
			})
		} else throw new Error("There is an error!")
	} catch(error) {
		return next(error)
	}
}


module.exports = {
	DELETE,
	GET,
	POST,
	PUT
}