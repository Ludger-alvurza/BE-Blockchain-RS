import { prisma } from "./prismaService.js";

/**
 * Ambil semua dokter dari database
 * @returns {Promise<Array>} Array dokter
 */
export const getAllDoctors = async () => {
  return await prisma.doctors.findMany({
    include: {
      provider: true,
      visits: true,
      prescriptions: true,
    },
  });
};

/**
 * Ambil dokter berdasarkan doctor_id
 * @param {string} doctor_id
 * @returns {Promise<Object|null>} Dokter atau null kalau nggak ada
 */
export const getDoctorById = async (doctor_id) => {
  return await prisma.doctors.findUnique({
    where: { doctor_id },
    include: {
      provider: true,
      visits: true,
      prescriptions: true,
    },
  });
};

/**
 * Ambil dokter berdasarkan provider_id
 * @param {string} provider_id
 * @returns {Promise<Array>} Array dokter dari provider tertentu
 */
export const getDoctorsByProviderId = async (provider_id) => {
  return await prisma.doctors.findMany({
    where: { provider_id },
    include: {
      provider: true,
      visits: true,
    },
  });
};

/**
 * Buat dokter baru
 * @param {Object} data
 * @param {string} data.full_name - Nama dokter (required)
 * @param {string} data.provider_id - ID provider (optional)
 * @param {string} data.specialty - Spesialisasi dokter (optional)
 * @param {string} data.license_no - Nomor lisensi (optional)
 * @param {string} data.contact - Kontak dokter (optional)
 * @param {Object} data.profile_meta - Metadata profil (optional)
 * @returns {Promise<Object>} Dokter yang baru dibuat
 */
export const createDoctor = async (data) => {
  return await prisma.doctors.create({
    data: {
      full_name: data.full_name,
      provider_id: data.provider_id || null,
      specialty: data.specialty || null,
      license_no: data.license_no || null,
      contact: data.contact || null,
      profile_meta: data.profile_meta || null,
    },
    include: {
      provider: true,
    },
  });
};

/**
 * Update dokter
 * @param {string} doctor_id - ID dokter
 * @param {Object} data - Data yang ingin diupdate
 * @returns {Promise<Object>} Dokter yang sudah diupdate
 */
export const updateDoctor = async (doctor_id, data) => {
  return await prisma.doctors.update({
    where: { doctor_id },
    data: {
      full_name: data.full_name || undefined,
      provider_id: data.provider_id || undefined,
      specialty: data.specialty || undefined,
      license_no: data.license_no || undefined,
      contact: data.contact || undefined,
      profile_meta: data.profile_meta || undefined,
    },
    include: {
      provider: true,
    },
  });
};

/**
 * Hapus dokter
 * @param {string} doctor_id - ID dokter
 * @returns {Promise<Object>} Dokter yang dihapus
 */
export const deleteDoctor = async (doctor_id) => {
  return await prisma.doctors.delete({
    where: { doctor_id },
  });
};

/**
 * Cari dokter berdasarkan nama
 * @param {string} full_name - Nama dokter
 * @returns {Promise<Array>} Array dokter yang cocok
 */
export const searchDoctorByName = async (full_name) => {
  return await prisma.doctors.findMany({
    where: {
      full_name: {
        contains: full_name,
        mode: "insensitive",
      },
    },
    include: {
      provider: true,
    },
  });
};

/**
 * Cari dokter berdasarkan spesialisasi
 * @param {string} specialty - Spesialisasi dokter
 * @returns {Promise<Array>} Array dokter dengan spesialisasi tertentu
 */
export const searchDoctorBySpecialty = async (specialty) => {
  return await prisma.doctors.findMany({
    where: {
      specialty: {
        contains: specialty,
        mode: "insensitive",
      },
    },
    include: {
      provider: true,
    },
  });
};
