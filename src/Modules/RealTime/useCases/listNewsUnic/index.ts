import { NewsRepository } from "../../repositories/implementations/NewsRepository";
import { ListNewsUnicController } from "./ListNewsUnicController";
import { ListNewsUnicUseCase } from "./ListNewsUnicUseCase";

const newsRepository = NewsRepository.getInstance();

const listNewsUnicUsecase = new ListNewsUnicUseCase(newsRepository);

const listNewsUnicController = new ListNewsUnicController(listNewsUnicUsecase);

export { listNewsUnicController };
