import { Router } from "express";
import { createInformationsController } from "../../Modules/Accounts/useCases/createInformations";

const groupsInformations = Router();

groupsInformations.post("/", (req, res) => {
  return createInformationsController.handle(req, res);
});

export { groupsInformations };
