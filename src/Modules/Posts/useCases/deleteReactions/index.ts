import { ReactionsRepository } from "../../repositories/implementations/ReactionsRepository";
import { DeleteReactionsController } from "./DeleteReactionsController";
import { DeleteReactionsUseCase } from "./DeleteReactionsUseCase";

const reactionsRepository = ReactionsRepository.getInstance();
const deleteReactionsUseCase = new DeleteReactionsUseCase(reactionsRepository);
const deleteReactionsController = new DeleteReactionsController(deleteReactionsUseCase);

export { deleteReactionsController };
