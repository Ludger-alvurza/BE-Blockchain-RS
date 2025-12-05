import express from "express";
import * as doctorController from "../controllers/doctorController.js";

const router = express.Router();

// Search routes - MUST be defined BEFORE :doctor_id routes
router.get("/search/name", doctorController.searchDoctorByName);
router.get("/search/specialty", doctorController.searchDoctorBySpecialty);

// CRUD routes
router.get("/", doctorController.getDoctors);
router.get("/:doctor_id", doctorController.getDoctorById);
router.get("/provider/:provider_id", doctorController.getDoctorsByProvider);
router.post("/", doctorController.createDoctor);
router.put("/:doctor_id", doctorController.updateDoctor);
router.delete("/:doctor_id", doctorController.deleteDoctor);

export default router;
