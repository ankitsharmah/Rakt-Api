import BloodBank from "../models/BloodBankModel.js";
import { Camp } from "../models/donationModel.js";

export const donationCamp = async (req,res)=>{
    try {
        const {name,location,startDate,endDate,startTime,endTime,organizer} = req.body;

        if(!name||!location||!startDate||!endDate||!startTime||!endTime||!organizer){
            return res.status(201).json({
                message:"something is missing",
                success:false
            })
        }

        const camp = await Camp.create({name,location,startDate,endDate,startTime,endTime,organizer});
        
        return res.status(200).json({
            message:"donation camp created scuccessfully",
            camp :camp,
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const addParticipents=async (req,res)=>{
    try {
        const {campId} = req.body;
        console.log(req.user);
        const participantId = req.user.userId;

        const camp = await Camp.findById(campId);

        if(!camp){
            return res.status(400).json({
                message:"camp not found",
                message:false
            })
        }
        camp.participants.push(participantId);

        await camp.save();
        return res.status(200).json({
            message:"participated successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getBloodCamp=async (req,res)=>{
    try {
        
        const data = await Camp.find();

        if(!data){return res.status(201).json({
            message:"no blood camp found",
            success:false
        })}

        return res.status(200).json({
            camps:data,
            success:true
        })
        
    } catch (error) {
        console.log(error);
    }
}
