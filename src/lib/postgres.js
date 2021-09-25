const { Pool } = require('pg')
const { pgConfig } = require('../config.js')

const pool = new Pool(pgConfig)

async function connection (query, ...array) {
	const client = await pool.connect()
	try {
		const { rows } = await client.query(query, array.length ? array : null)
		return rows
	} catch(error) {
		throw error
	} finally {
		await client.release()
	}
}

module.exports = connection