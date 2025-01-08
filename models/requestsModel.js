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
        enum:['Pending','Accepted','Declined','Completed']
    },
    bloodBank:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BloodBank"
    }
    
   
      
},{timestamps:true})

const Requests = mongoose.model("Request",requestSchema)