import { Router } from "express";
import { createDateReadController } from "../../Modules/RealTime/useCases/createDateRead";
import { listDateReadController } from "../../Modules/RealTime/useCases/listDateRead";
import { updateDateReadController } from "../../Modules/RealTime/useCases/updateDateRead";




const dateReadRoutes = Router();

dateReadRoutes.post("/", (req, res) => {
  return createDateReadController.handle(req, res);
});

dateReadRoutes.get("/:idAccount", (req, res) => {
  return listDateReadController.handle(req, res);
});
dateReadRoutes.patch("/:id", (req, res) => {
  return updateDateReadController.handle(req, res);
});


export { dateReadRoutes };