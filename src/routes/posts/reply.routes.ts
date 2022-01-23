import { Router } from "express";
import { createReplyController } from "../../Modules/Posts/useCases/createReply";



const replyRoutes = Router();

replyRoutes.post("/", (req, res) => {
  return createReplyController.handle(req, res);
});


export { replyRoutes };
