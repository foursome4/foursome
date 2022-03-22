import { Router } from "express";
import { createNotificationsMessageController } from "../../Modules/RealTime/useCases/createNotificationsMessage";
import { listNotificationsMessageAllController } from "../../Modules/RealTime/useCases/listNotificationsMessageAll";
import { listNotificationsMessageController } from "../../Modules/RealTime/useCases/listUsersNotificationsMessage";




const notificationsMessageRoutes = Router();

notificationsMessageRoutes.post("/", (req, res) => {
  return createNotificationsMessageController.handle(req, res);
});

notificationsMessageRoutes.get("/", (req, res) => {
  return listNotificationsMessageAllController.handle(req, res);
});

notificationsMessageRoutes.get("/my/:idFriend", (req, res) => {
  return listNotificationsMessageController.handle(req, res);
});



export { notificationsMessageRoutes };