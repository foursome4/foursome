import { Router } from "express";
import { listAccountsController } from "../../Modules/Accounts/useCases/listAccounts";
import { createAccountController } from '../../Modules/Accounts/useCases/createAccount/index'
import { updateAccountController } from "../../Modules/Accounts/useCases/updateAccount";
import { listAccountsUnicController } from "../../Modules/Accounts/useCases/listAccountsUnic";
import { deleteAccountsController } from "../../Modules/Accounts/useCases/deleteAccount";
import { listAccountsEmailController } from "../../Modules/Accounts/useCases/listAccountsEmail";
import { updatePasswordController } from "../../Modules/Accounts/useCases/updatePassword";
import { listAccountsLimitsController } from "../../Modules/Accounts/useCases/listAccountsLimits";



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
groupsAccounts.get("/find/:email", (req, res) => {
  return listAccountsEmailController.handle(req, res);
});


groupsAccounts.patch("/:id", (req, res) => {
  return updateAccountController.handle(req, res);
});
groupsAccounts.patch("/recover/:email", (req, res) => {
  return updatePasswordController.handle(req, res);
});
groupsAccounts.delete("/:id", (req, res) => {
  return deleteAccountsController.handle(req, res);
});

export { groupsAccounts };
