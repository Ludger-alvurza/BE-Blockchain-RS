import express from "express";
import {
  getPatients,
  createPatient,
  getPatientByWalletDid,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

// GET all patients
router.get("/", getPatients);

// POST create new patient
router.post("/", createPatient);

// GET patient by wallet_did
router.get("/wallet/:wallet_did", getPatientByWalletDid);

// GET patient by patient_id
router.get("/:patient_id", getPatientById);

// PUT update patient by patient_id
router.put("/:patient_id", updatePatient);

// DELETE patient by patient_id
router.delete("/:patient_id", deletePatient);

export default router;
