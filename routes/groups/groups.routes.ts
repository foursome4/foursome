import { Router } from "express";
import { createGroupController } from "../../Modules/Groups/useCases/createGroup";
import { createMembersController } from "../../Modules/Groups/useCases/createMembers";
import { listGroupController } from "../../Modules/Groups/useCases/listGroup";



const groupsRoutes = Router();

groupsRoutes.post("/", (req, res) => {
  return createGroupController.handle(req, res);
});

groupsRoutes.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

groupsRoutes.post("/members", (req, res) => {
  return createMembersController.handle(req, res);
});

export { groupsRoutes };
