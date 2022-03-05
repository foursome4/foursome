import { Router } from "express";
import { createUsersOnlineController } from "../../Modules/RealTime/useCases/createUsersOnline";
import { deleteUsersOnlineController } from "../../Modules/RealTime/useCases/deleteUsersOnline";
import { listUsersOnlineController } from "../../Modules/RealTime/useCases/listUsersOnline";




const usersOlineRoutes = Router();

usersOlineRoutes.post("/", (req, res) => {
  return createUsersOnlineController.handle(req, res);
});

usersOlineRoutes.get("/", (req, res) => {
  return listUsersOnlineController.handle(req, res);
});
usersOlineRoutes.get("/:idAccount", (req, res) => {
  return listUsersOnlineController.handle(req, res);
});
usersOlineRoutes.delete("/:idAccount", (req, res) => {
  return deleteUsersOnlineController.handle(req, res);
});


export { usersOlineRoutes };
