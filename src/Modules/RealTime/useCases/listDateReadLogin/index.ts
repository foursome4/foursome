import { DateReadLoginRepository } from "../../repositories/implementations/DateReadLoginRepository";
import { ListDateReadLoginController } from "./ListDateReadLoginController";
import { ListDateReadLoginUseCase } from "./ListDateReadLoginUseCase";

const dateReadLoginRepository = DateReadLoginRepository.getInstance();

const listDateReadLoginUsecase = new ListDateReadLoginUseCase(dateReadLoginRepository);

const listDateReadLoginController = new ListDateReadLoginController(listDateReadLoginUsecase);

export { listDateReadLoginController };
