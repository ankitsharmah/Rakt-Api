import mongoose from "mongoose"

const bloodInventrySchema = new  mongoose.Schema({

    bloodGroup:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
     ,
     donners:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
         }
     ]

},{
    timestamps:true
}) 
const BloodInventry = mongoose.model("BloodInventry",bloodInventrySchema)