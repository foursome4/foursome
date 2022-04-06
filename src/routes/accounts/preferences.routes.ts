import { Router } from "express";
import { createPreferencesController } from "../../Modules/Accounts/useCases/createPreferences";
import { deletePreferencesController } from "../../Modules/Accounts/useCases/deletePreferences";
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
preferencesRoutes.delete("/:idAccount", (req, res) => {
  return deletePreferencesController.handle(req, res);
});

export { preferencesRoutes };


