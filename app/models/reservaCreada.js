const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')

const ReservaCreadaScheme = new mongoose.Schema(
    {
    id:{
    type:Number,
},
    numero_reserva:{
        type:Number
    },
    fecha:{
        type:String,
    },
    hora:{
        type:String,
    },
    servicio:{
        type:String,
    },
    nombre:{
        type:String,
    },
    apellido:{
        type:String,
    },
    correo:{
        type:String,
    },
    telefono:{
        type:Number,
    }
    },
    {
        timestamps:true,
        versionKey:false
    }
);
ReservaCreadaScheme.plugin(mongoosePaginate)
module.exports = mongoose.model("reservacreada", ReservaCreadaScheme)