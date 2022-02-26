import { Router } from "express";
import { createGroupController } from "../../Modules/Groups/useCases/createGroup";
import { listGroupController } from "../../Modules/Groups/useCases/listGroup";
import { listGroupUnicController } from "../../Modules/Groups/useCases/listGroupUnic";



const groupsRoutes = Router();

groupsRoutes.post("/", (req, res) => {
  return createGroupController.handle(req, res);
});

groupsRoutes.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

groupsRoutes.get("/:id", (req, res) => {
  return listGroupUnicController.handle(req, res);
});



export { groupsRoutes };
