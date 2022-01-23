import { Router } from "express";
import { createInformationsController } from "../../Modules/Accounts/useCases/createInformations";
import { listInformationsController } from "../../Modules/Accounts/useCases/listInformations";

const informationsRoutes = Router();

informationsRoutes.post("/", (req, res) => {
  return createInformationsController.handle(req, res);
});

informationsRoutes.get("/:idAccount", (req, res) => {
    return listInformationsController.handle(req, res);
    
  });

export { informationsRoutes };
