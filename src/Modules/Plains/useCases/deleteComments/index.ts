import { CommentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { DeleteCommentsController } from "./DeleteCommentsController";
import { DeleteCommentsUseCase } from "./DeleteCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();
const deleteCommentsUseCase = new DeleteCommentsUseCase(commentsRepository);
const deleteCommentsController = new DeleteCommentsController(deleteCommentsUseCase);

export { deleteCommentsController };
