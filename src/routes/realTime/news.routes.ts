import { Router } from "express";
import { createNewsController } from "../../Modules/RealTime/useCases/createNews";
import { deleteNewsController } from "../../Modules/RealTime/useCases/deleteNews";
import { listNewsController } from "../../Modules/RealTime/useCases/listNews";

const newsRoutes = Router();

newsRoutes.post("/", (req, res) => {
  return createNewsController.handle(req, res);
});
newsRoutes.delete("/:id", (req, res) => {
  return deleteNewsController.handle(req, res);
});

newsRoutes.get("/", (req, res) => {
  return listNewsController.handle(req, res);
});


export { newsRoutes };
