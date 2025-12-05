import * as providerService from "../services/providersService.js";

/**
 * Get semua provider
 */
export const getProviders = async (req, res) => {
  try {
    const providers = await providerService.getAllProviders();
    res.json({
      success: true,
      data: providers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Get provider by ID
 */
export const getProviderById = async (req, res) => {
  const { provider_id } = req.params;
  try {
    const provider = await providerService.getProviderById(provider_id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: "Provider not found",
      });
    }
    res.json({
      success: true,
      data: provider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Create provider baru
 */
export const createProvider = async (req, res) => {
  const { name, address, contact_phone, type, license_number, metadata } =
    req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      error: "name is required",
    });
  }

  try {
    const newProvider = await providerService.createProvider({
      name,
      address,
      contact_phone,
      type,
      license_number,
      metadata,
    });
    res.status(201).json({
      success: true,
      data: newProvider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Update provider
 */
export const updateProvider = async (req, res) => {
  const { provider_id } = req.params;
  const { name, address, contact_phone, type, license_number, metadata } =
    req.body;

  try {
    const provider = await providerService.getProviderById(provider_id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: "Provider not found",
      });
    }

    const updatedProvider = await providerService.updateProvider(provider_id, {
      name,
      address,
      contact_phone,
      type,
      license_number,
      metadata,
    });

    res.json({
      success: true,
      data: updatedProvider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Delete provider
 */
export const deleteProvider = async (req, res) => {
  const { provider_id } = req.params;

  try {
    const provider = await providerService.getProviderById(provider_id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: "Provider not found",
      });
    }

    await providerService.deleteProvider(provider_id);
    res.json({
      success: true,
      message: "Provider deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
