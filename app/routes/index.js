const express = require('express')
const router = express.Router()

const routes = [
    {
        path: 'user'
    },
    {
        path: 'servicio'
    },
    {
        path: 'reservaCreada'
    },
    {
        path: 'registro'
    }
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router