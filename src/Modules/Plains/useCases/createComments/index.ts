import { CommentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { CreateCommentsController } from "./CreateCommentsController";
import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();
const createCommentsUseCase = new CreateCommentsUseCase(commentsRepository);
const createCommentsController = new CreateCommentsController(createCommentsUseCase);

export { createCommentsController };
