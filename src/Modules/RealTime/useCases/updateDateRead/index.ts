import { DateReadRepository } from "../../repositories/implementations/DateReadRepository";
import { UpdateDateReadController } from "./UpdateDateReadController";
import { UpdateDateReadUseCase } from "./UpdateDateReadUseCase";

const dateReadsRepository = DateReadRepository.getInstance();

const updateDateReadUseCase = new UpdateDateReadUseCase(dateReadsRepository);

const updateDateReadController = new UpdateDateReadController(updateDateReadUseCase);

export { updateDateReadController };
