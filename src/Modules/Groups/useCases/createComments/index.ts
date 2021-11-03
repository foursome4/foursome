import { CommentsRepository } from "../../repositories/implementations/CommentsRepository";
import { CreateCommentsController } from "./CreateCommentsController";
import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

const commentRepository = CommentsRepository.getInstance();
const createCommentsGroupUseCase = new CreateCommentsUseCase(commentRepository);
const createCommentsController = new CreateCommentsController(
  createCommentsGroupUseCase
);

export { createCommentsController };
