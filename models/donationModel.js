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
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }]
}, {
  timestamps: true
});

const Camp = mongoose.model('Camp', campSchema);
