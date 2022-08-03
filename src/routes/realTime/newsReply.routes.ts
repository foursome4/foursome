import { Router } from "express";
import { createNewsReplyController } from "../../Modules/RealTime/useCases/createNewsReply";
import { deleteNewsReplyController } from "../../Modules/RealTime/useCases/deleteNewsReply";
import { listNewsReplyController } from "../../Modules/RealTime/useCases/listNewsReply";

const newsReplyRoutes = Router();

newsReplyRoutes.post("/", (req, res) => {
  return createNewsReplyController.handle(req, res);
});
newsReplyRoutes.get("/:idNews", (req, res) => {
  return listNewsReplyController.handle(req, res);
});
newsReplyRoutes.delete("/:id", (req, res) => {
  return deleteNewsReplyController.handle(req, res);
});



export { newsReplyRoutes };
