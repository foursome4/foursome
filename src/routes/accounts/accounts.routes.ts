import { Router } from "express";
import { listAccountsController } from "../../Modules/Accounts/useCases/listAccounts";

import { createAccountController } from '../../Modules/Accounts/useCases/createAccount/index'
import { updateAccountController } from "../../Modules/Accounts/useCases/updateAccount";
import { listAccountsUnicController } from "../../Modules/Accounts/useCases/listAccountsUnic";



const groupsAccounts = Router();

groupsAccounts.post("/", (req, res) => {
  return createAccountController.handle(req, res);
});

groupsAccounts.get("/", (req, res) => {
  return listAccountsController.handle(req, res);
});

groupsAccounts.get("/:id", (req, res) => {
  return listAccountsUnicController.handle(req, res);
});


groupsAccounts.patch("/:id", (req, res) => {
  return updateAccountController.handle(req, res);
});

export { groupsAccounts };
