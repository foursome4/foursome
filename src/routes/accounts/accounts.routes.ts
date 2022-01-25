import { Router } from "express";
import { createAccountController } from "../../Modules/Accounts/useCases/createAccount";
import { listAccountsController } from "../../Modules/Accounts/useCases/listAccounts";



const groupsAccounts = Router();

groupsAccounts.post("/", (req, res) => {
  return createAccountController.handle(req, res);
});

groupsAccounts.get("/", (req, res) => {
  return listAccountsController.handle(req, res);
});

export { groupsAccounts };
