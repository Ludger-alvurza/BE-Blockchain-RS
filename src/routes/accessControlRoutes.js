// src/routes/accessControlRoutes.js
import express from "express";
import {
  getAccessControls,
  getAccessControlById,
  getAccessControlsByPatientId,
  getAccessControlsByGrantedTo,
  getActiveAccessControls,
  createAccessControl,
  updateAccessControl,
  revokeAccessControl,
  deleteAccessControl,
  checkAccess,
} from "../controllers/accessControlController.js";

const router = express.Router();

// GET all access controls
router.get("/", getAccessControls);

// GET active access controls only
router.get("/active", getActiveAccessControls);

// GET access control by ac_id
router.get("/:ac_id", getAccessControlById);

// GET access controls by patient_id
router.get("/patient/:patient_id", getAccessControlsByPatientId);

// GET access controls granted to a user
router.get("/user/:user_id", getAccessControlsByGrantedTo);

// GET check if user has access to patient
router.get("/check/:patient_id/:user_id", checkAccess);

// POST create new access control
router.post("/", createAccessControl);

// PUT update access control by ac_id
router.put("/:ac_id", updateAccessControl);

// PATCH revoke access control (soft delete)
router.patch("/:ac_id/revoke", revokeAccessControl);

// DELETE access control by ac_id (hard delete)
router.delete("/:ac_id", deleteAccessControl);

export default router;
