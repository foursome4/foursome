import { Router } from "express";
import { listAccountsController } from "../../Modules/Accounts/useCases/listAccounts";
import { createAccountController } from '../../Modules/Accounts/useCases/createAccount/index'
import { updateAccountController } from "../../Modules/Accounts/useCases/updateAccount";
import { listAccountsUnicController } from "../../Modules/Accounts/useCases/listAccountsUnic";
import { deleteAccountsController } from "../../Modules/Accounts/useCases/deleteAccount";
import { listAccountsEmailController } from "../../Modules/Accounts/useCases/listAccountsEmail";
import { updatePasswordController } from "../../Modules/Accounts/useCases/updatePassword";
import { listAccountsLimitsController } from "../../Modules/Accounts/useCases/listAccountsLimits";
import { listAccountsPatronController } from "../../Modules/Accounts/useCases/listAccountsPatron";
import { listAccountsStatusController } from "../../Modules/Accounts/useCases/listAccountsStatus";
import { updateStatusController } from "../../Modules/Accounts/useCases/updateStatus";
import { listAccountsDistanceController } from "../../Modules/Accounts/useCases/listAccountsDistance";



const groupsAccounts = Router();

groupsAccounts.post("/", (req, res) => {
  return createAccountController.handle(req, res);
});

groupsAccounts.get("/", (req, res) => {
  return listAccountsController.handle(req, res);
})
groupsAccounts.get("/qtd", (req, res) => {
  return listAccountsLimitsController.handle(req, res);
})

groupsAccounts.get("/filter/:id", (req, res) => {
  return listAccountsUnicController.handle(req, res);
});
groupsAccounts.get("/distance/:latitude/:longitude", (req, res) => {
  return listAccountsDistanceController.handle(req, res);
});
groupsAccounts.get("/find/:email", (req, res) => {
  return listAccountsEmailController.handle(req, res);
});
groupsAccounts.get("/search/:status", (req, res) => {
  return listAccountsStatusController.handle(req, res);
});
groupsAccounts.get("/find/patron/:patron", (req, res) => {
  return listAccountsPatronController.handle(req, res);
});

groupsAccounts.patch("/:id", (req, res) => {
  return updateAccountController.handle(req, res);
});
groupsAccounts.patch("/recover/:email", (req, res) => {
  return updatePasswordController.handle(req, res);
});
groupsAccounts.patch("/updatestatus/:id", (req, res) => {
  return updateStatusController.handle(req, res);
});

groupsAccounts.delete("/:id", (req, res) => {
  return deleteAccountsController.handle(req, res);
});

export { groupsAccounts };
