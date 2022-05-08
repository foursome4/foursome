import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsLimitsUseCase } from "./ListAccountsLimitsUseCase";
import { ListAccountsLimitsController } from "./ListGroupAccountsLimits";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsLimitsUsecase = new ListAccountsLimitsUseCase(accountsRepository);

const listAccountsLimitsController = new ListAccountsLimitsController(listAccountsLimitsUsecase);

export { listAccountsLimitsController };
