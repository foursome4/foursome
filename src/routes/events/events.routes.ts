import { Router } from "express";
import { createEventsController } from "../../Modules/Events/useCases/createGroup";
import { listEventsController } from "../../Modules/Events/useCases/listEvents";




const eventsRoutes = Router();

eventsRoutes.post("/", (req, res) => {
  return createEventsController.handle(req, res);
});

eventsRoutes.get("/", (req, res) => {
  return listEventsController.handle(req, res);
});


export { eventsRoutes };
