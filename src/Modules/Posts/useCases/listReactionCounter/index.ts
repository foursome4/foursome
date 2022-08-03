import { ReactionsRepository } from "../../repositories/implementations/ReactionsRepository";
import { ListReactionsCounterController } from "./ListReactionCounterController";
import { ListReactionsCounterUseCase } from "./ListReactionCounterUseCase";

const reactionsRepository = ReactionsRepository.getInstance();

const listReactionsCounterUsecase = new ListReactionsCounterUseCase(reactionsRepository);

const listReactionsCounterController = new ListReactionsCounterController(listReactionsCounterUsecase);

export { listReactionsCounterController };
