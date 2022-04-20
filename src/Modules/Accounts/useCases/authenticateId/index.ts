import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { AuthenticateIdController } from "./AuthenticateIdController";
import { AuthenticateIdUseCase } from "./AuthenticateIdUseCase";

const accountsRepository = AccountsRepository.getInstance();

const authenticateIdUseCase = new AuthenticateIdUseCase(accountsRepository);

const authenticateIdController = new AuthenticateIdController(authenticateIdUseCase);

export { authenticateIdController };
