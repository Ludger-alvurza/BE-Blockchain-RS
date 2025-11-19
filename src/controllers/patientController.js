// src/controllers/patientController.js
import * as patientService from "../services/patientService.js";

export const getPatients = async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPatientByWalletDid = async (req, res) => {
  const { wallet_did } = req.params;
  try {
    const patient = await patientService.getPatientByWalletDid(wallet_did);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPatientById = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const patient = await patientService.getPatientById(patient_id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPatient = async (req, res) => {
  try {
    const {
      wallet_did,
      full_name,
      birth_date,
      gender,
      blood_type,
      contact_phone,
      address,
      emergency_contact,
      insurance,
      allergies,
      chronic_conditions,
    } = req.body;

    const newPatient = await patientService.createPatient({
      wallet_did,
      full_name,
      birth_date,
      gender,
      blood_type,
      contact_phone,
      address,
      emergency_contact,
      insurance,
      allergies,
      chronic_conditions,
    });

    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePatient = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const {
      wallet_did,
      full_name,
      birth_date,
      gender,
      blood_type,
      contact_phone,
      address,
      emergency_contact,
      insurance,
      allergies,
      chronic_conditions,
    } = req.body;

    const updatedPatient = await patientService.updatePatient(patient_id, {
      wallet_did,
      full_name,
      birth_date,
      gender,
      blood_type,
      contact_phone,
      address,
      emergency_contact,
      insurance,
      allergies,
      chronic_conditions,
    });

    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePatient = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const deletedPatient = await patientService.deletePatient(patient_id);
    res.json({ message: "Pasien berhasil dihapus", data: deletedPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
