const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateCreate = [
    check ('correo')
        .exists()
        .not()
        .isEmail(),
    check ('password')
        .exists()
        .not(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]

module.exports = {validateCreate}