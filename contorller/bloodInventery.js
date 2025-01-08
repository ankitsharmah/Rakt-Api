import { BloodInventry } from "../models/bloodInventryModel"


export const addBlood=async (req,res)=>{

    try {
        const {quantity , bloodGroup}=req.body

        const blood = await BloodInventry.findOne(type);
        
        blood.quantity = blood.quantity+quantity;

        await BloodInventry.save();
        return res.status(200).json({
            message:"updated successfully ",
            success:true
        })

    } catch (error) {
        
    }
}

export const removeBlooed = async (req,res)=>{
    try {

        const {quantity,bloodGroup} = req.body;

        const blood = await BloodInventry.findOne({type});

        if(blood.quantity>=quantity){

            blood.quantity=blood.quantity-quantity;
        }

        await blood.save();

        return res.status(200).json({
            message:"updated successfully",
            success:true
        })

        
    } catch (error) {
        console.log(error);
    }
}

export const addBloodGroup = async (req,res)=>{
    try {
        const {bloodGroup} = req.body;
        const blood = await BloodInventry.create({
            blood,
            donners:[]
        })
        if(blood){
            return res.status(200).json({
                message:"added successfully",
                success:true
            })
        }

        return res.status(400).json({
            message:"error while adding blood group",
            success:false
        })
        
    } catch (error) {
        console.log(error);
    }
}