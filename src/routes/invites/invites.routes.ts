import { Router } from "express";
import { createInvitesController } from "../../Modules/Invite/useCases/createInvite";
import { findInvitesController } from "../../Modules/Invite/useCases/findInvites";
import { listInvitesController } from "../../Modules/Invite/useCases/ListInvites";



const groupsInvites = Router();

groupsInvites.post("/", (req, res) => {
  return createInvitesController.handle(req, res);
});
groupsInvites.get("/find/:email/:code", (req, res) => {
  return findInvitesController.handle(req, res);
});
groupsInvites.get("/:idAccount", (req, res) => {
  return listInvitesController.handle(req, res);
});

export { groupsInvites };
