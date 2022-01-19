import { CommentsRepository } from "../../repositories/implementations/CommentsRepository";
import { CreateCommentsController } from "./CreateCommentsController";
import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();
const createCommentsUseCase = new CreateCommentsUseCase(commentsRepository);
const createCommentsController = new CreateCommentsController(createCommentsUseCase);

export { createCommentsController };
