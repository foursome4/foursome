import { Router } from "express";
import { createMembersController } from "../../Modules/Events/useCases/createMembers";
import { listMembersEventController } from "../../Modules/Events/useCases/listMembersEvent";




const membersRoutes = Router();

membersRoutes.post("/", (req, res) => {
  return createMembersController.handle(req, res);
});

membersRoutes.get("/", (req, res) => {
  return listMembersEventController.handle(req, res);
});

membersRoutes.get("/:idEvent", (req, res) => {
  return listMembersEventController.handle(req, res);
});

export { membersRoutes };
