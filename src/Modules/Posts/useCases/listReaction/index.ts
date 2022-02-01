import { ReactionsRepository } from "../../repositories/implementations/ReactionsRepository";
import { ListReactionsController } from "./ListReactionController";
import { ListReactionsUseCase } from "./ListReactionUseCase";

const reactionsRepository = ReactionsRepository.getInstance();

const listReactionsUsecase = new ListReactionsUseCase(reactionsRepository);

const listReactionsController = new ListReactionsController(listReactionsUsecase);

export { listReactionsController };
