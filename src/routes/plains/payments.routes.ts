import { Router } from "express";
import { createPaymentsController } from "../../Modules/Plains/useCases/createPayments";
import { deletePaymentsController } from "../../Modules/Plains/useCases/deletePayments";
import { listPaymentsController } from "../../Modules/Plains/useCases/listPayments";
import { listPaymentsAllController } from "../../Modules/Plains/useCases/listPaymentsAll";
import { updatePaymentsController } from "../../Modules/Plains/useCases/updatePayments";


const paymentsRoutes = Router();

paymentsRoutes.post("/", (req, res) => {
  return createPaymentsController.handle(req, res);
});

paymentsRoutes.get("/all", (req, res) => {
  return listPaymentsAllController.handle(req, res);
});

paymentsRoutes.get("/:idAccount", (req, res) => {
  return listPaymentsController.handle(req, res);
});

paymentsRoutes.patch("/:id", (req, res) => {
  return updatePaymentsController.handle(req, res);
});
paymentsRoutes.delete("/:id", (req, res) => {
  return deletePaymentsController.handle(req, res);
});

export { paymentsRoutes };


