import { Router } from "express";
import { createCharacteristicsController } from "../../Modules/Accounts/useCases/createCharacteristics";
import { listCharacteristicsController } from "../../Modules/Accounts/useCases/listCharacteristics";
import { updateCharacteristcsController } from "../../Modules/Accounts/useCases/UpdateCharacteristcs";

const groupsCharacteristics = Router();

groupsCharacteristics.post("/", (req, res) => {
  return createCharacteristicsController.handle(req, res);
});

groupsCharacteristics.get("/:idAccount", (req, res) => {
  return listCharacteristicsController.handle(req, res);
});

groupsCharacteristics.patch("/:id", (req, res) => {
  return updateCharacteristcsController.handle(req, res);
});

export { groupsCharacteristics };


