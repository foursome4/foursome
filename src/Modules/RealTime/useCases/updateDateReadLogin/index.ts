import { DateReadLoginRepository } from "../../repositories/implementations/DateReadLoginRepository";
import { UpdateDateReadLoginController } from "./UpdateDateReadLoginController";
import { UpdateDateReadLoginUseCase } from "./UpdateDateReadLoginUseCase";

const dateReadLoginRepository = DateReadLoginRepository.getInstance();

const updateDateReadLoginUseCase = new UpdateDateReadLoginUseCase(dateReadLoginRepository);

const updateDateReadLoginController = new UpdateDateReadLoginController(updateDateReadLoginUseCase);

export { updateDateReadLoginController };
