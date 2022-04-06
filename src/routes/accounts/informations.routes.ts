import { Router } from "express";
import { createInformationsController } from "../../Modules/Accounts/useCases/createInformations";
import { deleteInformationsController } from "../../Modules/Accounts/useCases/deleteInformations";
import { listInformationsController } from "../../Modules/Accounts/useCases/listInformations";
import { listInformationsAllController } from "../../Modules/Accounts/useCases/listInformationsAll";
import { updateInformationsController } from "../../Modules/Accounts/useCases/updateInformations";

const informationsRoutes = Router();

informationsRoutes.post("/", (req, res) => {
  return createInformationsController.handle(req, res);
});
informationsRoutes.get("/", (req, res) => {
  return listInformationsAllController.handle(req, res);
});

informationsRoutes.get("/:idAccount", (req, res) => {
    return listInformationsController.handle(req, res);
  });
informationsRoutes.patch("/:id", (req, res) => {
    return updateInformationsController.handle(req, res);
  });
informationsRoutes.delete("/:idAccount", (req, res) => {
    return deleteInformationsController.handle(req, res);
  });

export { informationsRoutes };
