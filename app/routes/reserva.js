const express= require('express')

const controller = require('../controllers/reserva')

const router = express.Router()

const reserva = require('../models/reserva')

const {validateReserva} = require ('../validators/reserva')

const path = 'reserva'

router.get(
    `/${path}`,
    controller.getData
)

router.get('/reserva/:nombre_servicio/', function(req, res) {
    let nombre_servicio = req.params.nombre_servicio;
    reserva.find({ nombre_servicio: nombre_servicio }, function(err, dbConnect) {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontró ningún servicio',
                err
            });
        } else {
            return res.json({
                success: true,
                cliente: dbConnect
            });
        }
    })
});
    

router.post(
    `/${path}`, validateReserva,
    controller.insertData);


    router.put(
        `/${path}/:id`,
        controller.updateSingle
    )

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
)

module.exports = router
