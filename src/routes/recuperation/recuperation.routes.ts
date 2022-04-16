import { Router } from "express";
import { createRecuperationController } from "../../Modules/Recuperation/useCases/createRecuperation";
import { deleteRecuperationController } from "../../Modules/Recuperation/useCases/deleteRecuperation";
import { findRecuperationController } from "../../Modules/Recuperation/useCases/findRecuperation";
import { listRecuperationController } from "../../Modules/Recuperation/useCases/ListRecuperation";
import { listRecuperationAllController } from "../../Modules/Recuperation/useCases/ListRecuperationAll";



const groupsRecuperation = Router();

groupsRecuperation.post("/", (req, res) => {
  return createRecuperationController.handle(req, res);
});
groupsRecuperation.get("/find/:email/:code", (req, res) => {
  return findRecuperationController.handle(req, res);
});
groupsRecuperation.get("/:email", (req, res) => {
  return listRecuperationController.handle(req, res);
});
groupsRecuperation.get("/", (req, res) => {
  return listRecuperationAllController.handle(req, res);
});
groupsRecuperation.delete("/:id", (req, res) => {
  return deleteRecuperationController.handle(req, res);
});

//Recuperação de senha

export { groupsRecuperation };
