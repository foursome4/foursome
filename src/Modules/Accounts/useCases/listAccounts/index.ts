import { AccountsRepository } from "../../../Accounts/repositories/implementations/AccountsRepository";
import { ListAccountsUseCase } from "./ListAccountsUseCase";
import { ListAccountsController } from "./ListGroupAccounts";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsUsecase = new ListAccountsUseCase(accountsRepository);

const listAccountsController = new ListAccountsController(listAccountsUsecase);

export { listAccountsController };
