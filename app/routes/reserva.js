const express= require('express')

const controller = require('../controllers/reserva')

const router = express.Router()

const {validateReserva} = require ('../validators/reserva')

const path = 'reserva'

router.get(
    `/${path}`,
    controller.getData
)

router.get('nombre_servicio', function(req, res) {

        let nombre_servicio = req.query.nombre_servicio;

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
                    reserva: dbConnect
                });
            }
    })
    controller.getData    
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
