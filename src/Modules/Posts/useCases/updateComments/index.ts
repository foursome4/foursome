import { CommentsRepository } from "../../repositories/implementations/CommentsRepository";
import { UpdateCommentsController } from "./UpdateCommentsController";
import { UpdateCommentsUseCase } from "./UpdateCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();

const updateCommentsUseCase = new UpdateCommentsUseCase(commentsRepository);

const updateCommentsController = new UpdateCommentsController(updateCommentsUseCase);

export { updateCommentsController };
