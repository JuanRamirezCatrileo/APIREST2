const express= require('express')

const controller = require('../controllers/reservaCreada')

const reservaCreada = require('../models/reservaCreada')

const router = express.Router()

const {validateReservaCreada} = require('../validators/reservaCreada')

const path = 'reservaCreada'

router.get(
    `/${path}`,
    controller.getData
)

router.get('/reservacreada2', function(req, res) {
    let numero_reserva = req.query.numero_reserva;
    
    reservaCreada.find({ numero_reserva: numero_reserva}, function(err, dbConnect) {
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
    `/${path}`, validateReservaCreada,
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
