import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { UpdateAccountController } from "./UpdateAccountController";
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();

const updateAccountUseCase = new UpdateAccountUseCase(accountsRepository);

const updateAccountController = new UpdateAccountController(updateAccountUseCase);

export { updateAccountController };
