import * as doctorService from "../services/doctorService.js";

/**
 * Get semua dokter
 */
export const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Get dokter by ID
 */
export const getDoctorById = async (req, res) => {
  const { doctor_id } = req.params;
  try {
    const doctor = await doctorService.getDoctorById(doctor_id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }
    res.json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Get dokter berdasarkan provider_id
 */
export const getDoctorsByProvider = async (req, res) => {
  const { provider_id } = req.params;
  try {
    const doctors = await doctorService.getDoctorsByProviderId(provider_id);
    res.json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Create dokter baru
 */
export const createDoctor = async (req, res) => {
  const {
    full_name,
    provider_id,
    specialty,
    license_no,
    contact,
    profile_meta,
  } = req.body;

  if (!full_name) {
    return res.status(400).json({
      success: false,
      error: "full_name is required",
    });
  }

  try {
    const newDoctor = await doctorService.createDoctor({
      full_name,
      provider_id,
      specialty,
      license_no,
      contact,
      profile_meta,
    });
    res.status(201).json({
      success: true,
      data: newDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Update dokter
 */
export const updateDoctor = async (req, res) => {
  const { doctor_id } = req.params;
  const {
    full_name,
    provider_id,
    specialty,
    license_no,
    contact,
    profile_meta,
  } = req.body;

  try {
    const doctor = await doctorService.getDoctorById(doctor_id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }

    const updatedDoctor = await doctorService.updateDoctor(doctor_id, {
      full_name,
      provider_id,
      specialty,
      license_no,
      contact,
      profile_meta,
    });

    res.json({
      success: true,
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Delete dokter
 */
export const deleteDoctor = async (req, res) => {
  const { doctor_id } = req.params;

  try {
    const doctor = await doctorService.getDoctorById(doctor_id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }

    await doctorService.deleteDoctor(doctor_id);
    res.json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Search dokter by nama
 */
export const searchDoctorByName = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({
      success: false,
      error: "name query parameter is required",
    });
  }

  try {
    const doctors = await doctorService.searchDoctorByName(name);
    res.json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Search dokter by spesialisasi
 */
export const searchDoctorBySpecialty = async (req, res) => {
  const { specialty } = req.query;

  if (!specialty) {
    return res.status(400).json({
      success: false,
      error: "specialty query parameter is required",
    });
  }

  try {
    const doctors = await doctorService.searchDoctorBySpecialty(specialty);
    res.json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
