import { ForunsRepository } from "../../repositories/implementations/ForunsRepository";
import { CreateForunsController } from "./CreateForunsController";
import { CreateForunsUseCase } from "./CreateForunsUseCase";

const forunsRepository = ForunsRepository.getInstance();

const createForunsUseCase = new CreateForunsUseCase(forunsRepository);

const createForunspController = new CreateForunsController(createForunsUseCase);

export { createForunspController };
