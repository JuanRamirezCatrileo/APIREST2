const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')

const LoginScheme = new mongoose.Schema(
    {
    correo:{
    type:String,
    unique:true,
    required: true
},
    password:{
        type:String,
        required: true
    }
    },
    {
        timestamps:true,
        versionKey:false
    }
);
LoginScheme.plugin(mongoosePaginate)
module.exports = mongoose.model("login", LoginScheme)
