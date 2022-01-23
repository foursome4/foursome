import { ForunsRepository } from "../../repositories/implementations/ForunsRepository";
import { CreateForunsController } from "./CreateForunsController";
import { CreateForunsUseCase } from "./CreateForunsUseCase";

const forunsRepository = ForunsRepository.getInstance();

const createForunsUseCase = new CreateForunsUseCase(forunsRepository);

const createForunsController = new CreateForunsController(createForunsUseCase);

export { createForunsController };
