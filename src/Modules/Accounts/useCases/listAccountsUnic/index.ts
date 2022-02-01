import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsUnicUseCase } from "./ListAccountsUnicUseCase";
import { ListAccountsUnicController } from "./ListAccountsUnicController";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsUnicUsecase = new ListAccountsUnicUseCase(accountsRepository);

const listAccountsUnicController = new ListAccountsUnicController(listAccountsUnicUsecase);

export { listAccountsUnicController };
