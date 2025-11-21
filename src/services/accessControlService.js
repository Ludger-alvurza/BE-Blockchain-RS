// src/services/accessControlService.js
import { prisma } from "./prismaService.js";
import AppError from "../utils/AppError.js";

/**
 * Ambil semua access controls dari database
 * @returns {Promise<Array>} Array access controls
 */
export const getAllAccessControls = async () => {
  return await prisma.access_controls.findMany({
    orderBy: { created_at: "desc" },
  });
};

/**
 * Ambil access control berdasarkan ac_id
 * @param {string} ac_id
 * @returns {Promise<Object|null>} Access control atau null kalau nggak ada
 */
export const getAccessControlById = async (ac_id) => {
  return await prisma.access_controls.findUnique({
    where: { ac_id: ac_id },
  });
};

/**
 * Ambil access controls berdasarkan patient_id
 * @param {string} patient_id
 * @returns {Promise<Array>} Array access controls
 */
export const getAccessControlsByPatientId = async (patient_id) => {
  return await prisma.access_controls.findMany({
    where: { patient_id: patient_id },
    orderBy: { created_at: "desc" },
  });
};

/**
 * Ambil access controls yang di-granted ke user tertentu
 * @param {string} granted_to
 * @returns {Promise<Array>} Array access controls
 */
export const getAccessControlsByGrantedTo = async (granted_to) => {
  return await prisma.access_controls.findMany({
    where: { granted_to: granted_to },
    orderBy: { created_at: "desc" },
  });
};

/**
 * Ambil access controls yang masih aktif (valid)
 * @returns {Promise<Array>} Array active access controls
 */
export const getActiveAccessControls = async () => {
  const now = new Date();
  return await prisma.access_controls.findMany({
    where: {
      valid_from: { lte: now },
      valid_to: { gte: now },
    },
    orderBy: { created_at: "desc" },
  });
};

/**
 * Buat access control baru
 * @param {Object} data
 * @param {string} data.patient_id
 * @param {string} data.granted_to
 * @param {string} data.granted_by
 * @param {Object | null} data.scope
 * @param {Date | null} data.valid_from
 * @param {Date | null} data.valid_to
 * @param {string | null} data.on_chain_tx
 * @returns {Promise<Object>} Access control yang baru dibuat
 */
export const createAccessControl = async (data) => {
  try {
    // CEK apakah access control sudah ada
    const existing = await prisma.access_controls.findFirst({
      where: {
        patient_id: data.patient_id,
        granted_to: data.granted_to,
      },
    });

    if (existing) {
      throw new AppError("Access control sudah ada untuk user ini.", 409);
    }

    // Baru buat kalau belum ada
    return await prisma.access_controls.create({
      data: {
        patient_id: data.patient_id,
        granted_to: data.granted_to,
        granted_by: data.granted_by,
        scope: data.scope || {},
        valid_from: data.valid_from || new Date(),
        valid_to: data.valid_to,
        on_chain_tx: data.on_chain_tx,
      },
    });
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    // Handle Prisma specific errors
    if (error.code === "P2003") {
      const constraint = error.meta?.constraint || "";

      if (constraint.includes("patient_id")) {
        throw new AppError("Patient ID tidak ditemukan.", 404);
      }
      if (constraint.includes("granted_to")) {
        throw new AppError("granted_to (user) tidak ditemukan.", 404);
      }
      if (constraint.includes("granted_by")) {
        throw new AppError("granted_by (user) tidak ditemukan.", 404);
      }
      throw new AppError("Foreign key invalid.", 400);
    }

    if (error.code === "P2002") {
      throw new AppError("Access control sudah ada.", 409);
    }

    // Unexpected error
    throw new AppError("Gagal membuat access control", 500);
  }
};

/**
 * Update access control berdasarkan ac_id
 * @param {string} ac_id
 * @param {Object} data
 * @returns {Promise<Object>} Access control yang diupdate
 */
export const updateAccessControl = async (ac_id, data) => {
  return await prisma.access_controls.update({
    where: { ac_id: ac_id },
    data,
  });
};

/**
 * Hapus access control berdasarkan ac_id
 * @param {string} ac_id
 * @returns {Promise<Object>} Access control yang dihapus
 */
export const deleteAccessControl = async (ac_id) => {
  return await prisma.access_controls.delete({
    where: { ac_id: ac_id },
  });
};

/**
 * Revoke access control (soft delete dengan set valid_to ke now)
 * @param {string} ac_id
 * @returns {Promise<Object>} Access control yang di-revoke
 */
export const revokeAccessControl = async (ac_id) => {
  return await prisma.access_controls.update({
    where: { ac_id: ac_id },
    data: { valid_to: new Date() },
  });
};

/**
 * Cek apakah user punya akses ke patient
 * @param {string} patient_id
 * @param {string} user_id
 * @returns {Promise<boolean>} True kalau punya akses
 */
export const checkAccess = async (patient_id, user_id) => {
  const now = new Date();
  const access = await prisma.access_controls.findFirst({
    where: {
      patient_id: patient_id,
      granted_to: user_id,
      valid_from: { lte: now },
      valid_to: { gte: now },
    },
  });
  return access !== null;
};
