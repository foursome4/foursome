import { Router } from "express";
import { createInvitesController } from "../../Modules/Invite/useCases/createInvite";
import { deleteInvitesController } from "../../Modules/Invite/useCases/deleteInvites";
import { findInvitesController } from "../../Modules/Invite/useCases/findInvites";
import { listInvitesController } from "../../Modules/Invite/useCases/ListInvites";
import { listInvitesAllController } from "../../Modules/Invite/useCases/ListInvitesAll";



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
groupsInvites.get("/", (req, res) => {
  return listInvitesAllController.handle(req, res);
});
groupsInvites.delete("/:id", (req, res) => {
  return deleteInvitesController.handle(req, res);
});

export { groupsInvites };
