import { Router } from "express";
import { createReactionsController } from "../../Modules/Posts/useCases/createReactions";



const reactionsRoutes = Router();

reactionsRoutes.post("/", (req, res) => {
  return createReactionsController.handle(req, res);
});


export { reactionsRoutes };
