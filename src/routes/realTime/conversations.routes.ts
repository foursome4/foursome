import { Router } from "express";
import { createConversationsController } from "../../Modules/RealTime/useCases/createConversations";
import { deleteConversationsController } from "../../Modules/RealTime/useCases/deleteConversations";
import { listConversationsController } from "../../Modules/RealTime/useCases/listConversations";
import { listMyConversationsController } from "../../Modules/RealTime/useCases/listMyConversations";
import { listMyConversations2Controller } from "../../Modules/RealTime/useCases/listMyConversations2";

const cnversationsRoutes = Router();

cnversationsRoutes.post("/", (req, res) => {
  return createConversationsController.handle(req, res);
});
cnversationsRoutes.delete("/:id", (req, res) => {
  return deleteConversationsController.handle(req, res);
});

cnversationsRoutes.get("/:idAccount/:idFriend", (req, res) => {
  return listConversationsController.handle(req, res);
});
cnversationsRoutes.get("/account/filter/:idAccount", (req, res) => {
  return listMyConversationsController.handle(req, res);
});
cnversationsRoutes.get("/friend/filter/:idFriend", (req, res) => {
  return listMyConversations2Controller.handle(req, res);
});


export { cnversationsRoutes };
