import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsPatronUseCase } from "./ListAccountsPatronUseCase";
import { ListAccountsPatronController } from "./ListAccountsPatronController";

const accountsRepository = AccountsRepository.getInstance();

const listAccountsPatronUsecase = new ListAccountsPatronUseCase(accountsRepository);

const listAccountsPatronController = new ListAccountsPatronController(listAccountsPatronUsecase);

export { listAccountsPatronController };
