import express from "express"
import { addParticipents, donationCamp, getBloodCamp } from "../contorller/bloodDonationContoller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/add-camp",donationCamp);
router.put("/add-participant",isAuthenticated,addParticipents);
router.get("/camps",getBloodCamp);

export default router;