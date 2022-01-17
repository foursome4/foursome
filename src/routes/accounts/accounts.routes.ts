import { Router } from "express";
import { createAccountController } from "../../Modules/Accounts/useCases/createAccount";
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
  return listGroupController.handle(req, res);
});

export { groupsAccounts };
