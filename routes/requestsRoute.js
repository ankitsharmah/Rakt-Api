import express from "express"
import { addRequest, handleReq, requestsByBank } from "../contorller/requestController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/add-request",isAuthenticated,addRequest);
router.put("/update/status",handleReq)
router.get("/",requestsByBank)
export default router