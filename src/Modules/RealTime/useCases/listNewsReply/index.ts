import { NewsReplyRepository } from "../../repositories/implementations/NewsReplyRepository";
import { ListNewsReplyController } from "./ListNewsReplyController";
import { ListNewsReplyUseCase } from "./ListNewsReplyUseCase";

const newsRepository = NewsReplyRepository.getInstance();

const listNewsReplyUsecase = new ListNewsReplyUseCase(newsRepository);

const listNewsReplyController = new ListNewsReplyController(listNewsReplyUsecase);

export { listNewsReplyController };
