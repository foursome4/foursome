import { Router } from "express";
import { createDateReadFeedController } from "../../Modules/RealTime/useCases/createDateReadFeed";
import { listDateReadFeedController } from "../../Modules/RealTime/useCases/listDateReadFeed";
import { updateDateReadFeedController } from "../../Modules/RealTime/useCases/updateDateReadFeed";


const dateReadFeedRoutes = Router();

dateReadFeedRoutes.post("/", (req, res) => {
  return createDateReadFeedController.handle(req, res);
});

dateReadFeedRoutes.get("/:idAccount", (req, res) => {
  return listDateReadFeedController.handle(req, res);
});

dateReadFeedRoutes.patch("/:id", (req, res) => {
  return updateDateReadFeedController.handle(req, res);
});


export { dateReadFeedRoutes };