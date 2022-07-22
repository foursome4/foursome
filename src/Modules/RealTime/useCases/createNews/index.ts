import { NewsRepository } from "../../repositories/implementations/NewsRepository";
import { CreateNewsController } from "./CreateNewsController";
import { CreateNewsUseCase } from "./CreateNewsUseCase";

const newsRepository = NewsRepository.getInstance();
const createNewsUseCase = new CreateNewsUseCase(newsRepository);
const createNewsController = new CreateNewsController(createNewsUseCase);

export { createNewsController };


