const express= require('express')

const controller = require('../controllers/login')
const login = require('../models/login')

const router = express.Router()

const { validateCreate } = require('../validators/login')

const path = 'login'

router.get(
    `/${path}`,
    controller.getData
)

router.get('/login2', function(req, res) {
    let correo = req.query.correo;
    let password = req.query.password;
    login.find({ correo: correo, password }, function(err, dbConnect) {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontraron los datos',
                err
            });
        } else {
            return res.json({
                success: true,
                login: dbConnect
            });
        }
    })
});

router.post(
    `/${path}`, validateCreate,
    controller.insertData
    );


module.exports = router
