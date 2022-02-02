import { Router } from "express";
import { createCharacteristicsController } from "../../Modules/Accounts/useCases/createCharacteristics";
import { listCharacteristicsController } from "../../Modules/Accounts/useCases/listCharacteristics";

const groupsCharacteristics = Router();

groupsCharacteristics.post("/", (req, res) => {
  return createCharacteristicsController.handle(req, res);
});

groupsCharacteristics.get("/:idAccount", (req, res) => {
  return listCharacteristicsController.handle(req, res);
});

export { groupsCharacteristics };


