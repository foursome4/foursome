import { Router } from "express";
import { createCommentsController } from "../../Modules/Posts/useCases/createComments";
import { listCommentsController } from "../../Modules/Posts/useCases/listComments";



const commentsRoutes = Router();

commentsRoutes.post("/", (req, res) => {
  return createCommentsController.handle(req, res);
});

commentsRoutes.get("/:idPost", (req, res) => {
  return listCommentsController.handle(req, res);
});


export { commentsRoutes };
