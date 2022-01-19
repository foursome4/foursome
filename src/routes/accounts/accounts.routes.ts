import { Router } from "express";
import { createAccountController } from "../../Modules/Accounts/useCases/createAccount";
import { listAccountsController } from "../../Modules/Accounts/useCases/listAccounts";
import { updateInformationsController } from "../../Modules/Accounts/useCases/updateInformations";

import { listGroupController } from "../../Modules/Groups/useCases/listGroup";



const groupsAccounts = Router();

groupsAccounts.post("/", (req, res) => {
  return createAccountController.handle(req, res);
});

groupsAccounts.patch("/", (req, res) => {
  return updateInformationsController.handle(req, res)
})
groupsAccounts.get("/", (req, res) => {
  return listAccountsController.handle(req, res);
});

export { groupsAccounts };
