import { Router } from "express";
import { createNewsReplyController } from "../../Modules/RealTime/useCases/createNewsReply";
import { deleteNewsReplyController } from "../../Modules/RealTime/useCases/deleteNewsReply";
import { listNewsReplyController } from "../../Modules/RealTime/useCases/listNewsReply";

const newsRoutes = Router();

newsRoutes.post("/", (req, res) => {
  return createNewsReplyController.handle(req, res);
});
newsRoutes.get("/:idMews", (req, res) => {
  return listNewsReplyController.handle(req, res);
});
newsRoutes.delete("/:id", (req, res) => {
  return deleteNewsReplyController.handle(req, res);
});



export { newsRoutes };
