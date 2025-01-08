import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import crypto from 'crypto'
import {sendOtpEmail} from '../email/eamilService.js'
import { Otp } from "../models/otpsModel.js";


export const signup= async(req,res)=>{

    try {
        const {fullName,email,password,role,bloodGroup,contact,address,lastDonationDate}=req.body;

        if(!fullName || !email || !password || !role || !bloodGroup || !contact || !address || !lastDonationDate){
            return res.status(400).json({
                message:"something missing",
                success:true
            })
        }

        const salted = await bcryptjs.hash(password,10)

        // const otp = generateOtp();


        await User.create({fullName,email,
            password:salted
            ,role,bloodGroup,contact,address,lastDonationDate})
        return res.status(200).json({
            message: "Registered successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}

export const verifyAccount = async (req,res)=>{

    try {
        const {otp,email} = req.body;

        const received = await Otp.findOne({otp:otp});

        if(!received){
            return res.status(400).json({
                message:"invalid otp",
                success:false
            })
        }

        if(received.otp !== otp || received.email!==email){
            return res.status(400).json({
                message:"please give right otp",
                success:false
            })
        }

        const user = await User.findOne({email:email});

                user.isAuthenticated=true;

                await user.save();

                await Otp.findByIdAndDelete(received._id);
                
            return res.status(200).json({
                message:"user authenticated successfully",
                success:true
            })

        
    } catch (error) {
        console.log(error);
    }
}

function generateOtp() {
    const otp = crypto.randomInt(100000, 999999); // Generates a 6-digit numeric OTP
    return otp.toString(); // Convert it to string for easy handling
  }
  

export const sendOtp=(req, res) =>{
  const { email } = req.body;
  const otp = generateOtp();

  
  sendOtpEmail(email, otp)
    .then(() => {
      res.status(200).json({ message: 'OTP sent to your email!' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to send OTP', error: err });
    });
}


