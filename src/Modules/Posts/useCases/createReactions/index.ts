import { ReactionsRepository } from "../../repositories/implementations/ReactionsRepository";
import { CreateReactionsController } from "./CreateReactionsController";
import { CreateReactionsUseCase } from "./CreateReactionsUseCase";

const reactionsRepository = ReactionsRepository.getInstance();
const createReactionsUseCase = new CreateReactionsUseCase(reactionsRepository);
const createReactionsController = new CreateReactionsController(createReactionsUseCase);

export { createReactionsController };
