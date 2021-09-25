const db = require('../lib/postgres.js')

const CATEGORIES = `
	SELECT
		*
	FROM categories
`

const INSERT_CATEGORIE = `
	INSERT INTO categories (
		name
		lang
	) VALUES ($1, $2)
	RETURNING *
`

const DELETE_CATEGORIE = `
	DELETE FROM categories
	WHERE categorie_id = $1
	RETURNING *
`


const PUT_CATEGORI = `
	UPDATE categories SET
		name = $1 
	WHERE categorie_id = $2
	RETURNING *
`



const getCategorie = () => {
	try{
		return db(CATEGORIES)
	}catch(error){
		throw error
	}
}

const putCategorie = ({ categorieId, name }) => {
	try{
		return db(PUT_CATEGORI, categorieId, name)
	}catch(error){
		throw error
	}
}

const insertCategorie = ({ name, lang }) => {
	try{
		return db(INSERT_CATEGORIE, name, lang)
	}catch(error){
		throw error
	}
}

const deleteCategorie = ({ categorieId }) => {
	try{
		return db(DELETE_CATEGORIE, categorieId)
	}catch(error){
		throw error
	}
}

module.exports = {
	getCategorie,
	insertCategorie,
	deleteCategorie,
	putCategorie
}