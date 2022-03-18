import { Router } from "express";
import { createVisitsController } from "../../Modules/Accounts/useCases/createVisits";
import { listVisitsController } from "../../Modules/Accounts/useCases/listVisits";



const visitsRoutes = Router();

visitsRoutes.post("/", (req, res) => {
  return createVisitsController.handle(req, res);
});

visitsRoutes.get("/:idFriend", (req, res) => {
  return listVisitsController.handle(req, res);
});



export { visitsRoutes };
