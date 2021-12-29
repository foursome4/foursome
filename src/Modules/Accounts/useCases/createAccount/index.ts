import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { CreateAccountController } from "./CreateAccountController";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();

const createAccountUseCase = new CreateAccountUseCase(accountsRepository);

const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountController };
