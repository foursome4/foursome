import { CommentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { UpdateCommentsController } from "./UpdateCommentsController";
import { UpdateCommentsUseCase } from "./UpdateCommentsUseCase";

const commentsRepository = CommentsRepository.getInstance();

const updateCommentsUseCase = new UpdateCommentsUseCase(commentsRepository);

const updateCommentsController = new UpdateCommentsController(updateCommentsUseCase);

export { updateCommentsController };
