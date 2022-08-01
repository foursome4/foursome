import { NewsReplyRepository } from "../../repositories/implementations/NewsReplyRepository";
import { DeleteNewsReplyController } from "./DeleteNewsReplyController";
import { DeleteNewsReplyUseCase } from "./DeleteNewsReplyUseCase";

const newsReplyRepository = NewsReplyRepository.getInstance();
const deleteNewsReplyUseCase = new DeleteNewsReplyUseCase(newsReplyRepository);
const deleteNewsReplyController = new DeleteNewsReplyController(deleteNewsReplyUseCase);

export { deleteNewsReplyController };
