import { Router } from "express";
import { createConversationsController } from "../../Modules/RealTime/useCases/createConversations";
import { deleteConversationsController } from "../../Modules/RealTime/useCases/deleteConversations";
import { deleteConversationsRoomController } from "../../Modules/RealTime/useCases/deleteConversationsRoom";
import { listConversationsController } from "../../Modules/RealTime/useCases/listConversations";
import { listConversationsAllController } from "../../Modules/RealTime/useCases/listConversationsAll";
import { listMyConversationsController } from "../../Modules/RealTime/useCases/listMyConversations";
import { listMyConversations2Controller } from "../../Modules/RealTime/useCases/listMyConversations2";

const cnversationsRoutes = Router();

cnversationsRoutes.post("/", (req, res) => {
  return createConversationsController.handle(req, res);
});
cnversationsRoutes.delete("/:id", (req, res) => {
  return deleteConversationsController.handle(req, res);
});

cnversationsRoutes.delete("/room/:room", (req, res) => {
  return deleteConversationsRoomController.handle(req, res);
});

cnversationsRoutes.get("/:idAccount/:idFriend", (req, res) => {
  return listConversationsController.handle(req, res);
});
cnversationsRoutes.get("/", (req, res) => {
  return listConversationsAllController.handle(req, res);
});
cnversationsRoutes.get("/account/filter/:idAccount", (req, res) => {
  return listMyConversationsController.handle(req, res);
});
cnversationsRoutes.get("/friend/filter/:idFriend", (req, res) => {
  return listMyConversations2Controller.handle(req, res);
});


export { cnversationsRoutes };
