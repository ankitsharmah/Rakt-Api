import mongoose from "mongoose"
// import Mongoose from "mongoose"

const userSchema =new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin']
    },
    bloodGroup:{
        type:String
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requred:true
    },
    lastDonationDate:{
        type:String
    },
},{timestamps:true})

export const User = mongoose.model('User',userSchema);