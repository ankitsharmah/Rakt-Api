import mongoose from 'mongoose';

const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  contactInfo: {
    phone: { type: [String], required: true }, // Array to handle multiple phone numbers
    email: { type: String },
  },
  operatingHours: {
    openTime: { type: String, required: true }, // e.g., "09:00 AM"
    closeTime: { type: String, required: true }, // e.g., "06:00 PM"
    days: { type: [String], default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
  },
  availableInventory: [
    {
      bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
      type: { type: String, enum: ['Whole Blood', 'RBC', 'Plasma', 'Platelets'], required: true },
      quantity: { type: Number, required: true },
      lastUpdated: { type: Date, default: Date.now },
    },
  ],
  services: {
    type: [String], // e.g., ["Donation Camp", "Blood Storage", "Screening"]
    default: [],
  },
  registrationId: {
    type: String,
    required: true,
    unique: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
  },
  admin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
}, { timestamps: true });

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

export default BloodBank;
