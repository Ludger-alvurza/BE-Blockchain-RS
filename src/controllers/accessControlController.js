// src/controllers/accessControlController.js
import * as accessControlService from "../services/accessControlService.js";

export const getAccessControls = async (req, res) => {
  try {
    const accessControls = await accessControlService.getAllAccessControls();
    res.json(accessControls);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAccessControlById = async (req, res) => {
  const { ac_id } = req.params;
  try {
    const accessControl = await accessControlService.getAccessControlById(
      ac_id
    );
    if (!accessControl) {
      return res.status(404).json({ error: "Access control not found" });
    }

    // FIX: Normalize scope structure
    if (accessControl.scope) {
      accessControl.scope = {
        read: accessControl.scope.read ?? false,
        write: accessControl.scope.write ?? false,
        delete: accessControl.scope.delete ?? false,
        fields: Array.isArray(accessControl.scope.fields)
          ? accessControl.scope.fields
          : [],
      };
    }

    res.json(accessControl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccessControlsByPatientId = async (req, res) => {
  const { patient_id } = req.params;
  try {
    const accessControls =
      await accessControlService.getAccessControlsByPatientId(patient_id);
    res.json(accessControls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccessControlsByGrantedTo = async (req, res) => {
  const { user_id } = req.params;
  try {
    const accessControls =
      await accessControlService.getAccessControlsByGrantedTo(user_id);
    res.json(accessControls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActiveAccessControls = async (req, res) => {
  try {
    const accessControls = await accessControlService.getActiveAccessControls();
    res.json(accessControls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAccessControl = async (req, res) => {
  try {
    const {
      patient_id,
      granted_to,
      granted_by,
      scope,
      valid_from,
      valid_to,
      on_chain_tx,
    } = req.body;

    // Validasi required fields
    if (!patient_id || !granted_to || !granted_by) {
      return res.status(400).json({
        error: "Missing required fields: patient_id, granted_to, granted_by",
      });
    }

    // Validasi valid_to harus setelah valid_from
    if (valid_to && valid_from) {
      const validFromDate = new Date(valid_from);
      const validToDate = new Date(valid_to);
      if (validToDate <= validFromDate) {
        return res.status(400).json({
          error: "valid_to must be after valid_from",
        });
      }
    }

    const newAccessControl = await accessControlService.createAccessControl({
      patient_id,
      granted_to,
      granted_by,
      scope,
      valid_from,
      valid_to,
      on_chain_tx,
    });

    res.status(201).json(newAccessControl);
  } catch (error) {
    // Check if it's an AppError (punya statusCode property)
    if (error && error.statusCode) {
      return res.status(error.statusCode).json({
        error: error.message,
      });
    }

    // Fallback ke 500 jika error yang unexpected
    return res.status(500).json({
      error: "Gagal membuat access control",
    });
  }
};

export const updateAccessControl = async (req, res) => {
  const { ac_id } = req.params;
  try {
    const {
      patient_id,
      granted_to,
      granted_by,
      scope,
      valid_from,
      valid_to,
      on_chain_tx,
    } = req.body;

    // Validasi valid_to harus setelah valid_from (kalau keduanya ada)
    if (valid_to && valid_from) {
      const validFromDate = new Date(valid_from);
      const validToDate = new Date(valid_to);
      if (validToDate <= validFromDate) {
        return res.status(400).json({
          error: "valid_to must be after valid_from",
        });
      }
    }

    const updatedAccessControl = await accessControlService.updateAccessControl(
      ac_id,
      {
        patient_id,
        granted_to,
        granted_by,
        scope,
        valid_from,
        valid_to,
        on_chain_tx,
      }
    );

    res.json(updatedAccessControl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccessControl = async (req, res) => {
  const { ac_id } = req.params;
  try {
    const deletedAccessControl = await accessControlService.deleteAccessControl(
      ac_id
    );
    res.json({
      message: "Access control berhasil dihapus",
      data: deletedAccessControl,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const revokeAccessControl = async (req, res) => {
  const { ac_id } = req.params;
  try {
    const revokedAccessControl = await accessControlService.revokeAccessControl(
      ac_id
    );
    res.json({
      message: "Access control berhasil di-revoke",
      data: revokedAccessControl,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkAccess = async (req, res) => {
  const { patient_id, user_id } = req.params;
  try {
    const hasAccess = await accessControlService.checkAccess(
      patient_id,
      user_id
    );
    res.json({ hasAccess });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
