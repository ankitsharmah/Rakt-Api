import express from "express"
import { saveBloodBank } from "../contorller/bloodBankController.js"

const router = express.Router()

router.post("/add-bank",saveBloodBank)

export default router