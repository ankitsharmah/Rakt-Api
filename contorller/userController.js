import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import crypto from 'crypto'
import {sendOtpEmail} from '../email/eamilService.js'
import { Otp } from "../models/otpsModel.js";
import jsonwebtoken from "jsonwebtoken";


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
            password:salted,
            role,
            bloodGroup,
            contact,
            isAuthenticated:false
            ,address,
            lastDonationDate})

            sendOtp(email);

        return res.status(200).json({
            message: "Registered successfully and otp sent",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}

export const verifyAccount = async (req,res)=>{
        console.log(req.body)
    try {
        const {otp,email} = req.body;

        const received = await Otp.findOne({otp});

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

        const user = await User.findOne({email});

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
  

function sendOtp(email){
  
  const otp = generateOtp();

  console.log(email);
  sendOtpEmail(email, otp)
   
    
}

export const login = async (req,res)=>{
        try {
            
            const {email,password} = req.body ;

            if(!email || !password){
                return res.status(201).json({
                    message:"something is missing",
                    success:false
                })
            }

            const user = await User.findOne({email});

            if(!user){
                return res.status(400).json({
                    message:"user not found",
                    success:false
                })
            }

            const isPasswordValid = await bcryptjs.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    message: "Wrong password",
                    success: false
                });
            }
    
            const tokenData = { userId: user._id };
            const token = jsonwebtoken.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
    
            return res.status(200).json({
                auth_token: token,
                user: user,
                success: true
            }); 


        } catch (error) {
            console.log(error);
        }
}

