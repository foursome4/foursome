import { Router } from "express";
import { createNotificationsController } from "../../Modules/RealTime/useCases/createNotifications";
import { deleteNotificationsController } from "../../Modules/RealTime/useCases/deleteNotifications";
import { listNotifications2Controller } from "../../Modules/RealTime/useCases/listNotifications";
import { listNotificationsAllController } from "../../Modules/RealTime/useCases/listNotificationsAll";
import { listNotificationsController } from "../../Modules/RealTime/useCases/listUsersNotifications";




const notificationsRoutes = Router();

notificationsRoutes.post("/", (req, res) => {
  return createNotificationsController.handle(req, res);
});

notificationsRoutes.get("/", (req, res) => {
  return listNotificationsAllController.handle(req, res);
});
notificationsRoutes.get("/all", (req, res) => {
  return listNotifications2Controller.handle(req, res);
});
notificationsRoutes.get("/my/:idPatrono", (req, res) => {
  return listNotificationsController.handle(req, res);
});
notificationsRoutes.delete("/:id", (req, res) => {
  return deleteNotificationsController.handle(req, res);
});


export { notificationsRoutes };