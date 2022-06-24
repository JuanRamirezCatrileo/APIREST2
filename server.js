const express = require('express')
require("dotenv").config()
const cors = require("cors")
const app = express()
const userRouters = require('./app/routes/user')
const registroRouters = require('./app/routes/registro')
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
app.use(registroRouters)
app.use(reservaRouters)
app.use(reservaCreada)
app.use(servicio)

const dbConnect = require('./config/mongo')

const port = process.env.PORT || 3000




app.listen(port, () => {
    console.log('App  lista por http://localhost:'+port)
})

dbConnect()