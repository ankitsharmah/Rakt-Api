import express from "express"
import { allBloodBank, saveBloodBank } from "../contorller/bloodBankController.js"

const router = express.Router()

router.post("/add-bank",saveBloodBank)
router.get("/banks",allBloodBank)
export default router