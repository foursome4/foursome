import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { UpdateStatusController } from "./UpdateStatusController";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";

const accountsRepository = AccountsRepository.getInstance();

const updateStatusUseCase = new UpdateStatusUseCase(accountsRepository);

const updateStatusController = new UpdateStatusController(updateStatusUseCase);

export { updateStatusController };
