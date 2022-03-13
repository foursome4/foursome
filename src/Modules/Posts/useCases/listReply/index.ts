import { ReplyRepository } from "../../repositories/implementations/ReplyRepository";
import { ListReplyController } from "./ListReplyController";
import { ListReplyUseCase } from "./ListReplyUseCase";

const replyRepository = ReplyRepository.getInstance();

const listReplyUsecase = new ListReplyUseCase(replyRepository);

const listReplyController = new ListReplyController(listReplyUsecase);

export { listReplyController };
