const Joi = require('joi')

let registerValidation = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(30).required(),
    last_name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).pattern( new RegExp('^[a-zA-Z0-9]{3,30}$') ).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    specialist: Joi.string()
})

module.exports = {
    registerValidation
}