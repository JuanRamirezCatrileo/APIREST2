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

router.get('/reserva2', function(req, res) {
    let nombre_servicio = req.query.nombre_servicio;
    let fecha = req.query.fecha;
    reserva.find({ nombre_servicio: nombre_servicio, fecha }, function(err, dbConnect) {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontraron los datos',
                err
            });
        } else {
            return res.json({
                success: true,
                reserva: dbConnect
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
