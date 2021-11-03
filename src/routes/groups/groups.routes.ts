import { Router } from "express";

import { createGroupController } from "../../Modules/Moderators/useCases/createGroup";
import { listGroupController } from "../../Modules/Moderators/useCases/listGroup";

const groupsRoutes = Router();

groupsRoutes.post("/", (req, res) => {
  return createGroupController.handle(req, res);
});

groupsRoutes.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

export { groupsRoutes };
