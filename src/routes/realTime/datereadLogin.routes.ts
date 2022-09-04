import { Router } from "express";
import { createDateReadLoginController } from "../../Modules/RealTime/useCases/createDateReadLogin";
import { listDateReadLoginController } from "../../Modules/RealTime/useCases/listDateReadLogin";
import { listDateReadLoginAllController } from "../../Modules/RealTime/useCases/listDateReadLoginAll";
import { updateDateReadLoginController } from "../../Modules/RealTime/useCases/updateDateReadLogin";


const dateReadLoginRoutes = Router();

dateReadLoginRoutes.post("/", (req, res) => {
  return createDateReadLoginController.handle(req, res);
});

dateReadLoginRoutes.get("/", (req, res) => {
  return listDateReadLoginAllController.handle(req, res);
});
dateReadLoginRoutes.get("/:idAccount", (req, res) => {
  return listDateReadLoginController.handle(req, res);
});

dateReadLoginRoutes.patch("/:id", (req, res) => {
  return updateDateReadLoginController.handle(req, res);
});


export { dateReadLoginRoutes };