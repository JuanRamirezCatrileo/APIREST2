const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateRegistro = [
    check ('email')
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

module.exports = {validateRegistro}