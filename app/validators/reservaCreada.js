const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateReservaCreada = [
    check ('id')
        .exists()
        .not()
        .isEmail(),
    check ('numero_reserva')
        .exists()
        .isNumeric()
        .not(),
    check ('fecha')
        .exists()
        .isDate()
        .not(),
    check ('hora')
        .exists()
        .not(),
    check ('servicio')
        .exists()
        .not(),
    check ('nombre')
        .exists()
        .not(),
    check ('apellido')
        .exists()
        .not(),
    check ('correo')
        .exists()
        .isEmail()
        .not(),
    check ('telefono')
        .exists()
        .isNumeric()
        .not(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]

module.exports = {validateReservaCreada}
