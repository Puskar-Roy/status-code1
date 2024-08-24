import { Router } from "express";
import {
 createWastePost ,  getWastePosts 
} from "../controllers/wasteOrders";
import fileUpload from "../lib/fileUpload";
const router = Router();

router.get("/", getWastePosts);
// @ts-ignore
router.post("/", fileUpload, createWastePost);


export default router;