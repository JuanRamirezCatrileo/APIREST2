const {check} = require ('express-validator')
const {validateResult} =require ('../helpers/validateHelper')

const validateService = [
    check ('id')
        .exists()
        .not(),
    check ('nombre')
        .exists()
        .not(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]

module.exports = {validateService}