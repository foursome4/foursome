import { Router } from "express";
import { createUsersOnlineController } from "../../Modules/RealTime/useCases/createUsersOnline";
import { deleteUsersOnlineController } from "../../Modules/RealTime/useCases/deleteUsersOnline";
import { listUsersOnlineController } from "../../Modules/RealTime/useCases/listUsersOnline";
import { listUsersOnlineDistanceController } from "../../Modules/RealTime/useCases/listUsersOnlineDistance";
import { listUsersOnlineOneController } from "../../Modules/RealTime/useCases/listUsersOnlineOne";
import { updateUsersOnlineController } from "../../Modules/RealTime/useCases/updateUsersOnline";




const usersOlineRoutes = Router();

usersOlineRoutes.post("/", (req, res) => {
  return createUsersOnlineController.handle(req, res);
});

usersOlineRoutes.get("/", (req, res) => {
  return listUsersOnlineController.handle(req, res);
});
usersOlineRoutes.get("/distance/:latitude/:longitude", (req, res) => {
  return listUsersOnlineDistanceController.handle(req, res);
});
usersOlineRoutes.get("/one/:idAccount", (req, res) => {
  return listUsersOnlineOneController.handle(req, res);
});
usersOlineRoutes.delete("/:idAccount", (req, res) => {
  return deleteUsersOnlineController.handle(req, res);
});
usersOlineRoutes.patch("/:id", (req, res) => {
  return updateUsersOnlineController.handle(req, res);
});


export { usersOlineRoutes };
