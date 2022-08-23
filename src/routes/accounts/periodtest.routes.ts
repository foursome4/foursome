import { Router } from "express";
import { createPeriodTestController } from "../../Modules/Accounts/useCases/createPeriodTest";
import { deletePeriodTestController } from "../../Modules/Accounts/useCases/deletePeriodTest";
import { listPeriodTestController } from "../../Modules/Accounts/useCases/listPeriodTest";
import { updatePeriodTestController } from "../../Modules/Accounts/useCases/updatePeriodTest";



const periodTestRoutes = Router();

periodTestRoutes.post("/", (req, res) => {
  return createPeriodTestController.handle(req, res);
});

periodTestRoutes.get("/:idAccount", (req, res) => {
  return listPeriodTestController.handle(req, res);
});

periodTestRoutes.delete("/:id", (req, res) => {
  return deletePeriodTestController.handle(req, res);
});

periodTestRoutes.patch("/:id", (req, res) => {
  return updatePeriodTestController.handle(req, res);
});




export { periodTestRoutes };
