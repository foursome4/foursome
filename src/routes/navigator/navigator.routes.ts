import { Router } from "express";
import { createNavigateUserController } from "../../Modules/NavigateUser/useCases/createNavigate";
import { listNavigateUserController } from "../../Modules/NavigateUser/useCases/listNavigate";
import { listNavigateUserUnicController } from "../../Modules/NavigateUser/useCases/listNavigateUnic";



const navogatorRoutes = Router();

navogatorRoutes.post("/", (req, res) => {
  return createNavigateUserController.handle(req, res);
});

navogatorRoutes.get("/", (req, res) => {
  return listNavigateUserController.handle(req, res);
})

navogatorRoutes.get("/filter/:idAccount", (req, res) => {
  return listNavigateUserUnicController.handle(req, res);
});


export { navogatorRoutes };
