
import BloodBank from '../models/BloodBankModel.js'; // Adjust this path based on your project structure

export const saveBloodBank = async (req,res) => {
  try {
    // Create a new BloodBank document using the schema
    const bloodBank = new BloodBank(req.body);

    // Save the document to the database
    await bloodBank.save();

    console.log('Blood bank saved successfully:', bloodBank);
    return res.status(200).json({
        message:"blood bank added successfully",
        success:true
    });

  } catch (error) {
    console.error('Error saving blood bank:', error);
    throw error; // Rethrow error to be handled at a higher level
  }
};

export const allBloodBank = async(req,res)=>{
        const response =await BloodBank.find();
        return res.status(200).json({
            banks:response,
            success:true
        })
}

export const bloodBankById= async (req,res)=>{
  try {
      const bankId =  req.params.id;

      const bank = await BloodBank.findById(bankId);

      if(!bank){
        return res.status(201).json({
          message:"blood bank not found",
          success:false
        })
      }

      return res.status(200).json({
        bank:bank,
        success:true
      })

      
  } catch (error) {
    console.log(error)
  }
}

