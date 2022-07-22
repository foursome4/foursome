import { NewsReplyRepository } from "../../repositories/implementations/NewsReplyRepository";
import { CreateNewsReplyController } from "./CreateNewsReplyController";
import { CreateNewsReplyUseCase } from "./CreateNewsReplyUseCase";

const newsRepository = NewsReplyRepository.getInstance();
const createNewsUseCase = new CreateNewsReplyUseCase(newsRepository);
const createNewsController = new CreateNewsReplyController(createNewsUseCase);


export { createNewsController };


