import express from "express"
import { addParticipents, donationCamp } from "../contorller/bloodDonationContoller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/add-camp",donationCamp);
router.put("/add-participant",isAuthenticated,addParticipents)

export default router;