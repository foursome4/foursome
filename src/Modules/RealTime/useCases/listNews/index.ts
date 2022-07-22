import { NewsRepository } from "../../repositories/implementations/NewsRepository";
import { ListNewsController } from "./ListNewsController";
import { ListNewsUseCase } from "./ListNewsUseCase";

const newsRepository = NewsRepository.getInstance();

const listNewsUsecase = new ListNewsUseCase(newsRepository);

const listNewsController = new ListNewsController(listNewsUsecase);

export { listNewsController };
