import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", 
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], 
    },
    contact: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"], 
    },
    isAuthenticated: {
      type: Boolean,
      default: false, 
    },
    address: {
      type: String,
      required: true, 
      trim: true,
    },
    lastDonationDate: {
      type: Date, 
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
