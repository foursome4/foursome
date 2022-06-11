import { DateReadLoginRepository } from "../../repositories/implementations/DateReadLoginRepository";
import { CreateDateReadLoginController } from "./CreateDateReadLoginController";
import { CreateDateReadLoginUseCase } from "./CreateDateReadLoginUseCase";

const dateReadLoginRepository = DateReadLoginRepository.getInstance();
const createDateReadLoginUseCase = new CreateDateReadLoginUseCase(dateReadLoginRepository);
const createDateReadLoginController = new CreateDateReadLoginController(createDateReadLoginUseCase);

export { createDateReadLoginController };
