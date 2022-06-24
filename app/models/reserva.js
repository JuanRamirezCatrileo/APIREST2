const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')

const ReservaScheme = new mongoose.Schema(
    {
    id:{
    type:Number,
},
    nombre_servicio:{
        type:String
    },
    fecha:{
        type:String,
    },
    hora:{
        type:String,
    },
    cupos:{
        type:Number,
    },
    sobrecupos:{
        type:Number,
    }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

ReservaScheme.plugin(mongoosePaginate)
module.exports = mongoose.model("reserva", ReservaScheme)