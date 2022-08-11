import { Router } from "express";
import { createPeriodTestController } from "../../Modules/Accounts/useCases/createPeriodTest";
import { listPeriodTestController } from "../../Modules/Accounts/useCases/listPeriodTest";



const periodTestRoutes = Router();

periodTestRoutes.post("/", (req, res) => {
  return createPeriodTestController.handle(req, res);
});

periodTestRoutes.get("/:idAccount", (req, res) => {
  return listPeriodTestController.handle(req, res);
});



export { periodTestRoutes };
