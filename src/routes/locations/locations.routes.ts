import { Router } from "express";
import { createLocationsController } from "../../Modules/Locations/useCases/createLocations";
import { listLocationsUnicController } from "../../Modules/Locations/useCases/listEventsLocations";
import { listLocationsController } from "../../Modules/Locations/useCases/listLocations";
import { listLocationsUserController } from "../../Modules/Locations/useCases/listLocationsUser";





const locationsRoutes = Router();

locationsRoutes.post("/", (req, res) => {
  return createLocationsController.handle(req, res);
});

locationsRoutes.get("/", (req, res) => {
  return listLocationsController.handle(req, res);
});

locationsRoutes.get("/:id", (req, res) => {
  return listLocationsUnicController.handle(req, res);
});

locationsRoutes.get("/account/:idAccount", (req, res) => {
  return listLocationsUserController.handle(req, res);
});


export { locationsRoutes };
