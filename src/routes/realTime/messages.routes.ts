import { Router } from "express";
import { createMessagesController } from "../../Modules/RealTime/useCases/createMessages";
import { deleteMessagesController } from "../../Modules/RealTime/useCases/deleteMessages";
import { listMessagesController } from "../../Modules/RealTime/useCases/listMessages";

const messagesRoutes = Router();

messagesRoutes.post("/", (req, res) => {
  return createMessagesController.handle(req, res);
});

messagesRoutes.delete("/:id", (req, res) => {
  return deleteMessagesController.handle(req, res);
});

messagesRoutes.get("/:idRoom", (req, res) => {
  return listMessagesController.handle(req, res);
});







export { messagesRoutes };
