import express from 'express'
import { login, signup, verifyAccount } from '../contorller/userController.js'

const router = express.Router()

router.post("/register",signup);
router.post("/verify-account",verifyAccount);
router.post("/login",login);

export default router;