import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsDistanceUseCase } from "./ListAccountsDistanceUseCase";
import { ListAccountsDistanceController } from "./ListAccountsDistanceController";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsDistanceUsecase = new ListAccountsDistanceUseCase(accountsRepository);

const listAccountsDistanceController = new ListAccountsDistanceController(listAccountsDistanceUsecase);

export { listAccountsDistanceController };
