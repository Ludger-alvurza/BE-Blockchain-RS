import { prisma } from "./prismaService.js";

/**
 * Ambil semua provider dari database
 * @returns {Promise<Array>} Array provider
 */
export const getAllProviders = async () => {
  return await prisma.providers.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

/**
 * Ambil provider berdasarkan provider_id
 * @param {string} provider_id
 * @returns {Promise<Object|null>} Provider atau null kalau nggak ada
 */
export const getProviderById = async (provider_id) => {
  return await prisma.providers.findUnique({
    where: { provider_id },
    include: {
      doctors: true,
      visits: true,
    },
  });
};

/**
 * Buat provider baru
 * @param {Object} data
 * @param {string} data.name - Nama provider (required)
 * @param {string} data.address - Alamat (optional)
 * @param {string} data.contact_phone - Nomor telepon (optional)
 * @param {string} data.type - Tipe provider (optional)
 * @param {string} data.license_number - Nomor lisensi (optional)
 * @param {Object} data.metadata - Metadata (optional)
 * @returns {Promise<Object>} Provider yang baru dibuat
 */
export const createProvider = async (data) => {
  return await prisma.providers.create({
    data: {
      name: data.name,
      address: data.address || null,
      contact_phone: data.contact_phone || null,
      type: data.type || null,
      license_number: data.license_number || null,
      metadata: data.metadata || null,
    },
  });
};

/**
 * Update provider
 * @param {string} provider_id - ID provider
 * @param {Object} data - Data yang ingin diupdate
 * @returns {Promise<Object>} Provider yang sudah diupdate
 */
export const updateProvider = async (provider_id, data) => {
  // Filter out undefined values
  const updateData = {};
  if (data.name !== undefined) updateData.name = data.name;
  if (data.address !== undefined) updateData.address = data.address;
  if (data.contact_phone !== undefined)
    updateData.contact_phone = data.contact_phone;
  if (data.type !== undefined) updateData.type = data.type;
  if (data.license_number !== undefined)
    updateData.license_number = data.license_number;
  if (data.metadata !== undefined) updateData.metadata = data.metadata;

  return await prisma.providers.update({
    where: { provider_id },
    data: updateData,
  });
};

/**
 * Hapus provider
 * @param {string} provider_id - ID provider
 * @returns {Promise<Object>} Provider yang dihapus
 */
export const deleteProvider = async (provider_id) => {
  return await prisma.providers.delete({
    where: { provider_id },
  });
};
