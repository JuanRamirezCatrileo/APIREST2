const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateReserva = [
    check ('id')
        .exists()
        .not(),
    check ('nombre_servicio')
        .exists()
        .not(),
    check ('fecha')
        .exists()
        .isDate()
        .not(),
    check ('hora')
        .exists()
        .isNumeric()
        .not(),
    check ('cupos')
        .exists()
        .not(),
    check ('sobrecupos')
        .exists()
        .not(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]

module.exports = {validateReserva}