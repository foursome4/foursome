import { Router } from "express";
import { createPreferencesController } from "../../Modules/Accounts/useCases/createPreferences";
import { listPreferencesController } from "../../Modules/Accounts/useCases/listPreferences";

const preferencesRoutes = Router();

preferencesRoutes.post("/", (req, res) => {
  return createPreferencesController.handle(req, res);
});

preferencesRoutes.get("/", (req, res) => {
  return listPreferencesController.handle(req, res);
});

export { preferencesRoutes };


