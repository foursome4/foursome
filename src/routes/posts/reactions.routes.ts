import { Router } from "express";
import { createReactionsController } from "../../Modules/Posts/useCases/createReactions";
import { deleteReactionsController } from "../../Modules/Posts/useCases/deleteReactions";
import { listReactionsController } from "../../Modules/Posts/useCases/listReaction";



const reactionsRoutes = Router();

reactionsRoutes.post("/", (req, res) => {
  return createReactionsController.handle(req, res);
});

reactionsRoutes.get("/:idPost", (req, res) => {
  return listReactionsController.handle(req, res);
});
reactionsRoutes.delete("/:id", (req, res) => {
  return deleteReactionsController.handle(req, res);
});


export { reactionsRoutes };
