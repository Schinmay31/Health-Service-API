import express from "express";
import { getAllServices,deleteService,updateService,addService } from "../controller/services.js";

const router = express.Router();

router.post("/services", addService);
router.get("/services", getAllServices);
router.put("/services/:id", updateService);
router.delete("/services/:id", deleteService);

export default router;
