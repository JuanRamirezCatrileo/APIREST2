const express= require('express')

const controller = require('../controllers/registro')

const router = express.Router()

const {validateRegistro} = require ('../validators/registro')

const path = 'registro'

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/${path}`, validateRegistro,
    controller.insertData
    );


    router.put(
        `/${path}/:id`,
        controller.updateSingle
    )

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
)


module.exports = router
