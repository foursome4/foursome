import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsStatusUseCase } from "./ListAccountsStatusUseCase";
import { ListAccountsStatusController } from "./ListAccountsStatusController";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsStatusUsecase = new ListAccountsStatusUseCase(accountsRepository);

const listAccountsStatusController = new ListAccountsStatusController(listAccountsStatusUsecase);

export { listAccountsStatusController };
