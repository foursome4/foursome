import { ForunsRepository } from "../../repositories/implementations/ForunsRepository";
import { ListForunsUnicController } from "./ListForunsUnicController";
import { ListForunsUnicUseCase } from "./ListForunsUnicUseCase";

const forunsRepository = ForunsRepository.getInstance();

const listForunsUnicUsecase = new ListForunsUnicUseCase(forunsRepository);

const listForunsUnicController = new ListForunsUnicController(listForunsUnicUsecase);

export { listForunsUnicController };
