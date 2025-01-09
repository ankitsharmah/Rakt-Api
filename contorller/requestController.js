import { Requests } from "../models/requestsModel.js";


export const addRequest = async (req,res)=>{

   try {
    const {bloodGroup,quantity,bloodBank,type}=req.body;
    // console.log(req.user);
    const recipientId = req.user.userId;


    const request = await Requests.create(
        {bloodGroup,quantity,bloodBank,type,recipientId}
    )

    return res.status(200).json({
        message:"request raised",
        success:true
    })

   } catch (error) {
    console.log(error);
   }
    
    

}

export const handleReq = async (req, res) => {
    try {
      const { status, reqId } = req.body;
  
      // Validate the input
      if (!status || !reqId) {
        return res.status(400).json({
          message: "Status and reqId are required",
          success: false,
        });
      }
  
      // Find the request by ID
      const request = await Requests.findById(reqId);
  
      if (!request) {
        return res.status(404).json({
          message: "No request found with the provided ID",
          success: false,
        });
      }
  
      // Update the status
      request.status = status;
  
      // Save the updated document
      await request.save();
  
      return res.status(200).json({
        message: "Status updated successfully",
        success: true,
      });
  
    } catch (error) {
      console.error("Error updating status:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  };
  

  export const requestsByBank = async (req,res)=>{
    try {
        const {bankId} = req.body;

        const allRequest = await Requests.find({bankId});

        return res.status(200).json({
            requets:allRequest,
            success:true
        })
        
    } catch (error) {
        console.log(error);
    }
  }