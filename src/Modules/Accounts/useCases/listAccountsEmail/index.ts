import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsEmailUseCase } from "./ListAccountsEmailUseCase";
import { ListAccountsEmailController } from "./ListAccountsEmailController";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsEmailUsecase = new ListAccountsEmailUseCase(accountsRepository);

const listAccountsEmailController = new ListAccountsEmailController(listAccountsEmailUsecase);

export { listAccountsEmailController };
