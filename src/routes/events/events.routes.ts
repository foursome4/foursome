import { Router } from "express";
import { createEventsController } from "../../Modules/Events/useCases/createGroup";
import { listEventsController } from "../../Modules/Events/useCases/listEvents";
import { listEventsUnicController } from "../../Modules/Events/useCases/listEventsUnic";
import { listEventsUserController } from "../../Modules/Events/useCases/listEventsUser";




const eventsRoutes = Router();

eventsRoutes.post("/", (req, res) => {
  return createEventsController.handle(req, res);
});

eventsRoutes.get("/", (req, res) => {
  return listEventsController.handle(req, res);
});

eventsRoutes.get("/:id", (req, res) => {
  return listEventsUnicController.handle(req, res);
});

eventsRoutes.get("/account/:idAccount", (req, res) => {
  return listEventsUserController.handle(req, res);
});


export { eventsRoutes };
