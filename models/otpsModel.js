import mongoose from 'mongoose'

const otpschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    }
})

export const Otp = mongoose.model("Otp",otpschema)