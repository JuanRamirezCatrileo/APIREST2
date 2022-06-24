const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')

const RegistroScheme = new mongoose.Schema(
    {
    email:{
    type:String,
    unique:true
},
    password:{
        type:String
    }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

RegistroScheme.plugin(mongoosePaginate)
module.exports = mongoose.model("registro", RegistroScheme)