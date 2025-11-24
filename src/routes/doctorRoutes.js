import express from "express";
import {
  getDoctors,
  getDoctorById,
  getDoctorsByProvider,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  searchDoctorByName,
  searchDoctorBySpecialty,
} from "../controllers/doctorController.js";

const router = express.Router();

// Get all doctors
router.get("/", getDoctors);

// Search doctors by name
router.get("/search/name", searchDoctorByName);

// Search doctors by specialty
router.get("/search/specialty", searchDoctorBySpecialty);

// Get doctors by provider ID
router.get("/provider/:provider_id", getDoctorsByProvider);

// Get doctor by ID
router.get("/:doctor_id", getDoctorById);

// Create new doctor
router.post("/", createDoctor);

// Update doctor
router.put("/:doctor_id", updateDoctor);

// Delete doctor
router.delete("/:doctor_id", deleteDoctor);

export default router;
