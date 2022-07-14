const express = require('express')
require("dotenv").config()
const cors = require("cors")
const app = express()
const userRouters = require('./app/routes/login')
const reservaRouters = require('./app/routes/reserva')
const reservaCreada = require('./app/routes/reservaCreada')
const servicio = require('./app/routes/servicio')




app.use(
    express.json({
        limit: "20mb"
    })
)

app.use(
    express.urlencoded({
        limit: "20mb",
        extended: true
    })
)
app.use(cors())
app.use(userRouters)
app.use(reservaRouters)
app.use(reservaCreada)
app.use(servicio)

const dbConnect = require('./config/mongo')

dbConnect()

const port = process.env.PORT || 3000

app.listen(port, function() {
    console.log("App  lista en", port)
})



