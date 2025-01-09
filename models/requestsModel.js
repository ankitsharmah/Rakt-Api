import mongoose from "mongoose"


const requestSchema = new mongoose.Schema({

    recipientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    bloodGroup:{
        type:String,
        required:true
    }
    ,
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Pending",
        enum:['Pending','Accepted','Declined','Completed']
    },
    type: { 
        type: String, enum: ['Whole Blood', 'RBC', 'Plasma', 'Platelets'], 
        required: true 
    },
    bloodBank:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BloodBank"
    }
    
   
      
},{timestamps:true})

export const Requests = mongoose.model("Request",requestSchema)