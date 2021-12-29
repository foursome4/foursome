import { Router } from "express";
import { createCharacteristicsController } from "../../Modules/Accounts/useCases/createCharacteristics";

const groupsCharacteristics = Router();

groupsCharacteristics.post("/", (req, res) => {
  return createCharacteristicsController.handle(req, res);
});

export { groupsCharacteristics };


