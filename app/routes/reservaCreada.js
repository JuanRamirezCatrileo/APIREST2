const express= require('express')

const controller = require('../controllers/reservaCreada')

const router = express.Router()

const {validateReservaCreada} = require('../validators/reservaCreada')

const path = 'reservaCreada'

router.get(
    `/${path}`,
    controller.getData
)

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
