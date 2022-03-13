import { ReplyRepository } from "../../repositories/implementations/ReplyRepository";
import { UpdateReplyController } from "./UpdateReplyController";
import { UpdateReplyUseCase } from "./UpdateReplyUseCase";

const replyRepository = ReplyRepository.getInstance();

const updateReplyUseCase = new UpdateReplyUseCase(replyRepository);

const updateReplyController = new UpdateReplyController(updateReplyUseCase);

export { updateReplyController };
