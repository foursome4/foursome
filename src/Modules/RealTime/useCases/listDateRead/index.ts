import { DateReadRepository } from "../../repositories/implementations/DateReadRepository";
import { ListDateReadController } from "./ListDateReadController";
import { ListDateReadUseCase } from "./ListDateReadUseCase";

const dateReadRepository = DateReadRepository.getInstance();

const listDateReadUsecase = new ListDateReadUseCase(dateReadRepository);

const listDateReadController = new ListDateReadController(listDateReadUsecase);

export { listDateReadController };
