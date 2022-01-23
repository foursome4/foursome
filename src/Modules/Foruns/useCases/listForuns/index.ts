import { ForunsRepository } from "../../repositories/implementations/ForunsRepository";
import { ListForunsController } from "./ListForunsController";
import { ListForunsUseCase } from "./ListForunsUseCase";

const forunsRepository = ForunsRepository.getInstance();

const listForunsUsecase = new ListForunsUseCase(forunsRepository);

const listForunsController = new ListForunsController(listForunsUsecase);

export { listForunsController };
