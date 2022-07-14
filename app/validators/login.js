const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateCreate = [
    check ('correo')
        .exists()
        .isEmail()
        .not(),
    check ('password')
        .exists(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]

module.exports = {validateCreate}
