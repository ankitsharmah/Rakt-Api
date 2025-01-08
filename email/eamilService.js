import nodemailer from 'nodemailer';
import { Otp } from '../models/otpsModel.js';

// Create a transporter for SMTP configuration

// Function to send OTP email
export const sendOtpEmail = async (email, otp) => {
    try {
        // Check if recipient email is provided
        if (!email) {
            throw new Error('Recipient email is required.');
        }

        // Create the transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,   // e.g., smtp.gmail.com
            port: process.env.MAIL_PORT,   // e.g., 587
            secure: false,                 // false for 587, true for 465
            auth: {
                user: process.env.MAIL_USER,  // Your email address
                pass: process.env.MAIL_PASS,  // Your email password or App password
            },
        });

        // Prepare mail options
        let mailOptions = {
            from: `<${process.env.MAIL_USER}>`,  // Sender name and email
            to: email,                                  // Recipient's email
            subject: 'Your OTP Code',                   // Subject
            text: `Your OTP code is: ${otp}`,           // OTP message body
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);

        console.log('OTP sent successfully:', info);

        if(info){
            await Otp.create({email,otp});
        }


        return info;
    } catch (e) {
        console.log(`Error sending OTP: ${e.message}`);
        throw e; // Re-throw the error for further handling if needed
    }
};

