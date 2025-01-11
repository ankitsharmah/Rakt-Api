import express from "express"
import { allBloodBank, bloodBankById, saveBloodBank } from "../contorller/bloodBankController.js"

const router = express.Router()

router.post("/add-bank",saveBloodBank)
router.get("/banks",allBloodBank)
router.get("/bank/:id",bloodBankById)
export default router