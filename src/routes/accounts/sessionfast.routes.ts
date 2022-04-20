import { Router } from "express";
import { authenticateIdController } from "../../Modules/Accounts/useCases/authenticateId";



const sessionAccounts = Router();

sessionAccounts.post("/", (req, res) => {
  return authenticateIdController.handle(req, res)
});



export { sessionAccounts };
