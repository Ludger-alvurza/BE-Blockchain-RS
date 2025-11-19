// src/services/patientService.js
import { prisma } from "./prismaService.js";

/**
 * Ambil semua pasien dari database
 * @returns {Promise<Array>} Array pasien
 */
export const getAllPatients = async () => {
  return await prisma.patients.findMany();
};

/**
 * Ambil pasien berdasarkan wallet_did
 * @param {string} walletDid
 * @returns {Promise<Object|null>} Pasien atau null kalau nggak ada
 */
export const getPatientByWalletDid = async (walletDid) => {
  return await prisma.patients.findUnique({
    where: { wallet_did: walletDid },
  });
};

/**
 * Ambil pasien berdasarkan patient_id
 * @param {string} patient_id
 * @returns {Promise<Object|null>} Pasien atau null kalau nggak ada
 */
export const getPatientById = async (patient_id) => {
  return await prisma.patients.findUnique({
    where: { patient_id: patient_id },
  });
};

/**
 * Buat pasien baru
 * @param {Object} data
 * @param {string} data.wallet_did
 * @param {string} data.full_name
 * @param {string | null} data.birth_date
 * @param {string | null} data.gender
 * @param {string | null} data.blood_type
 * @param {string | null} data.contact_phone
 * @param {string | null} data.address
 * @param {string | null} data.emergency_contact
 * @param {string | null} data.insurance
 * @param {string | null} data.allergies
 * @param {string | null} data.chronic_conditions
 * @returns {Promise<Object>} Pasien yang baru dibuat
 */
export const createPatient = async (data) => {
  return await prisma.patients.create({
    data: {
      wallet_did: data.wallet_did,
      full_name: data.full_name,
      birth_date: data.birth_date,
      gender: data.gender,
      blood_type: data.blood_type,
      contact_phone: data.contact_phone,
      address: data.address,
      emergency_contact: data.emergency_contact,
      insurance: data.insurance,
      allergies: data.allergies,
      chronic_conditions: data.chronic_conditions,
    },
  });
};

/**
 * Update pasien berdasarkan patient_id
 * @param {string} patient_id
 * @param {Object} data
 * @returns {Promise<Object>} Pasien yang diupdate
 */
export const updatePatient = async (patient_id, data) => {
  return await prisma.patients.update({
    where: { patient_id: patient_id },
    data,
  });
};

/**
 * Hapus pasien berdasarkan patient_id
 * @param {string} patient_id
 * @returns {Promise<Object>} Pasien yang dihapus
 */
export const deletePatient = async (patient_id) => {
  return await prisma.patients.delete({
    where: { patient_id: patient_id },
  });
};
