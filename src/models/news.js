const db = require('../lib/postgres.js')

const GET_NEWS = `
	SELECT 
		*
	FROM news
	RETURNING *
`

const DELETE_NEWS = `
	DELETE FROM news
	WHERE news_id = $1
	RETURNING *
`

const INSERT_NEWS = `
	INSERT INTO news (
		title,
		body,
		views,
		author_id,
		categry_id,
		lang_id
	) values ($1, $2, $3, $4, $5, $6)
	RETURNING *
`

const UPDATE_NEWS = `
	WITH old_data as (
		SELECT
			news_id,
			title,
			body,
			views,
			author_id,
		FROM news
		WHERE news_id = $1
	) UPDATE news ns SET
		title = (
		CASE
			WHEN length($2) > 1 THEN $2
			ELSE o.title
		END),
		body = (
		CASE
			WHEN length($3) > 0 THEN $3
			ELSE o.title
		END),
		views = (
		CASE
			WHEN $4 = true THEN ns.views+1
			ELSE o.views
		END),
		author_id = (
		CASE
			WHEN length($5) > 1 THEN $2
			ELSE o.author_id
		END),
	FROM old_data o
	WHERE ns.news_id = $1
	RETURNING ns.news_id
`

const getNews = () => {
	try{
		db(GET_NEWS)
	}catch(error){
		throw error
	}
}
const deleteNews = ({ newsId }) => {
	try{
		db(DELETE_NEWS, newsId)
	}catch(error){
		throw error
	}
}

const insertNews = ({ title, body, views, userId, categoryId, langId }) => {
	try{
		return db(INSERT_NEWS, title, body, views, userId, categoryId, langId)
	}catch(error){
		throw error
	}
}

const updateNews = ({ news_id, title, body, views, authorId }) => {
	try{
		return db(UPDATE_NEWS, news_id, title, body, views, authorId )
	}catch(error){
		throw error
	}
}

module.exports = {
	getNews,
	deleteNews,
	insertNews,
	updateNews
}