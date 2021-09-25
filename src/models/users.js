const db = require('../lib/postgres.js')

const GET_USER = `
	SELECT 
		*
	FROM users
	RETURNNING *
`

const INSERT_USER = `
	INSERT INTO users (
		first_name,
		last_name,
		email,
		password,
		specialist
	) VALUES ($1, $2, $3, $4, $5)
	RETURNING user_id
`

const DELETE_USER = `
	DELETE FROM orders
	WHERE user_id = $1
	RETURNING *
`

const PUT_USER = `
	WITH old_data as (
		SELECT
		user_id
		first_name,
		last_name,
		email,
		password,
		specialist
		FROM users
		WHERE user_id = $1
	) UPDATE users u SET
		frist_name = (
		CASE
			WHEN length($2) > 1 THEN $2
			ELSE o.firts_name
		END),
		last_name = (
			CASE
				WHEN length($3) > 1 THEN $2
				ELSE o.last_name
			END),
		email = (
			CASE
				WHEN length($4) > 1 THEN $2
				ELSE o.email
			END),
		password = (
			CASE
				WHEN length($5) > 1 THEN $2
				ELSE o.password
			END),
		specialist = (
			CASE
				WHEN length($6) > 1 THEN $2
				ELSE o.specialist
			END),
	FROM old_data o
	WHERE user_id = $1
	RETURNING u.*
`

const getUser = () => {
	try{
		db(GET_USER)
	}catch(error){
		throw error
	}
}

const insertUser = ({ firstName, lastName, email, password, specialist }) => {
	try {
		return db(INSERT_USER, firstName, lastName, email, password, specialist)
	}catch(error){
		throw error
	}
}

const deleteUser = async ({ userId }) => {
	try{
		return db(DELETE_USER, userId)
	}catch(error){
		throw error
	}
}

const putUser = async ({ userId, firstName, lastName, email, password, specialist }) => {
	try{
		return db(PUT_USER, userId, firstName, lastName, email, password, specialist)
	}catch(error){
		throw error
	}
}

module.exports = {
	getUser,
	insertUser,
	deleteUser,
	putUser
}