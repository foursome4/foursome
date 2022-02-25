import { Router } from "express";
import { createPreferencesController } from "../../Modules/Accounts/useCases/createPreferences";
import { listPreferencesController } from "../../Modules/Accounts/useCases/listPreferences";
import { updatePreferencesController } from "../../Modules/Accounts/useCases/updatePreferences";

const preferencesRoutes = Router();

preferencesRoutes.post("/", (req, res) => {
  return createPreferencesController.handle(req, res);
});

preferencesRoutes.get("/:idAccount", (req, res) => {
  return listPreferencesController.handle(req, res);
});
preferencesRoutes.patch("/:id", (req, res) => {
  return updatePreferencesController.handle(req, res);
});

export { preferencesRoutes };


