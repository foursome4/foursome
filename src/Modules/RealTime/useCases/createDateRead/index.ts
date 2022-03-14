import { DateReadRepository } from "../../repositories/implementations/DateReadRepository";
import { CreateDateReadController } from "./CreateDateReadController";
import { CreateDateReadUseCase } from "./CreateDateReadUseCase";

const dateReadRepository = DateReadRepository.getInstance();
const createDateReadUseCase = new CreateDateReadUseCase(dateReadRepository);
const createDateReadController = new CreateDateReadController(createDateReadUseCase);

export { createDateReadController };
