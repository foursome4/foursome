import { Router } from "express";
import { createCommentsController } from "../../Modules/Posts/useCases/createComments";
import { deleteCommentsController } from "../../Modules/Posts/useCases/deleteComments";
import { listCommentsController } from "../../Modules/Posts/useCases/listComments";
import { updateCommentsController } from "../../Modules/Posts/useCases/updateComments";



const commentsRoutes = Router();

commentsRoutes.post("/", (req, res) => {
  return createCommentsController.handle(req, res);
});
commentsRoutes.delete("/:id", (req, res) => {
  return deleteCommentsController.handle(req, res);
});

commentsRoutes.get("/:idPost", (req, res) => {
  return listCommentsController.handle(req, res);
});

commentsRoutes.patch("/:id", (req, res) => {
  return updateCommentsController.handle(req, res);
})


export { commentsRoutes };
