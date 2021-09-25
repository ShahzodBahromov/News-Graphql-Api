const db = require('../lib/postgres.js')

const REGISTERQUERY = `
    INSERT INTO users (
        first_name,
        last_name,
        password,
        email,
        specialist
    ) values ($1, $2, $3, $4, $5)
    RETURNING * 
`

const LOGINQUERY = `
    SELECT
        *
    FROM users u
    WHERE u.email = $1 AND u.password = $2

`

const registerUser = async ({ first_name, last_name, password, email, specialist}) => {
    try {
        return await db(REGISTERQUERY, first_name, last_name, password, email, specialist)
    } catch (error) {
        throw error
    }
}

const loginUser = async ({ email, password  }) => {
    try {
        const test = await db(LOGINQUERY, email, password)
        return await test
    } catch (error) {
        throw error
    }
}

module.exports = {
    registerUser,
    loginUser
}