
import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { DeleteAccountsController } from "./DeleteAccountsController";
import { DeleteAccountsUseCase } from "./DeleteAccountsUseCase";

const postsRepository = AccountsRepository.getInstance();
const deleteAccountsUseCase = new DeleteAccountsUseCase(postsRepository);
const deleteAccountsController = new DeleteAccountsController(deleteAccountsUseCase);

export { deleteAccountsController };
