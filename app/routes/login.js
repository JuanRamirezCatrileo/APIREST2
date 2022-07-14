const express= require('express')

const controller = require('../controllers/login')

const router = express.Router()

const { validateCreate } = require('../validators/login')

const path = 'login'

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/${path}`, validateCreate,
    controller.insertData
    );


module.exports = router
