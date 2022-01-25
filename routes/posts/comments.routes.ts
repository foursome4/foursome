import { Router } from "express";
import { createCommentsController } from "../../Modules/Posts/useCases/createComments";



const commentsRoutes = Router();

commentsRoutes.post("/", (req, res) => {
  return createCommentsController.handle(req, res);
});


export { commentsRoutes };
