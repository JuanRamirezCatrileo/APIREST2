const express= require('express')

const controller = require('../controllers/reserva')

const router = express.Router()

const {validateReserva} = require ('../validators/reserva')

const path = 'reserva'

router.get(
    `/${path}`,
    controller.getData
)

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
