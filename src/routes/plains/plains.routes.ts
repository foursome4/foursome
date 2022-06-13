import { Router } from "express";
import { createPlainsController } from "../../Modules/Plains/useCases/createPlains";
import { deletePlainsController } from "../../Modules/Plains/useCases/deletePlains";
import { listPlainsController } from "../../Modules/Plains/useCases/listPlains";
import { updatePlainsController } from "../../Modules/Plains/useCases/updatePlains";



const plainsRoutes = Router();

plainsRoutes.post("/", (req, res) => {
  return createPlainsController.handle(req, res);
});

plainsRoutes.get("/", (req, res) => {
  return listPlainsController.handle(req, res);
});

plainsRoutes.patch("/:id", (req, res) => {
  return updatePlainsController.handle(req, res);
});
plainsRoutes.delete("/:id", (req, res) => {
  return deletePlainsController.handle(req, res);
});

export { plainsRoutes };