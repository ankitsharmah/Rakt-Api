import express from 'express'
import { addBlood, addBloodGroup, removeBlooed } from '../contorller/bloodInventery.js';

const router = express.Router();

router.post("/add",addBloodGroup);
router.post("/add-blood",addBlood)
router.post("/remove-blood",removeBlooed);

export default router;