import { ForunsRepository } from "../../repositories/implementations/ForunsRepository";
import { ListForunsUserController } from "./ListForunsUserController";
import { ListForunsUserUseCase } from "./ListForunsUserUseCase";

const forunsRepository = ForunsRepository.getInstance();

const listForunsUserUsecase = new ListForunsUserUseCase(forunsRepository);

const listForunsUserController = new ListForunsUserController(listForunsUserUsecase);

export { listForunsUserController };
