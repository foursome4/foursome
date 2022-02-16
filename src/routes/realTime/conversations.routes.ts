import { Router } from "express";
import { createConversationsController } from "../../Modules/RealTime/useCases/createConversations";
import { deleteConversationsController } from "../../Modules/RealTime/useCases/deleteConversations";
import { listConversationsController } from "../../Modules/RealTime/useCases/listConversations";

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


export { cnversationsRoutes };
