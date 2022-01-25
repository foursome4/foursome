import { CommentsRepository } from "../../repositories/implementations/CommentsRepository";
import { ListCommentsController } from "./ListCommentsController";
import { ListCommentsUseCase } from "./ListCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();

const listCommentsUsecase = new ListCommentsUseCase(commentsRepository);

const listCommentsController = new ListCommentsController(listCommentsUsecase);

export { listCommentsController };
