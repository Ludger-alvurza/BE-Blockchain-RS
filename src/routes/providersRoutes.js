import express from "express";
import * as providerController from "../controllers/providersController.js";

const router = express.Router();

// CRUD routes
router.get("/", providerController.getProviders);
router.get("/:provider_id", providerController.getProviderById);
router.post("/", providerController.createProvider);
router.put("/:provider_id", providerController.updateProvider);
router.delete("/:provider_id", providerController.deleteProvider);

export default router;
