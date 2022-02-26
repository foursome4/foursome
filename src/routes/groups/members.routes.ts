import { Router } from "express";
import { createMembersController } from "../../Modules/Groups/useCases/createMembers";
import { listMembersController } from "../../Modules/Groups/useCases/listMembers";
import { listMembersGroupController } from "../../Modules/Groups/useCases/listMembersGroups";



const membersRoutes = Router();

membersRoutes.post("/", (req, res) => {
  return createMembersController.handle(req, res);
});

membersRoutes.get("/", (req, res) => {
  return listMembersController.handle(req, res);
});

membersRoutes.get("/:idGroup", (req, res) => {
  return listMembersGroupController.handle(req, res);
});

export { membersRoutes };
