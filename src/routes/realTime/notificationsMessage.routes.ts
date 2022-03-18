import { Router } from "express";
import { createNotificationsMessageController } from "../../Modules/RealTime/useCases/createNotificationsMessage";




const notificationsMessageRoutes = Router();

notificationsMessageRoutes.post("/", (req, res) => {
  return createNotificationsMessageController.handle(req, res);
});

// notificationsMessageRoutes.get("/", (req, res) => {
//   return listNotificationsMessageAllController.handle(req, res);
// });
// notificationsMessageRoutes.get("/my/:idAccount", (req, res) => {
//   return listNotificationsMessageController.handle(req, res);
// });



export { notificationsMessageRoutes };