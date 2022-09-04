import { DateReadLoginRepository } from "../../repositories/implementations/DateReadLoginRepository";
import { ListDateReadLoginAllController } from "./ListDateReadLoginAllController";
import { ListDateReadLoginAllUseCase } from "./ListDateReadLoginAllUseCase";

const dateReadLoginRepository = DateReadLoginRepository.getInstance();

const listDateReadLoginUsecase = new ListDateReadLoginAllUseCase(dateReadLoginRepository);

const listDateReadLoginAllController = new ListDateReadLoginAllController(listDateReadLoginUsecase);

export { listDateReadLoginAllController };
