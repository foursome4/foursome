import { NewsReplyRepository } from "../../repositories/implementations/NewsReplyRepository";
import { CreateNewsReplyController } from "./CreateNewsReplyController";
import { CreateNewsReplyUseCase } from "./CreateNewsReplyUseCase";

const newsReplyRepository = NewsReplyRepository.getInstance();
const createNewsReplyUseCase = new CreateNewsReplyUseCase(newsReplyRepository);
const createNewsReplyController = new CreateNewsReplyController(createNewsReplyUseCase);


export { createNewsReplyController };


