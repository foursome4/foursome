import { Router } from "express";
import { authenticateAccountController } from "../../Modules/Accounts/useCases/authenticateAccount";



const sessionAccounts = Router();

sessionAccounts.post("/", (req, res) => {
  return authenticateAccountController.handle(req, res)
});



export { sessionAccounts };
