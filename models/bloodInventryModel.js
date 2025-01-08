import mongoose from "mongoose"

const bloodInventrySchema = new  mongoose.Schema({

    bloodGroup:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
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
export const BloodInventry = mongoose.model("BloodInventry",bloodInventrySchema)