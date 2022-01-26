import { Router } from "express";
import { createInvitesController } from "../../Modules/Invite/useCases/createInvite";



const groupsInvites = Router();

groupsInvites.post("/", (req, res) => {
  return createInvitesController.handle(req, res);
});

export { groupsInvites };
