import { Router } from "express";
import { createReplyController } from "../../Modules/Posts/useCases/createReply";
import { deleteReplyController } from "../../Modules/Posts/useCases/deleteReply";
import { listReplyController } from "../../Modules/Posts/useCases/listReply";
import { updateReplyController } from "../../Modules/Posts/useCases/updateReply";



const replyRoutes = Router();

replyRoutes.post("/", (req, res) => {
  return createReplyController.handle(req, res);
});

replyRoutes.delete("/:id", (req, res) => {
  return deleteReplyController.handle(req, res);
});

replyRoutes.get("/:idComment", (req, res) => {
  return listReplyController.handle(req, res);
});

replyRoutes.patch("/:id", (req, res) => {
  return updateReplyController.handle(req, res);
})

export { replyRoutes };
