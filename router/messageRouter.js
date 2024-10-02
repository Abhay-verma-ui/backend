import express from "express";
import { getAllMessages, sendMessage } from "../controller/messageConrtoller.js";
import {isAdminAuthenticated} from "../middlewares/auth.js";
const router = express.Router();

router.post("/send",sendMessage);
router.get("/getall", isAdminAuthenticated ,getAllMessages)


export default router;
