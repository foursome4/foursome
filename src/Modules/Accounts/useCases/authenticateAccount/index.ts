import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { AuthenticateAccountController } from "./AuthenticateAccountController";
import { AuthenticateAccountUseCase } from "./AuthenticateAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();

const authenticateAccountUseCase = new AuthenticateAccountUseCase(accountsRepository);

const authenticateAccountController = new AuthenticateAccountController(authenticateAccountUseCase);

export { authenticateAccountController };
