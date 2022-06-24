const express= require('express')

const controller = require('../controllers/servicio')

const router = express.Router()

const { validateService } = require('../validators/servicio')

const path = 'servicio'

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/${path}`, validateService,
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
