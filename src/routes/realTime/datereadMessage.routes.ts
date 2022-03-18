import { Router } from "express";
import { createDateReadMessageController } from "../../Modules/RealTime/useCases/createDateReadMessage";




const dateReadMessageRoutes = Router();

dateReadMessageRoutes.post("/", (req, res) => {
  return createDateReadMessageController.handle(req, res);
});

// dateReadMessageRoutes.get("/:idAccount", (req, res) => {
//   return listDateReadMessageController.handle(req, res);
// });
// dateReadMessageRoutes.patch("/:id", (req, res) => {
//   return updateDateReadMessageController.handle(req, res);
// });


export { dateReadMessageRoutes };