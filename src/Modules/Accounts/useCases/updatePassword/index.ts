import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { UpdatePasswordController } from "./UpdatePasswordController";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

const accountsRepository = AccountsRepository.getInstance();

const updatePasswordUseCase = new UpdatePasswordUseCase(accountsRepository);

const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);

export { updatePasswordController };
