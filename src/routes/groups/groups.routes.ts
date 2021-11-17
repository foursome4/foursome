import { Router } from "express";

import { createGroupController } from "../../Modules/Foruns/useCases/createForum";
import { listGroupController } from "../../Modules/Foruns/useCases/listGroup";

const groupsRoutes = Router();

groupsRoutes.post("/", (req, res) => {
  return createGroupController.handle(req, res);
});

groupsRoutes.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

export { groupsRoutes };
