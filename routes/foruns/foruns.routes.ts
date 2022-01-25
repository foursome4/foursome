import { Router } from "express";
import { createForunsController } from "../../Modules/Foruns/useCases/createForuns";
import { listForunsController } from "../../Modules/Foruns/useCases/listForuns";




const forunsRoutes = Router();

forunsRoutes.post("/", (req, res) => {
  return createForunsController.handle(req, res);
});

forunsRoutes.get("/", (req, res) => {
  return listForunsController.handle(req, res);
});


export { forunsRoutes };
