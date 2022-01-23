import { ReplyRepository } from "../../repositories/implementations/ReplyRepository";
import { CreateReplyController } from "./CreateReplyController";
import { CreateReplyUseCase } from "./CreateReplyUseCase";

const replyRepository = ReplyRepository.getInstance();
const createReplyUseCase = new CreateReplyUseCase(replyRepository);
const createReplyController = new CreateReplyController(createReplyUseCase);

export { createReplyController };
