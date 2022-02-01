import { Router } from "express";
import { createReactionsController } from "../../Modules/Posts/useCases/createReactions";
import { listReactionsController } from "../../Modules/Posts/useCases/listReaction";



const reactionsRoutes = Router();

reactionsRoutes.post("/", (req, res) => {
  return createReactionsController.handle(req, res);
});

reactionsRoutes.get("/:idPost", (req, res) => {
  return listReactionsController.handle(req, res);
});


export { reactionsRoutes };
