const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const ServicioScheme = new mongoose.Schema(
    {
    id:{
    type:Number
    
},
    nombre:{
        type:String
    }
    },
    {
        timestamps:true,
        versionKey:false
    }
);
ServicioScheme.plugin(mongoosePaginate)
module.exports = mongoose.model("servicio", ServicioScheme)