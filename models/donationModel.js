import mongoose from "mongoose"
const { Schema } = mongoose;

const campSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"BloodBank"
  },
  
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }]
}, {
  timestamps: true
});

export const Camp = mongoose.model('Camp', campSchema);
