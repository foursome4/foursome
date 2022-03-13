import { ReplyRepository } from "../../repositories/implementations/ReplyRepository";
import { DeleteReplyController } from "./DeleteReplyController";
import { DeleteReplyUseCase } from "./DeleteReplyUseCase";

const replyRepository = ReplyRepository.getInstance();
const deleteReplyUseCase = new DeleteReplyUseCase(replyRepository);
const deleteReplyController = new DeleteReplyController(deleteReplyUseCase);

export { deleteReplyController };
