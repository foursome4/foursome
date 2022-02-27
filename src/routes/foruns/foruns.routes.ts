import { Router } from "express";
import { createForunsController } from "../../Modules/Foruns/useCases/createForuns";
import { listForunsController } from "../../Modules/Foruns/useCases/listForuns";
import { listForunsUnicController } from "../../Modules/Foruns/useCases/listForunsUnic";
import { listForunsUserController } from "../../Modules/Foruns/useCases/listForunsUser";




const forunsRoutes = Router();

forunsRoutes.post("/", (req, res) => {
  return createForunsController.handle(req, res);
});

forunsRoutes.get("/", (req, res) => {
  return listForunsController.handle(req, res);
});
forunsRoutes.get("/:id", (req, res) => {
  return listForunsUnicController.handle(req, res);
});
forunsRoutes.get("/account/:idAccount", (req, res) => {
  return listForunsUserController.handle(req, res);
});


export { forunsRoutes };
