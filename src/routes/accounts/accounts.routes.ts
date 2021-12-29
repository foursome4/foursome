import { Router } from "express";
import { createAccountController } from "../../Modules/Accounts/useCases/createAccount";
import { listGroupController } from "../../Modules/Groups/useCases/listGroup";



const groupsAccounts = Router();

groupsAccounts.post("/", (req, res) => {
  return createAccountController.handle(req, res);
});

groupsAccounts.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

export { groupsAccounts };
